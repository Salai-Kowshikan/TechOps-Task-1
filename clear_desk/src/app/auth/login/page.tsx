import Link from "next/link"
import { AuthForm } from "@/components/auth/auth-form"
import { OAuthButtons } from "@/components/auth/oauth-buttons"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function SignInPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md p-6 space-y-6 rounded-xl shadow-lg bg-card border">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold">Welcome Back 👋</h1>
          <p className="text-muted-foreground text-sm">Sign in to access your account</p>
        </div>

        {/* OAuth */}
        <OAuthButtons />

        <div className="flex items-center justify-center text-muted-foreground text-sm">
          — or continue with email —
        </div>

        {/* Form */}
        <AuthForm type="sign-in" />

        {/* Remember Me + Forgot Password */}
        <div className="flex items-center justify-between text-sm mt-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Link
            href="/forgot-password"
            className="text-primary hover:underline font-medium"
          >
            Forgot password?
          </Link>
        </div>

        {/* Sign up CTA */}
        <p className="text-center text-sm text-muted-foreground">
          Don’t have an account?{" "}
          <Link href="/auth/signup" className="text-primary font-medium hover:underline">
            Create one
          </Link>
        </p>
      </div>
    </main>
  )
}
