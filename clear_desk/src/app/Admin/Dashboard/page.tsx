import React from "react";
import ComplaintSummary from "./Components/ComplaintSummary";
import ComplaintTable from "./Components/ComplaintTable";
import { RoleGuard } from "./Components/RoleGuard";

export default function AdminDashboardPage() {
  return (
    <RoleGuard roles={["superadmin", "moderator"]}>
      <div className="p-6 space-y-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <ComplaintSummary />
        <ComplaintTable />
      </div>
    </RoleGuard>
  );
}
