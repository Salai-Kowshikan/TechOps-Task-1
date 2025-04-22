import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email'; 

export async function PUT(req: Request) {
  try {
    const { id, status } = await req.json(); // Extract id and status from request body

    // Check if both 'id' and 'status' are provided
    if (!id || !status) {
      return NextResponse.json({ message: 'id and status are required' }, { status: 400 });
    }

    // First, fetch the complaint without the user info
    const complaint = await prisma.complaints.findUnique({
      where: { id },
    });

    // If the complaint is not found, return an error response
    if (!complaint) {
      return NextResponse.json({ message: 'Complaint not found' }, { status: 404 });
    }

    // Proceed to update the complaint's status
    const updatedComplaint = await prisma.complaints.update({
      where: { id },
      data: { status },
    });

    // Now check if there is a user, and if so, send an email
    if (updatedComplaint.user_id) {
      const user = await prisma.users.findUnique({
        where: { id: updatedComplaint.user_id },
      });

      // If user exists, send the email notification
      if (user) {
        const userEmail = user.email;
        const emailSubject = `Complaint status updated to: ${status}`;
        const emailBody = `Your complaint titled "${updatedComplaint.title}" has been updated to "${status}".`;

        // Assuming sendEmail is defined and working in your lib/email.js file
        await sendEmail(userEmail, emailSubject, emailBody);
      }
    }

    // Return the updated complaint data as response
    return NextResponse.json(updatedComplaint);
  } catch (error) {
    console.error('STATUS UPDATE ERROR', error);
    return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
  }
}
