'use client';

import { useParams, useRouter } from 'next/navigation';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import { useAdminStore } from '@/Store/useAdminStore';
import Link from 'next/link';
import { ArrowLeft, Home, ArrowRight } from 'lucide-react';
import clsx from 'clsx';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';

type ResponseItem = {
  message: string;
  sent_by: string;
  created_at: string;
};

type Complaint = {
  id: string;
  title: string;
  description: string[];
  image_url: string[];
  created_at: string;
  category: string;
  status: 'pending' | 'in progress' | 'resolved';
  user_id: string;
  complaint_responses?: {
    id: string;
    created_at: string;
    responses: ResponseItem[];
  };
};

type User = {
  name: string;
};

export default function ComplaintDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const queryClient = useQueryClient();
  const isSuperAdmin = useAdminStore((s) => s.isSuperAdmin);
  const moderatorCategoryAccess = useAdminStore((s) => s.moderatorCategoryAccess);
  const [responseText, setResponseText] = useState('');
  const [statusUpdating, setStatusUpdating] = useState(false);

  const { data: complaint, isLoading: complaintLoading } = useQuery<Complaint>({
    queryKey: ['complaint', id],
    queryFn: async () => {
      const toastId = toast.loading('Fetching complaint details...');
      try {
        const res = await axios.get(`/api/complaint/${id}`);
        toast.success('Complaint details fetched successfully', { id: toastId });
        return res.data.data;
      } catch (error) {
        toast.error('Failed to fetch complaint details', { id: toastId });
        throw error;
      }
    },
    staleTime: 0,
  });

  const { data: user, isLoading: userLoading } = useQuery<User>({
    queryKey: ['user', complaint?.user_id],
    queryFn: async () => {
      if (complaint?.user_id) {
        const res = await axios.get(`/api/user/${complaint.user_id}`);
        return res.data;
      }
      return { name: 'Unknown' };
    },
    enabled: !!complaint?.user_id,
  });

  const canRespond =
    isSuperAdmin ||
    !!moderatorCategoryAccess.find((a) => a.category === complaint?.category && a.access === 'read/write');

  const sendResponseMutation = useMutation({
    mutationFn: async () => {
      const toastId = toast.loading('Sending response...');
      try {
        const res = await axios.post(`/api/complaint/${id}`, {
          id,
          message: responseText,
          sentBy: 'admin',
        });
        toast.success('Response sent successfully', { id: toastId });
        return res.data.data;
      } catch (error) {
        toast.error('Failed to send response', { id: toastId });
        throw error;
      }
    },
    onSuccess: () => {
      setResponseText('');
      queryClient.invalidateQueries({ queryKey: ['complaint', id] });
    },
  });

  const updateStatus = async (newStatus: Complaint['status']) => {
    const toastId = toast.loading('Updating complaint status...');
    try {
      setStatusUpdating(true);
      const res = await axios.put(`/api/complaint/${id}/status`, { id, status: newStatus });
      if (res.data.success) {
        toast.success(res.data.message, { id: toastId });
      } else {
        toast.error(res.data.message || 'Failed to update complaint status', { id: toastId });
      }
      queryClient.invalidateQueries({ queryKey: ['complaint', id] });
    } catch (error) {
      toast.error('Something went wrong while updating status', { id: toastId });
      console.error(error);
    } finally {
      setStatusUpdating(false);
    }
  };

  if (complaintLoading || userLoading || !complaint)
    return <p className="text-center mt-10">Loading...</p>;

  const imageUrls = complaint.image_url || [];
  const responses: ResponseItem[] = complaint?.complaint_responses?.responses || [];

  const getNextStatus = (status: Complaint['status']) => {
    if (status === 'pending') return 'in progress';
    if (status === 'in progress') return 'resolved';
    return null;
  };

  const nextStatus = getNextStatus(complaint.status);

  return (
    <div className="min-h-screen bg-background px-4 py-6">
      <Card className="max-w-3xl mx-auto">
        <CardHeader className="flex justify-between items-center mb-2 px-0">
        <Button
  variant="link"
  onClick={() => router.back()}
  className="text-blue-700 dark:text-blue-300 hover:underline px-0"
>
  <ArrowLeft className="w-4 h-4 mr-1" />
  Back to Complaints
</Button>

<Button asChild variant="link" className="text-blue-700 dark:text-blue-300 hover:underline px-0">
  <Link href="/admin/dashboard">
    <Home className="w-4 h-4 mr-1" />
    Dashboard
  </Link>
</Button>

        </CardHeader>

        <CardContent>
          <CardTitle className="text-2xl font-bold mb-2">{complaint.title}</CardTitle>

          <p className="text-sm text-muted-foreground mb-1">
            {new Date(complaint.created_at).toLocaleDateString()}
          </p>

          <p className="text-sm text-muted-foreground mb-2">By: <strong>{user?.name || 'Unknown User'}</strong></p>

          <p className="text-muted-foreground mb-3">{complaint.description}</p>

          <Separator className="my-3" />

          <p className="text-sm mb-1">Category: {complaint.category}</p>
          <p className="text-sm mb-3 flex items-center">
  Status:{' '}
  <span
    className={clsx(
      'ml-2 px-2 py-0.5 rounded-full text-xs font-semibold capitalize',
      complaint.status === 'pending' && 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100',
      complaint.status === 'in progress' && 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100',
      complaint.status === 'resolved' && 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'
    )}
  >
    {complaint.status}
  </span>
  
  {nextStatus && canRespond && (
    <Button
      size="sm"
      variant="outline"
      className="ml-2 text-xs flex items-center gap-1 border-blue-300 dark:border-blue-600 text-blue-700 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20"
      onClick={() => updateStatus(nextStatus)}
      disabled={statusUpdating}
    >
      Mark as {nextStatus}
      <ArrowRight className="w-4 h-4" />
    </Button>
  )}
</p>


          {imageUrls.length > 0 && (
            <ScrollArea className="flex gap-4 overflow-x-auto mb-6">
              <div className="flex gap-4">
                {imageUrls.map((url, i) => (
                  <img
                    key={i}
                    src={url}
                    alt="Complaint Image"
                    className="w-32 h-32 object-cover rounded-md border border-muted hover:scale-105 transition-transform duration-200"
                  />
                ))}
              </div>
            </ScrollArea>
          )}
          <Separator className="my-3" />

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Conversation</h3>
            {responses.length === 0 ? (
              <p className="text-muted-foreground">No messages yet.</p>
            ) : (
              <ul className="space-y-3">
                {responses.map((res, idx) => (
                  <li
                    key={idx}
                    className={clsx(
                      'p-3 rounded-xl max-w-md shadow-sm transition-colors duration-300',
                      res.sent_by === 'admin'
                        ? 'bg-blue-500/10 dark:bg-blue-400/20 text-right ml-auto border border-blue-300 dark:border-blue-600'
                        : 'bg-zinc-200 dark:bg-zinc-700 text-left border border-zinc-300 dark:border-zinc-600'
                    )}
                  >
                    <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">
                      {res.sent_by === 'admin' ? 'Admin' : 'User'}
                    </p>
                    <p className="text-sm text-foreground dark:text-white">{res.message}</p>
                    <p className="text-[10px] text-muted-foreground mt-1">
                      {new Date(res.created_at).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {canRespond ? (
            <div>
              <Textarea
                value={responseText}
                onChange={(e) => setResponseText(e.target.value)}
                placeholder="Type your response..."
                rows={3}
                className="mb-3 focus-visible:ring-2 focus-visible:ring-blue-400 transition-all"
              />
              <Button
                onClick={() => sendResponseMutation.mutate()}
                disabled={sendResponseMutation.isPending || !responseText}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                {sendResponseMutation.isPending ? 'Sending...' : 'Send Response'}
              </Button>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground italic">
              You have read-only access to this complaint.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
