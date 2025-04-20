'use client'

import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Link from "next/link";

const fetchComplaints = async (status: string) => {
    const res = await axios.get(`/api/complaint?status=${status}`)
    return res.data
}

export default function ComplaintsPage() {
    const [status, setStatus] = useState('all')

    const { data: complaints, isLoading } = useQuery({
        queryKey: ['complaints', status],
        queryFn: () => fetchComplaints(status),
    })

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Complaints</h2>

            <div className="space-x-2 mb-4">
                <button onClick={() => setStatus('all')} className="btn">All</button>
                <button onClick={() => setStatus('pending')} className="btn">Pending</button>
                <button onClick={() => setStatus('resolved')} className="btn">Resolved</button>

            </div>

            {isLoading ? (
                <p>Loading...</p>
            ) : complaints && complaints.length > 0 ? (
                <ul className="space-y-2">
                    {complaints.map((c: any) => (
                        <li key={c.id} className="border p-2 rounded">
                            <p><strong>{c.title}</strong></p>
                            <p>Status: {c.status}</p>
                            <Link href={`/admin/complaints/${c.id}`} className="text-blue-500">View & Respond</Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500">No complaints in this category.</p>
            )}

        </div>
    )
}
