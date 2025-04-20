import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ComplaintCard({ complaint }: { complaint: any }) {
  return (
    <Card>
      <CardContent className="p-4 space-y-2">
        <div className="flex justify-between">
          <h3 className="text-xl font-bold">{complaint.title}</h3>
          <Badge variant="outline">{complaint.status}</Badge>
        </div>
        <p>{complaint.description}</p>
        <p className="text-sm text-gray-500">Category: {complaint.category}</p>
        {/* Actions */}
        <div className="flex gap-2">
          <Button size="sm">Mark In Progress</Button>
          <Button size="sm" variant="secondary">Resolve</Button>
        </div>
      </CardContent>
    </Card>
  );
}
