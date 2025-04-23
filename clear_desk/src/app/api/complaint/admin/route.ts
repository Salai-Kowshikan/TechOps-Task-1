// app/api/complaints/route.ts (GET handler)

import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma-client";

export async function GET(req: NextRequest) {
  try {
    const status = req.nextUrl.searchParams.get("status"); // e.g. ?status=pending
    const where = status && status !== "all" ? { status } : {};

    const complaints = await prisma.complaints.findMany({
      where,
      orderBy: { created_at: "desc" },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Complaints fetched successfully.",
        data: complaints,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching complaints:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch complaints.",
      },
      { status: 500 }
    );
  }
}
