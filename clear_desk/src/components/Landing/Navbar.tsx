import { ThemeToggle } from "@/components/theme/theme-toggle"
import { SignInButton } from "@/components/auth/SignInButton"
import Link from "next/link"

export default function Navbar() {
  return (

    <header className="flex justify-between items-center px-4 py-2 shadow bg-background">
      <Link href="/"><h1 className="text-xl font-bold">Clear Desk</h1></Link>
      <div className="flex gap-2 items-center">
        <ThemeToggle />
        <SignInButton />
      </div>
    </header>

  )
}
