//import LogIn from './auth/login/page';
import React from 'react';
import './globals.css';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import UserDashboard from './dashboard/userDashboard';
import AdminDashboard from './dashboard/adminDashboard';

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  // Redirect if not authenticated
  if (!session) {
    redirect('/auth/signin');
  }

  return (
    <div className="container mx-auto p-4 text-black">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <p className="mb-4">Welcome, {session.user?.name}!</p>
      
      {session.user?.role === 'admin' ? (
        <AdminDashboard />
      ) : (
        <UserDashboard />
      )}
    </div>
  );
}
