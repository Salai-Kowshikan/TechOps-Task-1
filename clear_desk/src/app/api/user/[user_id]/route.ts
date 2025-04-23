import { NextRequest, NextResponse } from 'next/server'
import { prisma } from "@/lib/prisma-client";

export async function GET(req: NextRequest, { params }: { params: Promise<{ user_id: string }> }) {
  const { user_id } = await params;

  try {
    const user = await prisma.users.findUnique({
      where: {
        id: user_id,
      },
      select: {
        name: true,
      },
    })

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }
    return NextResponse.json(user)
  } catch (error) {
    console.error('Error fetching user:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
