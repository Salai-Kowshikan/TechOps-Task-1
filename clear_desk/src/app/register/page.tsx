'use client'

import RegistrationForm from './RegistrationForm'

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Complaint System - Registration
        </h2>
        <RegistrationForm />
      </div>
    </div>
  )
}
