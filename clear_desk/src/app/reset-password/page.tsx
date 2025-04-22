'use client'

import { useForm, SubmitHandler } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSearchParams } from 'next/navigation'
import axios from 'axios'
import { useState } from 'react'

type FormData = {
  password: string
  confirmPassword: string
}

const resetPasswordSchema = z
  .object({
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

export default function ResetPasswordForm() {
  const searchParams = useSearchParams()
  const token = searchParams.get('token')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(resetPasswordSchema),
  })

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (!token) {
      setError('Reset token is missing. Please check your reset link.')
      return
    }
    
    try {
      setLoading(true)
      setError('')
      setMessage('')
      
      const response = await axios.post('/api/auth/reset-password', {
        password: data.password,
        token: token,
      })
      
      setMessage(response.data.message || 'Password reset successful')
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to reset password. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full max-w-md p-6 bg-white rounded-xl shadow-md">
        <h1 className="text-xl font-semibold">Reset Password</h1>
        
        {message && <div className="p-3 bg-green-100 text-green-700 rounded-lg">{message}</div>}
        {error && <div className="p-3 bg-red-100 text-red-700 rounded-lg">{error}</div>}

        <div>
          <label className="block text-sm font-medium mb-1">New Password</label>
          <input
            type="password"
            {...register('password')}
            className="w-full border rounded-xl px-4 py-2"
            placeholder="New Password"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Confirm Password</label>
          <input
            type="password"
            {...register('confirmPassword')}
            className="w-full border rounded-xl px-4 py-2"
            placeholder="Confirm Password"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-xl font-medium transition ${
            loading ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {loading ? 'Resetting...' : 'Reset Password'}
        </button>
      </form>
    </div>
  )
}