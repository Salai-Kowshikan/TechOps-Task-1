"use client";
import { Card, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { getComplaintStats } from "@/lib/api/admin/admin";

export default function ComplaintSummary() {
  const { data, isLoading } = useQuery({
    queryKey: ["complaintStats"],
    queryFn: getComplaintStats,
  });

  if (isLoading) return <div>Loading summary...</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {["total", "pending", "resolved"].map((key) => (
        <Card key={key}>
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold capitalize">{key} Complaints</h2>
            <p className="text-2xl">{data?.[key]}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
