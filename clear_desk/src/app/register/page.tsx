'use client'

import RegistrationForm from './RegistrationForm'

export default function RegisterPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-2xl p-6 space-y-6 rounded-xl shadow-lg bg-card border">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold">Complaint System - Registration</h1>
          <p className="text-muted-foreground text-sm">
            Create an account to manage complaints
          </p>
        </div>
        <RegistrationForm />
      </div>
    </main>
  )
}
