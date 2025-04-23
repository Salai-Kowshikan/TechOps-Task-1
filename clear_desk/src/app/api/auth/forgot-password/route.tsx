import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import nodemailer from 'nodemailer'
import jwt from 'jsonwebtoken'
import { prisma } from '@/lib/prisma-client'

const JWT_SECRET = process.env.JWT_SECRET || 'your-jwt-secret'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const email: string = body.email

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    const user = await prisma.users.findUnique({ where: { email } })

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    const signedToken = jwt.sign({ email }, JWT_SECRET, { expiresIn: '15m' })

    await prisma.users.update({
      where: { email },
      data: { token: signedToken },
    })

    const resetLink = `${process.env.BASE_URL}/reset-password?token=${signedToken}`

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER as string,
        pass: process.env.EMAIL_PASS as string,
      },
    })
    console.log(process.env.EMAIL_USER)
    console.log(process.env.EMAIL_PASS)


    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Reset Your Password',
      html: `<p>Click below to reset your password:</p>
             <a href="${resetLink}">${resetLink}</a>`,
    })

    return NextResponse.json({ message: 'Password reset link sent to your email' })
  } catch (err) {
    console.error('Error sending reset email:', err)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
