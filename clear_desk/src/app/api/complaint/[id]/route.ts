// app/api/complaint/[id]/route.ts
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
        complaint_responses: true, // Include responses with the complaint
      },
    })

    if (!complaint) {
      return NextResponse.json({ message: 'Complaint not found' }, { status: 404 })
    }

    return NextResponse.json(complaint)
  } catch (error) {
    console.error('Error fetching complaint:', error)
    return NextResponse.json({ message: 'Error fetching complaint' }, { status: 500 })
  }
}

// POST request to respond to a complaint
export async function POST(req: NextRequest) {
  const { id, message, sentBy } = await req.json()
  console.log('Received data:', { id, message, sentBy })

  if (!id || !message || !sentBy) {
    return NextResponse.json({ message: 'id, message, and sentBy are required' }, { status: 400 })
  }

  try {
    // Validate complaint exists
    const complaint = await prisma.complaints.findUnique({
      where: { id },
    })

    if (!complaint) {
      return NextResponse.json({ message: 'Complaint not found' }, { status: 404 })
    }

    // Construct the new response
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
      const updatedResponses = [...existingResponse.responses, newResponse]
    
      updatedResponse = await prisma.complaint_responses.update({
        where: { id: existingResponse.id }, // Use actual ID here
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
    

    // Send email if response is from admin
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

    return NextResponse.json(updatedResponse)
  } catch (error) {
    console.error('Error responding to complaint:', error)
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 })
  }
}
