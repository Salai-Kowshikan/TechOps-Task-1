import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const complaintData: Record<string, any> = {};

    formData.forEach((value, key) => {
      if (key.startsWith("images")) {
        if (!complaintData.images) complaintData.images = [];
        complaintData.images.push(value);
      } else {
        complaintData[key] = value;
      }
    });

    console.log("Received Complaint Data:", complaintData);

    return NextResponse.json({ message: "Complaint received successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error processing complaint:", error);
    return NextResponse.json({ error: "Failed to process complaint" }, { status: 500 });
  }
}
