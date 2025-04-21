import { ThemeToggle } from "@/components/theme/theme-toggle"
import { SignInButton } from "@/components/auth/SignInButton"

export default function Navbar() {
  return (

    <header className="flex justify-between items-center px-4 py-2 shadow bg-background">
      <h1 className="text-xl font-bold">Complaint Portal</h1>
      <div className="flex gap-2 items-center">
        <ThemeToggle />
        <SignInButton />
      </div>
    </header>

  )
}
