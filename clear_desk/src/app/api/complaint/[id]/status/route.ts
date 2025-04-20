import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma-client'

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const { status } = await req.json()

  const validStatuses = ['pending', 'in progress', 'resolved']
  const normalizedStatus = status.toLowerCase()

  if (!validStatuses.includes(normalizedStatus)) {
    return NextResponse.json({ error: 'Invalid status' }, { status: 400 })
  }

  const updated = await prisma.complaints.update({
    where: { id: params.id },
    data: { status: normalizedStatus },
  })

  return NextResponse.json(updated)
}

