import { NextResponse,NextRequest } from "next/server";
import { prisma } from "@/lib/prisma-client";

export async function GET(req: NextRequest) { //get complaints by status - admin
    try {
      const status = req.nextUrl.searchParams.get("status"); // e.g. ?status=pending
      const where = status && status !== "all" ? { status } : {};
  
      const complaints = await prisma.complaints.findMany({
        where,
        orderBy: { created_at: "desc" },
      });
  
      return NextResponse.json(complaints, { status: 200 });
    } catch (error) {
      console.error("Error fetching complaints:", error);
      return NextResponse.json({ error: "Failed to fetch complaints" }, { status: 500 });
    }
  }