'use client'

import { signIn } from 'next-auth/react'

export default function GoogleSignInButton() {
  const handleSignIn = () => {
    signIn('google')
  }

  return (
    <button
      onClick={handleSignIn}
      className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-xl font-medium transition"
    >
      Sign in with Google
    </button>
  )
}
