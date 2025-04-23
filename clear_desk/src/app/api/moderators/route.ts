import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma-client'

/**
 * GET /api/moderators
 * Fetch all moderators with their access levels
 */
export async function GET(req: NextRequest) {
  try {
    const moderators = await prisma.admin.findMany({
      where: {
        is_admin: false,
      },
      include: {
        access_levels: true,
      },
    })

    const moderatorsWithAccess = moderators.filter(
      (moderator) => moderator.access_levels !== null
    )

    return NextResponse.json(
      {
        success: true,
        message: 'Moderators fetched successfully',
        data: moderatorsWithAccess,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error fetching moderators:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to fetch moderators',
        error: (error as Error).message,
      },
      { status: 500 }
    )
  }
}

/**
 * PATCH /api/moderators
 * Update a specific access level field for a moderator
 * Body: { moderatorId: string, category: string, newLevel: 'no_access' | 'read' | 'read/write' }
 */
export async function PATCH(req: NextRequest) {
  try {
    const { moderatorId, category, newLevel } = await req.json()

    if (!moderatorId || !category || !newLevel) {
      return NextResponse.json(
        {
          success: false,
          message: 'Missing required fields: moderatorId, category, newLevel',
        },
        { status: 400 }
      )
    }

    const validCategories = ['accommodation', 'payments', 'events', 'others']
    if (!validCategories.includes(category)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid category provided',
        },
        { status: 400 }
      )
    }

    const updatedAccess = await prisma.access_levels.update({
      where: { id: moderatorId },
      data: {
        [category]: newLevel,
      },
    })

    return NextResponse.json(
      {
        success: true,
        message: `Access level for '${category}' updated successfully`,
        data: updatedAccess,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error updating access level:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to update access level',
        error: (error as Error).message,
      },
      { status: 500 }
    )
  }
}
