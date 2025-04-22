import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import bcrypt from 'bcrypt';
import { prisma } from '@/lib/prisma-client';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const name = formData.get('fullName') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const ph_number = formData.get('phone') as string;

    if (!name || !email || !password || !ph_number) {
      return NextResponse.json(
        { success: false, message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Check if email already exists in users table
    const existingUser = await prisma.users.findUnique({ where: { email } });

    // Check if email exists in admin table
    const existingAdmin = await prisma.admin.findUnique({ where: { email } });

    if (existingUser || existingAdmin) {
      return NextResponse.json(
        { success: false, message: 'User already exists' },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.users.create({
      data: {
        name,
        email,
        ph_number,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      {
        success: true,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          ph_number: user.ph_number,
        },
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Registration Error:', error);
    if (error.code === 'P2002') {
      return NextResponse.json(
        { success: false, message: 'Email already exists' },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: 'Registration failed' },
      { status: 500 }
    );
  }
}
