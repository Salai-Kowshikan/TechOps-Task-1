import Link from "next/link"
import { AuthForm } from "@/components/auth/auth-form"
import { OAuthButtons } from "@/components/auth/oauth-buttons"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function SignUpPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md p-6 space-y-6 rounded-xl shadow-lg bg-card border">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold">Create Your Account 🧭</h1>
          <p className="text-muted-foreground text-sm">Join us on this grand adventure!</p>
        </div>

        {/* OAuth */}
        <OAuthButtons />

        <div className="flex items-center justify-center text-muted-foreground text-sm">
          — or sign up with email —
        </div>

        {/* Form */}
        <AuthForm type="sign-up" />

        {/* Terms and Conditions
        <div className="flex items-start text-sm gap-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms" className="text-muted-foreground">
            I agree to the{" "}
            <Link href="/terms" className="text-primary hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>
          </Label>
        </div> */}

        {/* Sign in redirect */}
        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-primary font-medium hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </main>
  )
}
