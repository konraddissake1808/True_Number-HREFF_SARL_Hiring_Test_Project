import React from 'react';
import DashboardCard from '@/components/dashboardCard';
import SignOutButton from '@/components/disconectButton';

export default function AdminDashboard() {
  return (
    <div className="bg-blue-50 p-6 rounded-lg text-black">
      <h2 className="text-xl font-semibold mb-4">Admin Controls</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <DashboardCard title="User Management" />
        <DashboardCard title="Site Analytics" />
        <DashboardCard title="System Settings" />
      </div>
      <SignOutButton></SignOutButton>
    </div>
  );
}