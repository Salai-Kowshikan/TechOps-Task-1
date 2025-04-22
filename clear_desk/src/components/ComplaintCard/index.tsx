import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";

interface ComplaintCardProps {
  complaint_id: string;
  title: string;
  description: string;
  images: string[];
  category: string;
  status: string;
}

const ComplaintCard: React.FC<ComplaintCardProps> = ({
  complaint_id,
  title,
  description,
  images,
  category,
  status,
}) => {
  const [messages, setMessages] = useState<any[]>([]); 
  const [newMessage, setNewMessage] = useState("");

  const fetchMessages = async () => {
    try {
      const response = await fetch(`/api/response?complaint_id=${complaint_id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch messages");
      }
      const data = await response.json();
      setMessages(data.responses || []);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const sendMessage = async () => {
    if (!newMessage.trim()) return;

    try {
      const response = await fetch("/api/response", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          complaint_id,
          role: "user",
          message: newMessage,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      const data = await response.json();
      setMessages(data.updatedResponses);
      setNewMessage(""); 
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col h-full justify-between">
        <div>
          <Badge>{category}</Badge> <Badge>{status}</Badge>
        </div>
        <div>
          <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                style={{ width: "50px", height: "50px", objectFit: "cover" }}
              />
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="ml-auto">
        <Dialog>
          <DialogTrigger asChild>
            <Button onClick={fetchMessages}>Open</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Chat</DialogTitle>
            </DialogHeader>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "300px",
              }}
            >
              <div className="flex-1 overflow-y-auto">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg max-w-xs mb-2 ${
                      msg.sent_by === "admin"
                        ? "bg-blue-100 text-right ml-auto"
                        : "bg-gray-100 text-left"
                    }`}
                  >
                    <p className="text-sm font-semibold">
                      {msg.sent_by === "admin" ? "Admin" : "User"}
                    </p>
                    <p className="text-sm">{msg.message}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(msg.created_at).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: "8px" }}>
                <Input
                  type="text"
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  style={{
                    flex: 1,
                    padding: "8px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                />
                <Button onClick={sendMessage}>Send</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default ComplaintCard;
