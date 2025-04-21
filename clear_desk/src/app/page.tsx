'use client'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect } from "react"
import { useAdminStore } from "@/Store/useAdminStore"

export default function Home() {
  const setIsSuperAdmin = useAdminStore((state) => state.setIsSuperAdmin)

  useEffect(() => {
    setIsSuperAdmin(true) // Simulating super admin login 
  }, [setIsSuperAdmin])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-4 bg-gray-50">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome</h1>

      <Link href="/user/dashboard" passHref>
        <Button className="w-64 text-lg">Go to User Dashboard</Button>
      </Link>

      <Link href="/admin/dashboard" passHref>
        <Button className="w-64 text-lg">Go to Admin Dashboard</Button>
      </Link>

      <Link href="/admin/complaints" passHref>
        <Button className="w-64 text-lg">Go to Complaints Page</Button>
      </Link>
    </div>
  )
}

