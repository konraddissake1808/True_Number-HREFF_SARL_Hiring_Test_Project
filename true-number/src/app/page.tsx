import LogIn from './auth/login/page';
import React from 'react';
import './globals.css';

export default function Home() {
  return (
    <main className="text-black">
      <div><LogIn></LogIn></div>
    </main>
  );
}
