'use client';

import { signOut } from 'next-auth/react';

export default function SignOutButton() {
  return (
    <button
      onClick={() => signOut({
        callbackUrl: '/auth/login', // Redirect after sign out
        redirect: true
      })}
      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
    >
      Disconnect
    </button>
  );
}