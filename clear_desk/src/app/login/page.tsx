'use client'

import LoginForm from './LoginForm'
import GoogleSignInButton from './GSignin'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Login to Complaint System
        </h2>
        <LoginForm />
        <GoogleSignInButton />
      </div>
    </div>
  )
}
