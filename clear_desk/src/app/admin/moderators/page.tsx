'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { useAdminStore } from '@/Store/useAdminStore'
import { useRouter } from 'next/navigation'

const categories = ['accommodation', 'payments', 'events', 'others']
const accessOptions = ['no_access', 'read', 'read/write']

// Define the Moderator type
type Moderator = {
  id: string
  name: string
  accessLevel: Record<string, string> // e.g., { accommodation: 'read', payments: 'no_access' }
}

export default function ManageModeratorsPage() {
  const isSuperAdmin = useAdminStore((state) => state.isSuperAdmin)
  const router = useRouter()

  const [moderators, setModerators] = useState<Moderator[]>([])

  // const [moderators, setModerators] = useState<Moderator[]>([ //dummy data
  //   {
  //     id: '1',
  //     name: 'John Doe',
  //     accessLevel: {
  //       accommodation: 'read',
  //       payments: 'read/write',
  //       events: 'no_access',
  //       others: 'read',
  //     },
  //   },
  //   {
  //     id: '2',
  //     name: 'Jane Smith',
  //     accessLevel: {
  //       accommodation: 'no_access',
  //       payments: 'read',
  //       events: 'read/write',
  //       others: 'no_access',
  //     },
  //   },
  // ])

  // Redirect if the user is not a super admin
  useEffect(() => {
    if (!isSuperAdmin) {
      router.push('/admin/dashboard') // Redirect to the dashboard if not authorized
    }
  }, [isSuperAdmin, router])

  // Fetch moderators
  useEffect(() => {
    axios.get('/api/moderators').then((res) => setModerators(res.data))
  }, [])

  const handleChange = async (modId: string, category: string, newLevel: string) => {
    try {
      await axios.patch('/api/moderators', {
        moderatorId: modId,
        category: category,
        newLevel: newLevel,
      })

      // Update the UI state with the new access level for the specific category
      setModerators((prev) =>
        prev.map((mod) =>
          mod.id === modId
            ? {
                ...mod,
                accessLevel: {
                  ...mod.accessLevel,
                  [category]: newLevel,
                },
              }
            : mod
        )
      )
    } catch (error) {
      console.error('Error updating access level:', error)
    }
  }

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Manage Moderators</h1>
        <div className="flex gap-4">
          <Link href="/admin/dashboard">
            <button className="px-4 py-2 bg-blue-600 text-white rounded">Return to Dashboard</button>
          </Link>
          <Link href="/admin/moderators/signup">
            <button className="px-4 py-2 bg-green-600 text-white rounded">Moderator Signup</button>
          </Link>
        </div>
      </div>

      <div className="overflow-auto bg-white p-4 rounded shadow">
        <table className="table-auto w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 border">Name</th>
              {categories.map((cat) => (
                <th key={cat} className="px-4 py-2 border capitalize">
                  {cat}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {moderators.map((mod) => (
              <tr key={mod.id} className="text-center">
                <td className="border px-4 py-2">{mod.name}</td>
                {categories.map((cat) => (
                  <td key={cat} className="border px-4 py-2">
                    <select
                      className="border rounded px-2 py-1"
                      value={mod.accessLevel?.[cat] || 'no_access'}
                      onChange={(e) => handleChange(mod.id, cat, e.target.value)}
                    >
                      {accessOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
