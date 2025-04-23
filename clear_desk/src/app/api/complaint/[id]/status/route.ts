import { prisma } from "@/lib/prisma-client";
import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';

export async function PUT(req: Request) {
  try {
    const { id, status } = await req.json();
    console.log('Received data:', { id, status });

    if (!id || !status) {
      return NextResponse.json(
        {
          success: false,
          message: 'Both complaint ID and status are required',
        },
        { status: 400 }
      );
    }

    const complaint = await prisma.complaints.findUnique({
      where: { id },
    });

    if (!complaint) {
      return NextResponse.json(
        {
          success: false,
          message: 'Complaint not found',
        },
        { status: 404 }
      );
    }

    const updatedComplaint = await prisma.complaints.update({
      where: { id },
      data: { status },
    });

    // Notify user via email if user exists
    if (updatedComplaint.user_id) {
      const user = await prisma.users.findUnique({
        where: { id: updatedComplaint.user_id },
      });

      if (user?.email) {
        const subject = `Complaint status updated to: ${status}`;
        const body = `Hello,\n\nYour complaint titled "${updatedComplaint.title}" has been updated to "${status}".\n\nRegards,\nSupport Team`;

        try {
          await sendEmail(user.email, subject, body);
        } catch (emailError) {
          console.error("Failed to send email notification:", emailError);
        }
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: `Complaint status updated to '${status}' successfully.`,
        data: updatedComplaint,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('STATUS UPDATE ERROR:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to update complaint status',
        error: (error as Error).message,
      },
      { status: 500 }
    );
  }
}
