'use client'

import { useParams, useRouter } from 'next/navigation'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'
import { useAdminStore } from '@/lib/zustand/useAdminStore'
import Link from 'next/link'
import { ArrowLeft, Home } from 'lucide-react'
import clsx from 'clsx'

type ResponseItem = {
  message: string
  sent_by: string
  created_at: string
}

type Complaint = {
  id: string
  title: string
  description: string
  image_url: string[]
  created_at: string
  category: string
  status: 'pending' | 'in progress' | 'resolved'
  user_id: string
  complaint_responses?: {
    id: string
    created_at: string
    responses: ResponseItem[]
  }
}

type User = {
  name: string
}

export default function ComplaintDetailPage() {
  const { id } = useParams()
  const router = useRouter()
  const queryClient = useQueryClient()
  const isSuperAdmin = useAdminStore((s) => s.isSuperAdmin)
  const moderatorCategoryAccess = useAdminStore((s) => s.moderatorCategoryAccess)
  const [responseText, setResponseText] = useState('')
  const [statusUpdating, setStatusUpdating] = useState(false)

  const { data: complaint, isLoading: complaintLoading } = useQuery<Complaint>({
    queryKey: ['complaint', id],
    queryFn: async () => {
      const res = await axios.get(`/api/complaint/${id}`)
      return res.data
    },
    staleTime: 0,
  })

  const { data: user, isLoading: userLoading } = useQuery<User>({
    queryKey: ['user', complaint?.user_id],
    queryFn: async () => {
      if (complaint?.user_id) {
        const res = await axios.get(`/api/user/${complaint.user_id}`)
        return res.data
      }
      return { name: 'Unknown' }
    },
    enabled: !!complaint?.user_id,
  })

  const canRespond = isSuperAdmin ||!!moderatorCategoryAccess.find(a => a.category === complaint?.category && a.access === 'read/write')
  console.log(canRespond)


  const sendResponseMutation = useMutation({
    mutationFn: async () => {
      await axios.post(`/api/complaint/${id}`, {
        message: responseText,
        sentBy: 'admin',
      })
    },
    onSuccess: () => {
      setResponseText('')
      queryClient.invalidateQueries({ queryKey: ['complaint', id] })
    },
  })

  const updateStatus = async (newStatus: Complaint['status']) => {
    try {
      setStatusUpdating(true)
      await axios.put(`/api/complaint/${id}/status`, { status: newStatus })
      queryClient.invalidateQueries({ queryKey: ['complaint', id] })
    } finally {
      setStatusUpdating(false)
    }
  }

  if (complaintLoading || userLoading || !complaint) return <p className="text-center mt-10">Loading...</p>

  const imageUrls = complaint.image_url || []
  const responses = complaint.complaint_responses?.responses || []

  const getNextStatus = (status: Complaint['status']) => {
    if (status === 'pending') return 'in progress'
    if (status === 'in progress') return 'resolved'
    return null
  }

  const nextStatus = getNextStatus(complaint.status)

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6">
      <div className="max-w-3xl mx-auto bg-white rounded shadow p-6">
        {/* Back Navigation */}
        <div className="flex justify-between items-center mb-4">
          <button onClick={() => router.back()} className="flex items-center text-blue-600 hover:underline">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Complaints
          </button>
          <Link href="/admin/dashboard" className="flex items-center text-blue-600 hover:underline">
            <Home className="w-4 h-4 mr-1" />
            Dashboard
          </Link>
        </div>

        {/* Complaint Details */}
        <h2 className="text-2xl font-bold mb-2">{complaint.title}</h2>
        <p className="text-sm text-gray-500 mb-1">{new Date(complaint.created_at).toLocaleDateString()}</p>
        <p className="text-sm text-gray-500 mb-1">By: {user?.name || 'Unknown User'}</p>
        <p className="text-gray-700 mb-3">{complaint.description}</p>
        <p className="text-sm text-gray-600 mb-2">Category: {complaint.category}</p>
        <p className="text-sm text-gray-600 mb-4">
          Status: <span className="font-semibold capitalize">{complaint.status}</span>
          {nextStatus && canRespond && (
            <button
              className="ml-3 px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-white text-xs rounded"
              onClick={() => updateStatus(nextStatus)}
              disabled={statusUpdating}
            >
              Mark as {nextStatus}
            </button>
          )}
        </p>

        {/* Images */}
        {imageUrls.length > 0 && (
          <div className="flex gap-4 overflow-x-auto mb-6">
            {imageUrls.map((url, i) => (
              <img key={i} src={url} alt="Complaint Image" className="w-32 h-32 object-cover rounded" />
            ))}
          </div>
        )}

        {/* Conversation */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Conversation</h3>
          {responses.length === 0 ? (
            <p className="text-gray-500">No messages yet.</p>
          ) : (
            <ul className="space-y-2">
              {responses.map((res, idx) => (
                <li
                  key={idx}
                  className={clsx(
                    'p-3 rounded max-w-md',
                    res.sent_by === 'admin' ? 'bg-blue-100 text-right ml-auto' : 'bg-gray-100 text-left'
                  )}
                >
                  <p className="text-xs font-semibold text-gray-600 mb-1">
                    {res.sent_by === 'admin' ? 'Admin' : 'User'}
                  </p>
                  <p className="text-sm">{res.message}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {new Date(res.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Respond Box */}
        {canRespond ? (
          <div>
            <textarea
              value={responseText}
              onChange={(e) => setResponseText(e.target.value)}
              placeholder="Type your response..."
              className="w-full border p-2 rounded mb-2"
              rows={3}
            />
            <button
              onClick={() => sendResponseMutation.mutate()}
              disabled={sendResponseMutation.isPending || !responseText}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              {sendResponseMutation.isPending ? 'Sending...' : 'Send Response'}
            </button>
          </div>
        ) : (
          <p className="text-sm text-gray-500 italic">You have read-only access to this complaint.</p>
        )}
      </div>
    </div>
  )
}
