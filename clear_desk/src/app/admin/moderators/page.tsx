'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { useAdminStore } from '@/Store/useAdminStore'
import { useRouter } from 'next/navigation'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from '@/components/ui/select'

const categories = ['accommodation', 'payments', 'events', 'others']
const accessOptions = ['no_access', 'read', 'read/write']

type Moderator = {
  id: string
  name: string
  accessLevel: Record<string, string>
}

export default function ManageModeratorsPage() {
  const isSuperAdmin = useAdminStore((state) => state.isSuperAdmin)
  const router = useRouter()
  const [moderators, setModerators] = useState<Moderator[]>([])

  useEffect(() => {
    if (!isSuperAdmin) {
      router.push('/admin/dashboard')
    }
  }, [isSuperAdmin, router])

  useEffect(() => {
    axios.get('/api/moderators').then((res) => setModerators(res.data))
  }, [])

  const handleChange = async (modId: string, category: string, newLevel: string) => {
    try {
      await axios.patch('/api/moderators', {
        moderatorId: modId,
        category,
        newLevel,
      })

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
    <div className="min-h-screen p-8 bg-background text-foreground">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-foreground">Manage Moderators</h1>
        <div className="flex gap-4">
          <Link href="/admin/dashboard">
            <Button variant="outline">Return to Dashboard</Button>
          </Link>
          <Link href="/admin/moderators/signup">
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              Moderator Signup
            </Button>
          </Link>
        </div>
      </div>

      <Card className="overflow-auto bg-background text-foreground border border-border rounded-xl shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl text-foreground">Moderator Access Table</CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-muted text-muted-foreground">
                <th className="border border-border px-4 py-2 text-left">Name</th>
                {categories.map((cat) => (
                  <th key={cat} className="border border-border px-4 py-2 capitalize text-left">
                    {cat}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {moderators.map((mod) => (
                <tr key={mod.id} className="even:bg-muted/40">
                  <td className="border border-border px-4 py-2 font-medium">{mod.name}</td>
                  {categories.map((cat) => (
                    <td key={cat} className="border border-border px-4 py-2">
                      <Select
                        value={mod.accessLevel?.[cat] || 'no_access'}
                        onValueChange={(val) => handleChange(mod.id, cat, val)}
                      >
                        <SelectTrigger className="w-36">
                          <SelectValue placeholder="Select Access" />
                        </SelectTrigger>
                        <SelectContent>
                          {accessOptions.map((opt) => (
                            <SelectItem key={opt} value={opt}>
                              {opt}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  )
}
