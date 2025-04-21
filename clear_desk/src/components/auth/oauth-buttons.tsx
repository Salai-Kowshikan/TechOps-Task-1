"use client"

import { Button } from "@/components/ui/button"
import { Github, LogIn, Mail, Shield } from "lucide-react"

export function OAuthButtons() {
  return (
    <div className="space-y-2">
      <Button variant="outline" className="w-full" onClick={() => alert("OAuth Google")}>
        <Mail className="mr-2 h-4 w-4" />
        Sign in with Google
      </Button>

      <Button variant="outline" className="w-full" onClick={() => alert("OAuth GitHub")}>
        <Github className="mr-2 h-4 w-4" />
        Sign in with GitHub
      </Button>
    </div>
  )
}
