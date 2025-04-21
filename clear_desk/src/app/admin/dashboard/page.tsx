'use client'

import { useState, useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Link from 'next/link'
import clsx from 'clsx'
import { useAdminStore } from "@/Store/useAdminStore"

// Define the Complaint type
type Complaint = {
  id: string
  title: string
  description: string
  category: string
  status: 'pending' | 'in progress' | 'resolved'
  created_at: string
}

const statusOptions = ['all', 'pending', 'in progress', 'resolved']
const categoryOptions = ['all', 'accommodation', 'events', 'payments', 'others']

export default function AdminDashboard() {
  const isSuperAdmin = useAdminStore((state) => state.isSuperAdmin)
  const moderatorCategoryAccess = useAdminStore((state) => state.moderatorCategoryAccess)
  const [status, setStatus] = useState('all')
  const [category, setCategory] = useState('all')

  const { data: complaints = [], isLoading } = useQuery<Complaint[]>({
    queryKey: ['complaints'],
    queryFn: async () => {
      const res = await axios.get(`/api/complaint`)
      return res.data
    }
  })

  const filteredComplaints = useMemo(() => {
    let result = complaints

    if (!isSuperAdmin) {
      const allowedCategories = moderatorCategoryAccess.map((m) => m.category.toLowerCase())
      result = result.filter((c) => allowedCategories.includes(c.category.toLowerCase()))
    }

    if (status !== 'all') {
      result = result.filter((c) => c.status.toLowerCase() === status)
    }

    if (category !== 'all') {
      result = result.filter((c) => c.category.toLowerCase() === category)
    }

    return result
  }, [complaints, isSuperAdmin, moderatorCategoryAccess, status, category])

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 px-4 py-6">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Admin Dashboard</h1>

        {/* Manage Moderators Link */}
        {isSuperAdmin && (
          <div className="mb-6 text-right">
            <Link
              href="/admin/moderators"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Manage Moderators
            </Link>
          </div>
        )}

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Filter by Status</h3>
            <div className="flex gap-2">
              {statusOptions.map((s) => (
                <button
                  key={s}
                  onClick={() => setStatus(s)}
                  className={clsx(
                    'px-4 py-2 rounded border font-medium transition-colors',
                    status === s
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-blue-600 border-blue-600 hover:bg-blue-50'
                  )}
                >
                  {s.charAt(0).toUpperCase() + s.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Filter by Category</h3>
            <div className="flex gap-2">
              {categoryOptions.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={clsx(
                    'px-4 py-2 rounded border font-medium transition-colors',
                    category === c
                      ? 'bg-green-600 text-white border-green-600'
                      : 'bg-white text-green-600 border-green-600 hover:bg-green-50'
                  )}
                >
                  {c.charAt(0).toUpperCase() + c.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Complaints List */}
        {isLoading ? (
          <p className="text-center text-gray-500">Loading complaints...</p>
        ) : filteredComplaints.length === 0 ? (
          <p className="text-center text-gray-500">No complaints found for the selected filters.</p>
        ) : (
          <ul className="space-y-4">
            {filteredComplaints.map((c) => {
              const access = moderatorCategoryAccess.find(
                (a) => a.category.toLowerCase() === c.category.toLowerCase()
              )?.access
              const canRespond = isSuperAdmin || access === 'read/write'

              return (
                <li
                  key={c.id}
                  className="border-2 border-gray-300 rounded-xl p-4 bg-gray-50 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-semibold">{c.title}</span>
                    <span className="text-sm text-gray-500">
                      {new Date(c.created_at).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">Category: {c.category}</p>
                  <p className="text-sm text-gray-600 mb-3">Status: {c.status}</p>

                  <Link
                    href={`/admin/complaints/${c.id}`}
                    className={clsx(
                      'inline-block px-4 py-2 rounded font-medium',
                      canRespond
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-300 text-gray-700 pointer-events-none'
                    )}
                  >
                    {canRespond ? 'View & Respond' : 'View'}
                  </Link>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </div>
  )
}
