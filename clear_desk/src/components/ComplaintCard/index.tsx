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
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

interface ComplaintCardProps {
  title: string;
  description: string;
  images: string[];
  category: string;
  status: string;
}

const ComplaintCard: React.FC<ComplaintCardProps> = ({
  title,
  description,
  images,
  category,
  status,
}) => {
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
            <Button>Open</Button>
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

              </div>
              <div style={{ display: "flex", gap: "8px" }}>
                <Input
                  type="text"
                  placeholder="Type your message..."
                  style={{
                    flex: 1,
                    padding: "8px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                />
                <Button>Send</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default ComplaintCard;
