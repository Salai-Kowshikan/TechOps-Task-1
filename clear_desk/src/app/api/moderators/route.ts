import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma-client'

/**
 * GET /api/moderators
 * Fetch all moderators with their access levels
 */
export async function GET(req: NextRequest) {
  try {
    const moderators = await prisma.admin.findMany({
      where: { is_admin: false },
      include: { access_levels: true },
    });

    return NextResponse.json(moderators, { status: 200 });
  } catch (error) {
    console.error("Error fetching moderators:", error);
    return NextResponse.json({ error: "Failed to fetch moderators" }, { status: 500 });
  }
}

/**
 * PATCH /api/moderators
 * Update a specific access level field (like `accommodation`, `payments`) for a moderator
 * Body: { moderatorId: string, category: string, newLevel: 'no_access' | 'read' | 'read/write' }
 */
export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { moderatorId, category, newLevel } = body;

    if (!moderatorId || !category || !newLevel) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Check if the category exists in the AccessLevel model
    const validCategories = ['accommodation', 'payments', 'events', 'others'];
    if (!validCategories.includes(category)) {
      return NextResponse.json({ error: "Invalid category" }, { status: 400 });
    }

    // Update the access level for the given category
    const updatedAccess = await prisma.access_levels.update({
      where: { id: moderatorId },
      data: {
        [category]: newLevel,
      },
    });

    return NextResponse.json(updatedAccess, { status: 200 });
  } catch (error) {
    console.error("Error updating access level:", error);
    return NextResponse.json({ error: "Failed to update access level" }, { status: 500 });
  }
}
