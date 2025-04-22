'use client';

import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';
import QueryProvider from '@/components/QueryProvider';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <QueryProvider>
        {children}
      </QueryProvider>
    </SessionProvider>
  );
}
