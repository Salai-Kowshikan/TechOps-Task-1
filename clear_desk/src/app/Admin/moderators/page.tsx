'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'

const categories = ['accommodation', 'payments', 'events', 'others']
const accessOptions = ['no_access', 'read', 'read/write']

export default function ManageModeratorsPage() {
  const [moderators, setModerators] = useState([])

  useEffect(() => {
    axios.get('/api/moderators').then(res => setModerators(res.data))
  }, [])

  const handleChange = async (modId: string, category: string, newLevel: string) => {
    try {
      await axios.patch('/api/moderators', {
        moderatorId: modId,
        category: category,   // Make sure you're sending category as a string (e.g., 'accommodation')
        newLevel: newLevel    // Make sure you're sending the new access level as a string (e.g., 'read')
      });
  
      // Update the UI state with the new access level for the specific category
       setModerators(prev =>
      prev.map(mod =>
        mod.id === modId
          ? { 
              ...mod, 
              accessLevel: mod.accessLevel ? { 
                ...mod.accessLevel, 
                [category]: newLevel 
              } : { [category]: newLevel }
            }
          : mod
      )
    );
    } catch (error) {
      console.error("Error updating access level:", error);
      // Optionally handle the error in the UI
    }
  }
  
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Manage Moderators</h1>
        <Link href="/admin">
          <button className="px-4 py-2 bg-blue-600 text-white rounded">Return to Dashboard</button>
        </Link>
      </div>

      <div className="overflow-auto bg-white p-4 rounded shadow">
        <table className="table-auto w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 border">Name</th>
              {categories.map(cat => (
                <th key={cat} className="px-4 py-2 border capitalize">{cat}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {moderators.map((mod: any) => (
              <tr key={mod.id} className="text-center">
                <td className="border px-4 py-2">{mod.name}</td>
                {categories.map(cat => (
                  <td key={cat} className="border px-4 py-2">
                    <select
                      className="border rounded px-2 py-1"
                      value={mod.accessLevel?.[cat] || 'no_access'}
                      onChange={(e) => handleChange(mod.accessLevel?.id, cat, e.target.value)}
                    >
                      {accessOptions.map(opt => (
                        <option key={opt} value={opt}>{opt}</option>
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
