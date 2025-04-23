import type { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma-client'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const JWT_SECRET = process.env.JWT_SECRET || 'your-jwt-secret'

export async function POST(req: NextRequest): Promise<Response> {
  try {
    // Get token and password from request body
    const { password, token }: { password: string; token: string } = await req.json()

    console.log("Received token:", token)

    if (!token) {
      return new Response(JSON.stringify({ error: 'No token provided' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    // Verify JWT token
    let payload
    try {
      payload = jwt.verify(token, JWT_SECRET) as { email: string }
    } catch (err) {
      return new Response(JSON.stringify({ error: 'Invalid or expired token' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    // Look up user by email from token
    const user = await prisma.users.findUnique({ where: { email: payload.email } })

    if (!user) {
      return new Response(JSON.stringify({ error: 'User not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    // Hash new password and update the user
    const hashedPassword = await bcrypt.hash(password, 10)

    await prisma.users.update({
      where: { email: payload.email },
      data: {
        password: hashedPassword,
        token: null, // Clear the token if you're storing it in DB
      },
    })

    return new Response(JSON.stringify({ message: 'Password reset successful' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (err) {
    console.error('Error resetting password:', err)
    console.log(err); 
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}