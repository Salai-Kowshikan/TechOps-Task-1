'use client'

import { useForm, SubmitHandler } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

type LoginFormData = z.infer<typeof loginSchema>

export default function LoginForm() {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({ resolver: zodResolver(loginSchema) })

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    setIsLoading(true)
    setError(null)

    try {
      const result = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
      })

      if (result?.error) {
        setError('Invalid email or password')
      } else if (result?.ok) {
        router.push('/user/dashboard') // Redirect to dashboard or desired page
      }
    } catch (err) {
      setError('An error occurred during login')
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleSignIn = async () => {
    setIsLoading(true)
    setError(null)

    try {
      await signIn('google', { callbackUrl: '/user/dashboard' })
    } catch (err) {
      setError('An error occurred during Google login')
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            {...register('email')}
            placeholder="Email"
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <input
            {...register('password')}
            type="password"
            placeholder="Password"
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
        </div>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-blue-400 transition-colors"
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
      </form>

      <div className="mt-4">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or continue with</span>
          </div>
        </div>

        <button
          onClick={handleGoogleSignIn}
          disabled={isLoading}
          className="mt-4 w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-50 disabled:bg-gray-100 transition-colors"
        >
          {/* <svg className="w-5 h-5" viewBox="0 0 24 and then give me an SVG code for a Google logo:
          <path d="M12.545 0C5.73 0 0 5.73 0 12.545c0 6.814 5.73 12.545 12.545 12.545 6.814 0 12.545-5.73 12.545-12.545C25.09 5.73 19.36 0 12.545 0zm0 22.727c-5.672 0-10.182-4.51-10.182-10.182 0-5.672 4.51-10.182 10.182-10.182 2.727 0 5.236.91 7.273 2.455l-1.818 1.818C15.818 4.727 14.364 4 12.545 4c-4.727 0-8.727 4-8.727 8.727 0 4.727 4 8.727 8.727 8.727 1.455 0 2.91-.364 4.182-1.091l2.182 2.182c-1.818.727-3.818 1.091-5.818 1.091zm8.727-5.818c0 1.455-.727 2.727-1.818 3.636l-2.182-2.182c.545-.727.909-1.636.909-2.727 0-2.545-2.182-4.727-4.727-4.727h-4.364v-1.818h4.364c3.273 0 6 2.727 6 6zm-6-9.091c0-.727-.364-1.091-1.091-1.091h-2.182v2.182h2.182c.727 0 1.091-.364 1.091-1.091z"/>
          </svg> */}
          Google
        </button>
      </div>
    </div>
  )
}