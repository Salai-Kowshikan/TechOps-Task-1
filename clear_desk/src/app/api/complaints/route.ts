// app/api/complaints/route.ts

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      id: "123",
      title: "Sample Complaint",
      status: "Pending",
      category: "Infrastructure",
      createdAt: new Date().toISOString(),
    },
  ]);
}
