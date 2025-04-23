import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma-client';
import bcrypt from 'bcryptjs';

export async function POST(req: NextRequest) {
  try {
    const { name, email, password, ph_number } = await req.json();

    // Validate required fields
    if (!name || !email || !password || !ph_number) {
      return NextResponse.json(
        { success: false, message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Check if the email already exists
    const existingModerator = await prisma.admin.findUnique({
      where: { email },
    });

    if (existingModerator) {
      return NextResponse.json(
        { success: false, message: 'Email already exists' },
        { status: 400 }
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the moderator
    const newModerator = await prisma.admin.create({
      data: {
        name,
        email,
        password: hashedPassword,
        ph_number,
        is_admin: false, // Default to false
      },
    });

    // Create the access_levels entry for the moderator
    await prisma.access_levels.create({
      data: {
        id: newModerator.id, // Use the same ID as the moderator
        accommodation: 'no_access',
        payments: 'no_access',
        events: 'no_access',
        others: 'no_access',
      },
    });

    return NextResponse.json(
      { success: true, message: 'Moderator created successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating moderator:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}