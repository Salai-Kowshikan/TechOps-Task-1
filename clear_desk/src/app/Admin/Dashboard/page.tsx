'use client'
import Link from 'next/link'

export default function AdminDashboard() {

  const isSuperAdmin = 'SUPER_ADMIN'

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-semibold">Admin Dashboard</h1>

      <div className="space-x-4">
        <Link href="/admin/complaints">
          <button className="btn">Manage Complaints</button>
        </Link>

        {isSuperAdmin && (
          <Link href="/admin/moderators">
            <button className="btn">Manage Moderators</button>
          </Link>
        )}
      </div>
    </div>
  )
}
