import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma-client'

export async function GET() {
  try {
    const moderators = await prisma.admin.findMany({
      where: { is_admin: false },
      orderBy: { created_at: 'desc' }, // Optional: newest first
      select: {
        id: true,
        name: true,
        email: true,
        ph_number: true,
        created_at: true,
      },
    })

    return NextResponse.json(moderators, { status: 200 })
  } catch (error) {
    console.error('Error fetching moderators:', error)
    return NextResponse.json({ error: 'Failed to fetch moderators' }, { status: 500 })
  }
}
