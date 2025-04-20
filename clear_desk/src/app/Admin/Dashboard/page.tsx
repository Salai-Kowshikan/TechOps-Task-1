// import React from "react";
// import ComplaintSummary from "./Components/ComplaintSummary";
// import ComplaintTable from "./Components/ComplaintTable";
// import { RoleGuard } from "./Components/RoleGuard";

// export default function AdminDashboardPage() {
//   return (
//     <RoleGuard roles={["superadmin", "moderator"]}>
//       <div className="p-6 space-y-6">
//         <h1 className="text-3xl font-bold">Admin Dashboard</h1>
//         <ComplaintSummary />
//         <ComplaintTable />
//       </div>
//     </RoleGuard>
//   );
// }

"use client";

import { useComplaints } from "@/hooks/useComplaints";

export default function AdminDashboardPage() {
  const { data, isLoading, error } = useComplaints();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading complaints</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Admin Dashboard</h1>
      <ul>
        {data.map((complaint: any) => (
          <li key={complaint.id} className="border p-2 my-2">
            <strong>{complaint.title}</strong> - {complaint.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

