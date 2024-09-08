'use client'

import React, { useState, useEffect } from 'react';
import { useRownd } from '@rownd/react';
import LandingPage from '@/components/LandingPage';
import ProfilePage from '@/components/ProfilePage';

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { is_authenticated } = useRownd();

  useEffect(() => {
    setIsAuthenticated(is_authenticated);
  }, [is_authenticated]);

  return (
    <main className="h-full bg-gradient-to-br from-blue-100 to-purple-100">
      {isAuthenticated ? <ProfilePage /> : <LandingPage />}
    </main>
  );
}