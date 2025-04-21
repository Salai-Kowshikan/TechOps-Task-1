"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

type AuthFormProps = {
  type: "sign-in" | "sign-up"
  onSubmitAction?: (values: z.infer<typeof formSchema>) => Promise<void>
}

export function AuthForm({ type, onSubmitAction }: AuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  })

  const [loading, setLoading] = useState(false)

  const onSubmit = async (values: any) => {
    setLoading(true)
    await onSubmitAction?.(values)
    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" {...register("email")} />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      <div>
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" {...register("password")} />
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
      </div>

      <Button type="submit" className="w-full" disabled={loading}>
        {type === "sign-in" ? "Sign In" : "Sign Up"}
      </Button>
    </form>
  )
}
