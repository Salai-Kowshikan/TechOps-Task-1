"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { LogIn } from "lucide-react"

export function SignInButton() {
  const router = useRouter()

  return (
    <Button variant="outline" onClick={() => router.push("/auth/login")}>
      <LogIn className="mr-2 h-4 w-4" />
      Sign In
    </Button>
  )
}
