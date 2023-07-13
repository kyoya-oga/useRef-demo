import * as React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <div className='min-h-screen bg-slate-700 text-gray-100'>
      <main className='container mx-auto py-10'>{children}</main>
    </div>
  );
}
