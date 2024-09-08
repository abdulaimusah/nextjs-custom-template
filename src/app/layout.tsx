import React from 'react';
import { Inter, Poppins } from 'next/font/google';
import dynamic from 'next/dynamic';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ weight: ['400', '600', '700'], subsets: ['latin'] });

const DynamicAppWrapper = dynamic(() => import('@/components/AppWrapper'), { ssr: false });
const DynamicAppLayout = dynamic(() => import('@/components/AppLayout'), { ssr: false });

export const metadata = {
  title: 'Fun Game',
  description: 'Combine elements to create new ones in this exciting game!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.className}`}>
        <DynamicAppWrapper>
          <DynamicAppLayout>
            {children}
          </DynamicAppLayout>
        </DynamicAppWrapper>
      </body>
    </html>
  );
}