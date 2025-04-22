'use client'

import { useState, useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Link from 'next/link'
import { useAdminStore } from '@/Store/useAdminStore'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { useEffect } from 'react'
// Complaint type
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
  const setIsSuperAdmin = useAdminStore(state => state.setIsSuperAdmin)
  const setModeratorCategoryAccess = useAdminStore(state => state.setModeratorCategoryAccess)
  const [status, setStatus] = useState('all')
  const [category, setCategory] = useState('all')

  // useEffect(() => {
  //   // To Simulate mod1 access
  //   setIsSuperAdmin(false)
  //   setModeratorCategoryAccess([
  //     { category: 'events', access: 'read' },
  //     { category: 'others', access: 'read/write' }
  //   ])
  // }, [])

  const { data: complaints = [], isLoading } = useQuery<Complaint[]>({
    queryKey: ['complaints'],
    queryFn: async () => {
      const res = await axios.get(`/api/complaint/admin`)
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
    <div className="min-h-screen flex flex-col items-center bg-muted px-4 py-6">
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle className="text-3xl text-center">Admin Dashboard</CardTitle>
        </CardHeader>

        <CardContent>
          {/* Manage Moderators Button */}
          {isSuperAdmin && (
            <div className="flex justify-end mb-6">
              <Link href="/admin/moderators">
                <Button>Manage Moderators</Button>
              </Link>
            </div>
          )}

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-6 justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Filter by Status</h3>
              <div className="flex flex-wrap gap-2">
                {statusOptions.map((s) => (
                  <Button
                    key={s}
                    variant={status === s ? 'default' : 'outline'}
                    onClick={() => setStatus(s)}
                  >
                    {s.charAt(0).toUpperCase() + s.slice(1)}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Filter by Category</h3>
              <div className="flex flex-wrap gap-2">
                {categoryOptions.map((c) => (
                  <Button
                    key={c}
                    variant={category === c ? 'default' : 'outline'}
                    onClick={() => setCategory(c)}
                  >
                    {c.charAt(0).toUpperCase() + c.slice(1)}
                  </Button>
                ))}

              </div>
            </div>
          </div>

          <Separator className="my-4" />

          {/* Complaints List */}
          {isLoading ? (
            <p className="text-center text-muted-foreground">Loading complaints...</p>
          ) : filteredComplaints.length === 0 ? (
            <p className="text-center text-muted-foreground">No complaints found for the selected filters.</p>
          ) : (
            <ul className="space-y-4">
              {filteredComplaints.map((c) => {
                const access = moderatorCategoryAccess.find(
                  (a) => a.category.toLowerCase() === c.category.toLowerCase()
                )?.access
                const canRespond = isSuperAdmin || access === 'read/write'

                return (
                  <Card key={c.id} className="shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-lg">{c.title}</CardTitle>
                      <span className="text-sm text-muted-foreground">
                        {new Date(c.created_at).toLocaleDateString()}
                      </span>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-1">Category: {c.category}</p>
                      <p className="text-sm text-muted-foreground mb-3">Status: {c.status}</p>
                      <Link href={`/admin/complaints/${c.id}`}>
                        <Button variant={canRespond ? 'default' : 'default'} disabled={!canRespond}>
                          {canRespond ? 'View & Respond' : 'View'}
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                )
              })}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
