'use client'

import { registerUser } from '@/lib/api/AuthApis'
import { useForm, SubmitHandler } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

const schema = z
  .object({
    fullName: z.string().min(3, 'Full name is required'),
    email: z.string().email('Invalid email'),
    phone: z.string().min(10, 'Phone must be at least 10 digits'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })

type FormData = z.infer<typeof schema>

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const formData = new FormData()
    Object.entries(data).forEach(([key, value]) => {
      if (key !== 'confirmPassword') {
        formData.append(key, value)
      }
    })

    try {
      await registerUser(formData)
      toast.success('Registration successful!')
    } catch (err: any) {
      toast.error(err.message || 'Something went wrong')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Input
            {...register('fullName')}
            placeholder="Full Name"
            className="bg-background"
          />
          {errors.fullName && (
            <p className="text-red-400 text-sm mt-1">{errors.fullName.message}</p>
          )}
        </div>
        <div>
          <Input
            type="email"
            {...register('email')}
            placeholder="Email"
            className="bg-background"
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div>
        <Input
          type="tel"
          {...register('phone')}
          placeholder="Phone"
          className="bg-background"
        />
        {errors.phone && (
          <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Input
            type="password"
            {...register('password')}
            placeholder="Password"
            className="bg-background"
          />
          {errors.password && (
            <p className="text-red-400 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>
        <div>
          <Input
            type="password"
            {...register('confirmPassword')}
            placeholder="Confirm Password"
            className="bg-background"
          />
          {errors.confirmPassword && (
            <p className="text-red-400 text-sm mt-1">{errors.confirmPassword.message}</p>
          )}
        </div>
      </div>

      <Button type="submit" className="w-full">
        Register
      </Button>
    </form>
  )
}
