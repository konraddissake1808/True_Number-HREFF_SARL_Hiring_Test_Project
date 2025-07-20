import React from "react";

export default function DashboardCard({ title }: { title: string }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow text-black">
      <h3 className="font-medium">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">Content for {title.toLowerCase()}</p>
    </div>
  );
}
