'use client'

import { useForm, SubmitHandler } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAuthStore } from '../store/authStore'

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

type LoginFormData = z.infer<typeof loginSchema>

export default function LoginForm() {
  const login = useAuthStore((state) => state.login)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({ resolver: zodResolver(loginSchema) })

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    await login(data.email, data.password)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md mx-auto mt-10">
      <input
        {...register('email')}
        placeholder="Email"
        className="w-full border rounded px-4 py-2"
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

      <input
        {...register('password')}
        type="password"
        placeholder="Password"
        className="w-full border rounded px-4 py-2"
      />
      {errors.password && <p className="text-red-500">{errors.password.message}</p>}

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">
        Login
      </button>
    </form>
  )
}
