"use client"
import ComplaintForm from "@/components/UserDashboard/ComplaintForm";
import { Separator } from "@/components/ui/separator";
import { useQuery } from "@tanstack/react-query";
import ComplaintCard from "@/components/ComplaintCard";
import { useEffect } from "react";
import useUserDetailStore from "@/Store/userDetailStore";
import { useSession } from "next-auth/react";

export default function UserDashboard() {
  const { data: session, status } = useSession();
  const user_id = "8b61d408-50c7-43b9-a5fc-93ec22740cd7";

  const userDetails = useUserDetailStore((state) => state.user);

  useEffect(() => {
    console.log("Session data:", session);
    console.log("User details from store:", userDetails);
  }, [session, userDetails]);

  const { data: complaints, isLoading, isError } = useQuery({
    queryKey: ["complaints", user_id],
    queryFn: async () => {
      const response = await fetch(`/api/complaint?user_id=${user_id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch complaints");
      }
      return response.json();
    },
  });

  return (
    <div className="flex flex-col gap-4 p-8">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Hey, Selva Ganesh</h1>
        <ComplaintForm />
      </div>
      <Separator className="border-black" />
      <h2>Your complaints</h2>
      {isLoading && <p>Loading complaints...</p>}
      {isError && <p>Failed to load complaints.</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {complaints?.data?.map((complaint: any) => (
          <ComplaintCard
            key={complaint.id}
            complaint_id={complaint.id}
            title={complaint.title}
            description={complaint.description}
            images={complaint.image_url}
            category={complaint.category}
            status={complaint.status}
          />
        ))}
      </div>
    </div>
  );
}
