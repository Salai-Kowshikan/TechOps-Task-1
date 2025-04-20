import { NextResponse,NextRequest } from "next/server";
import { uploadToSupabase } from "@/lib/file_upload";
import { prisma } from "@/lib/prisma-client";

export async function POST(request: Request) { //user - create complaint
  try {
    const formData = await request.formData();
    const complaintData: Record<string, any> = {};
    const imageUrls: string[] = [];

    console.log("env: ", process.env.BUCKET_URL, process.env.BUCKET_ACCESS_KEY);

    for (const [key, value] of formData.entries()) {
      if (key.startsWith("images") && value instanceof File) {
        const publicUrl = await uploadToSupabase(value, "images");
        if (publicUrl) {
          imageUrls.push(publicUrl);
        }
      } else {
        complaintData[key] = value;
      }
    }

    complaintData.imageUrls = imageUrls;    

    const savedComplaint = await prisma.complaints.create({
      data: {
        category: complaintData.category,
        title: complaintData.title,
        description: complaintData.description,
        image_url: imageUrls,
        status: "pending",
        user_id: complaintData.user_id,
      },
    });

    console.log("Complaint saved to database:", savedComplaint);

    return NextResponse.json(
      { message: "Complaint received and saved successfully!", data: savedComplaint },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing complaint:", error);
    return NextResponse.json(
      { error: "Failed to process complaint" },
      { status: 500 }
    );
  }
}


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
