'use client'

import { useState, useMemo, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Link from 'next/link'
import { useAdminStore } from '@/Store/useAdminStore'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { toast } from 'sonner'
import { motion } from 'framer-motion'
import clsx from 'clsx';

type Complaint = {
  id: string
  title: string
  description: string
  category: string
  status: 'pending' | 'in progress' | 'resolved'
  created_at: string
}

const statusOptions = ['pending', 'in progress', 'resolved']
const categoryOptions = ['accommodation', 'events', 'payments', 'others']

export default function AdminDashboard() {
  const isSuperAdmin = useAdminStore((state) => state.isSuperAdmin)
  const moderatorCategoryAccess = useAdminStore((state) => state.moderatorCategoryAccess)

  const [status, setStatus] = useState<string[]>([])
  const [category, setCategory] = useState<string[]>([])

  const { data: complaints = [], isLoading, isError } = useQuery<Complaint[]>({
    queryKey: ['complaints'],
    queryFn: async () => {
      toast.loading('Fetching complaints...')
      try {
        const res = await axios.get(`/api/complaint/admin`)
        toast.success('Complaints fetched successfully')
        return res.data.data
      } catch (err) {
        toast.error('Failed to fetch complaints')
        throw err
      } finally {
        toast.dismiss()
      }
    }
  })

  useEffect(() => {
    if (isError) {
      toast.error('Something went wrong while loading complaints.')
    }
  }, [isError])

  const filteredComplaints = useMemo(() => {
    if (!Array.isArray(complaints)) return []  
    let result = complaints

    if (!isSuperAdmin) {
      const allowedCategories = moderatorCategoryAccess.map((m) => m.category.toLowerCase())
      result = result.filter((c) => allowedCategories.includes(c.category.toLowerCase()))
    }

    if (status.length && !status.includes('all')) {
      result = result.filter((c) => status.includes(c.status.toLowerCase()))
    }

    if (category.length && !category.includes('all')) {
      result = result.filter((c) => category.includes(c.category.toLowerCase()))
    }

    return result
  }, [complaints, isSuperAdmin, moderatorCategoryAccess, status, category])

  return (
    <div className="min-h-screen flex flex-col items-center bg-muted px-4 py-6">
      <Card className="w-full max-w-6xl">
        <CardHeader>
          <CardTitle className="text-3xl text-center">Admin Dashboard</CardTitle>
        </CardHeader>

        <CardContent>
          {/* Manage Moderators Button */}
          {isSuperAdmin && (
            <div className="flex justify-end mb-6">
              <Link href="/admin/moderators">
                <Button className="hover:bg-blue-500 transition-colors">Manage Moderators</Button>
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
                    variant={status.includes(s) ? 'default' : 'outline'}
                    onClick={() => {
                      if (status.includes(s)) {
                        setStatus(status.filter((item) => item !== s))
                      } else {
                        setStatus([...status, s])
                      }
                    }}
                    className="transition-all hover:bg-gray-200 dark:hover:bg-gray-700"
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
                    variant={category.includes(c) ? 'default' : 'outline'}
                    onClick={() => {
                      if (category.includes(c)) {
                        setCategory(category.filter((item) => item !== c))
                      } else {
                        setCategory([...category, c])
                      }
                    }}
                    className="transition-all hover:bg-gray-200 dark:hover:bg-gray-700"
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredComplaints.map((c) => {
                const access = moderatorCategoryAccess.find(
                  (a) => a.category.toLowerCase() === c.category.toLowerCase()
                )?.access
                const canRespond = isSuperAdmin || access === 'read/write'

                return (
                  <motion.div
                    key={c.id}
                    className="shadow-sm hover:shadow-lg transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Card className="transition-shadow">
                      <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-lg">{c.title}</CardTitle>
                        <span className="text-sm text-muted-foreground">
                          {new Date(c.created_at).toLocaleDateString()}
                        </span>
                      </CardHeader>
                      <CardContent>
                        <p className="text-m text-muted-foreground mb-1">Category: {c.category}</p>
                        <p className="text-m text-muted-foreground mb-3">Status: 
                            <span
                              className={clsx(
                                'ml-2 px-2 py-0.5 rounded-full text-xs font-semibold capitalize',
                                c.status === 'pending' && 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100',
                                c.status === 'in progress' && 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100',
                                c.status === 'resolved' && 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'
                              )}
                            >
                              {c.status}
                            </span>
                        </p>
                        <Link href={`/admin/complaints/${c.id}`}>
                          <Button variant={canRespond ? 'default' : 'outline'} disabled={!canRespond}>
                            {canRespond ? 'View & Respond' : 'View'}
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
