"use client";
import { useQuery } from "@tanstack/react-query";
import { getComplaints } from "@/lib/api/admin/admin";
import ComplaintCard from "@/components/AdminDashboard/ComplaintCard";

export default function ComplaintTable() {
  const { data, isLoading } = useQuery({
    queryKey: ["adminComplaints"],
    queryFn: getComplaints,
  });

  if (isLoading) return <div>Loading complaints...</div>;

  return (
    <div className="grid gap-4">
      {data?.map((complaint: any) => (
        <ComplaintCard key={complaint.id} complaint={complaint} />
      ))}
    </div>
  );
}
