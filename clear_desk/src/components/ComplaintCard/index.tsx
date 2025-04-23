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
import { cn } from "@/lib/utils";

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
      if (!response.ok) throw new Error("Failed to fetch messages");
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
      if (!response.ok) throw new Error("Failed to send message");
      const data = await response.json();
      setMessages(data.updatedResponses);
      setNewMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const statusColor =
    status.toLowerCase() === "resolved"
      ? "bg-green-100 text-green-800"
      : status.toLowerCase() === "in progress"
      ? "bg-yellow-100 text-yellow-800"
      : "bg-red-100 text-red-800";

  return (
    <Card className="rounded-xl ml-3 mr-3 mb-3 shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-primary/90">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col h-full justify-between">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="secondary">{category}</Badge>
          <Badge className={cn("capitalize", statusColor)}>{status}</Badge>
        </div>
        <div>
          {images.map((image, index) => (
            <img
              key={index}
              src={image ? image : "E:\SD_CEG_Tech_Forum\Techops\Project\complaint-handle\public\file.svg"} 
              alt={`Image ${index + 1}`}
              className="w-16 h-16 rounded object-cover border"
            />
          ))}
        </div>
      </CardContent>
      <CardFooter className="justify-end ml-auto">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm" onClick={fetchMessages}>
              Open Chat
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Discussion</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col h-[300px]">
              <div className="flex-1 overflow-y-auto pr-2 space-y-2">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={cn(
                      "p-3 rounded-lg max-w-xs text-sm",
                      msg.sent_by === "admin"
                        ? "bg-blue-500/10 dark:bg-blue-400/20 text-right ml-auto"
                        : "bg-gray-200 dark:bg-gray-700 text-left"
                    )}
                    
                  >
                    <p className="font-semibold mb-1">
                      {msg.sent_by === "admin" ? "Admin" : "User"}
                    </p>
                    <p>{msg.message}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {new Date(msg.created_at).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 mt-2">
                <Input
                  type="text"
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
                <Button size="sm" onClick={sendMessage}>
                  Send
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default ComplaintCard;

