import type { NextRequest } from 'next/server'

export async function POST(req: NextRequest): Promise<Response> {
  const { token, password }: { token: string; password: string } = await req.json()

  if (!token) {
    return new Response(JSON.stringify({ error: 'No token provided' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  console.log('Received token:', token)
  console.log('Reset password to:', password)

  return new Response(JSON.stringify({ message: 'Password reset successful (dummy)' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  })
}
