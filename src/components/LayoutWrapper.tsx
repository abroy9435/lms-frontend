'use client'

import { useState } from 'react'

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <>
      {/* Header */}
      <header className="w-full bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold w-full">VrixaaLabs LMS</h1>
        <nav className=" flex space-x-6 justify-evenly w-full">
          <div><a href="#" className="hover:underline">Dashboard</a></div>
          <div><a href="#" className="hover:underline">Courses</a></div>
          <div><a href="#" className="hover:underline">Profile</a></div>
          <div><a href="#" className="hover:underline">Settings</a></div>
        </nav>
      </header>

      {/* Body */}
      <div className={`flex flex-1 ${isSidebarOpen ? 'bg-gray' : 'bg-black'}`}>
        {/* Sidebar */}
        <aside className={`h-full p-4 transition-all duration-200 ${isSidebarOpen ? 'w-48' : 'w-5'}`}>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-sm text-white mb-4"
          >
            {isSidebarOpen ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x" aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-menu" aria-hidden="true"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>}
          </button>
          {isSidebarOpen && (
            <ul className="space-y-2 text-sm text-white bg-gray justify-center items-center">
              <li>Courses</li>
              <li>Explore</li>
              <li>Contact us</li>
            </ul>
          )}
        </aside>

        {/* Main */}
        <main className="flex-1 p-6 bg-black flex justify-center items-center">
          {children}
        </main>
      </div>

      {/* Footer */}
      <footer className="w-full bg-gray-200 text-center py-4 text-sm text-gray-700 mt-auto">
        &copy; 2025 My LMS. All rights reserved.
      </footer>
    </>
  )
}
