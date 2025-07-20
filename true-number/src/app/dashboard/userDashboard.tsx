import React from 'react';
import DashboardCard from '@/components/dashboardCard';
import SignOutButton from '@/components/disconectButton';

export default function UserDashboard() {
  return (
    <div className="bg-green-50 p-6 rounded-lg text-black">
      <h2 className="text-xl font-semibold mb-4">Your Account</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DashboardCard title="Profile Settings" />
        <DashboardCard title="Your Activity" />
        <SignOutButton></SignOutButton>
      </div>
    </div>
  );
}