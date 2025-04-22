'use client'

import { useForm, SubmitHandler } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

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
        router.push('/user/dashboard')
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
    <div className="min-h-screen bg-zinc-900 text-white flex items-center justify-center px-4">
      <Card className="w-full max-w-md bg-zinc-800 text-white">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Input
                {...register('email')}
                placeholder="Email"
                className="bg-zinc-700 border-zinc-600 text-white"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <Input
                {...register('password')}
                type="password"
                placeholder="Password"
                className="bg-zinc-700 border-zinc-600 text-white"
              />
              {errors.password && (
                <p className="text-red-400 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            {error && <p className="text-red-400 text-sm text-center">{error}</p>}

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full"
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </Button>
          </form>

          <div className="mt-6">
            <Separator className="bg-zinc-700" />
            <div className="text-sm text-center text-zinc-400 mt-2">
              Or continue with
            </div>

            <Button
              variant="outline"
              onClick={handleGoogleSignIn}
              disabled={isLoading}
              className="mt-4 w-full border-zinc-600 text-white hover:bg-zinc-700"
            >
              Google
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
