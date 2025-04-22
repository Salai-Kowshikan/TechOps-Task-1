import { prisma } from "@/lib/prisma-client";
import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email'; 

export async function PUT(req: Request) {
  try {
    const { id, status } = await req.json(); 
    console.log('Received data:', { id, status });

    if (!id || !status) {
      return NextResponse.json({ message: 'id and status are required' }, { status: 400 });
    }

    const complaint = await prisma.complaints.findUnique({
      where: { id },
    });

    if (!complaint) {
      return NextResponse.json({ message: 'Complaint not found' }, { status: 404 });
    }

    const updatedComplaint = await prisma.complaints.update({
      where: { id },
      data: { status },
    });

    if (updatedComplaint.user_id) {
      const user = await prisma.users.findUnique({
        where: { id: updatedComplaint.user_id },
      });

      if (user) {
        const userEmail = user.email;
        const emailSubject = `Complaint status updated to: ${status}`;
        const emailBody = `Your complaint titled "${updatedComplaint.title}" has been updated to "${status}".`;

        await sendEmail(userEmail, emailSubject, emailBody);
      }
    }
    return NextResponse.json(updatedComplaint);
  } catch (error) {
    console.error('STATUS UPDATE ERROR', error);
    return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
  }
}

