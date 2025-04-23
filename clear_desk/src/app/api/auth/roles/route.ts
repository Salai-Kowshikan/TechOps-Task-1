import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma-client';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json(
        { error: 'Missing ID parameter' },
        { status: 400 }
      );
    }

    const accessLevels = await prisma.access_levels.findUnique({
      where: {
        id: id
      },
      include: {
        admin: {
          select: {
            name: true,
            email: true,
            is_admin: true
          }
        }
      }
    });

    if (!accessLevels) {
      return NextResponse.json(
        { error: 'Access level not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(accessLevels, { status: 200 });
    
  } catch (error) {
    console.error('Error fetching access level:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
