// app/api/complaint/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma-client'

// GET request to fetch complaint details
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params

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
export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params
  const { message, sentBy } = await req.json()

  if (!message || !sentBy) {
    return NextResponse.json({ message: 'Message and sender are required' }, { status: 400 })
  }

  try {
    // Find the complaint to ensure it exists
    const complaint = await prisma.complaints.findUnique({
      where: { id },
    })

    if (!complaint) {
      return NextResponse.json({ message: 'Complaint not found' }, { status: 404 })
    }

    // Create a new response object
    const newResponse = {
      message,
      sent_by: sentBy, // 'admin' or 'user'
      created_at: new Date(),
    }

    // If responses already exist, append the new response to the array
    let updatedResponse
    const existingResponse = await prisma.complaint_responses.findUnique({
      where: { complaint_id: id },
    })

    if (existingResponse) {
      updatedResponse = await prisma.complaint_responses.update({
        where: { complaint_id: id },
        data: {
          responses: {
            push: newResponse, // Add the new response to the existing responses array
          },
        },
      })
    } else {
      // If no responses exist, create a new entry with the response
      updatedResponse = await prisma.complaint_responses.create({
        data: {
          complaint_id: id,
          responses: [newResponse], // Start the responses array with the new response
        },
      })
    }

    return NextResponse.json(updatedResponse)
  } catch (error) {
    console.error('Error responding to complaint:', error)
    return NextResponse.json({ message: 'Error responding to complaint' }, { status: 500 })
  }
}