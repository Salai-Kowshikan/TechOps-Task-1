'use client'
import Link from 'next/link'
import { useAdminStore } from "@/lib/zustand/useAdminStore"


export default function AdminDashboard() {

  const isSuperAdmin = useAdminStore((state) => state.isSuperAdmin)
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md text-center space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>

        <div className="flex flex-col items-center space-y-4">
          <Link href="/admin/complaints">
            <button className="w-60 px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition">
              Manage Complaints
            </button>
          </Link>

          {isSuperAdmin && (
            <>
              <Link href="/admin/moderators">
                <button className="w-60 px-4 py-2 border border-green-600 text-green-600 rounded hover:bg-green-50 transition">
                  Manage Moderators
                </button>
              </Link>

              <button className="w-60 px-4 py-2 border border-purple-600 text-purple-600 rounded hover:bg-purple-50 transition">
                Add Moderator
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
