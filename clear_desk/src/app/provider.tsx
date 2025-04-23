'use client';

import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';
import QueryProvider from '@/components/QueryProvider';
import SessionSync from '@/components/SessionSync';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <SessionSync />
      <QueryProvider>
        {children}
      </QueryProvider>
    </SessionProvider>
  );
}
