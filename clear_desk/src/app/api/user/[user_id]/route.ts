import { NextRequest, NextResponse } from 'next/server'
import { prisma } from "@/lib/prisma-client";

export async function GET(req: NextRequest, { params }: { params: { user_id: string } }) {
  const { user_id } = params

  try {
    // Fetch the user by ID
    const user = await prisma.users.findUnique({
      where: {
        id: user_id,
      },
      select: {
        name: true, // Fetch only the username field
      },
    })

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    // Return the username in the response
    return NextResponse.json(user)
  } catch (error) {
    console.error('Error fetching user:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
