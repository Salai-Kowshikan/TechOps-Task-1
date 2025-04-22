import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma-client'
import { sendEmail } from '@/lib/email'

// GET request to fetch complaint details
export async function GET(req: NextRequest, context: { params: { id: string } }) {
  const { id } = context.params

  try {
    const complaint = await prisma.complaints.findUnique({
      where: { id },
      include: {
        complaint_responses: true,
      },
    })

    if (!complaint) {
      return NextResponse.json(
        { success: false, message: 'Complaint not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Complaint fetched successfully', data: complaint },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error fetching complaint:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to fetch complaint' },
      { status: 500 }
    )
  }
}

// POST request to respond to a complaint
export async function POST(req: NextRequest) {
  const { id, message, sentBy } = await req.json()

  if (!id || !message || !sentBy) {
    return NextResponse.json(
      { success: false, message: 'id, message, and sentBy are required' },
      { status: 400 }
    )
  }

  try {
    const complaint = await prisma.complaints.findUnique({
      where: { id },
    })

    if (!complaint) {
      return NextResponse.json(
        { success: false, message: 'Complaint not found' },
        { status: 404 }
      )
    }

    const newResponse = {
      message,
      sent_by: sentBy,
      created_at: new Date(),
    }

    let updatedResponse
    const existingResponse = await prisma.complaint_responses.findFirst({
      where: { complaint_id: id },
    })

    if (existingResponse) {
      const updatedResponses = [
        ...existingResponse.responses,
        JSON.parse(JSON.stringify(newResponse)),
      ]

      updatedResponse = await prisma.complaint_responses.update({
        where: { id: existingResponse.id },
        data: {
          responses: updatedResponses,
        },
      })
    } else {
      updatedResponse = await prisma.complaint_responses.create({
        data: {
          complaint_id: id,
          responses: [newResponse],
        },
      })
    }

    // Send email if sent by admin
    if (sentBy === 'admin' && complaint.user_id) {
      const user = await prisma.users.findUnique({
        where: { id: complaint.user_id },
      })

      if (user?.email) {
        const subject = `You've received a reply to your complaint "${complaint.title}"`
        const body = `Hello,\n\nYou have received a response from the admin:\n\n"${message}"\n\nRegards,\nSupport Team`

        try {
          await sendEmail(user.email, subject, body)
        } catch (emailError) {
          console.error('Error sending email:', emailError)
        }
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Response submitted successfully',
        data: updatedResponse,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error responding to complaint:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}
