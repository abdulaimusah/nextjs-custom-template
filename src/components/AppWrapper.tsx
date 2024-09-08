'use client'

import React from 'react';
import { RowndProvider } from '@rownd/react';
import dynamic from 'next/dynamic';

const DynamicRowndAuthProvider = dynamic(() => import('./RowndAuthProvider'), { ssr: false });

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  return (
    <RowndProvider appKey={process.env.NEXT_PUBLIC_ROWND_APP_KEY!}>
      <DynamicRowndAuthProvider>
        {children}
      </DynamicRowndAuthProvider>
    </RowndProvider>
  );
}