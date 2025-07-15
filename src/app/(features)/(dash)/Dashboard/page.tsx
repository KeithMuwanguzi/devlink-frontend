'use client';

import { useState } from 'react';
import { ChartBar, Mail, Settings, User } from 'lucide-react';
import Link from 'next/link';


const Dashboard = () => {
  const [showMailPopup, setShowMailPopup] = useState(false);

  return (
    <div className="flex h-screen w-full">
      {/* LEFT SIDE - Sidebar */}
      <div className="w-1/5 bg-black text-white p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-8">LOGO</h1>
          <ul className="space-y-4">
            <Link
              href="/dashboard"
              className="flex items-center space-x-2 hover:text-gray-400"
            >
              <ChartBar className="w-4 h-4" />
              <span>Dashboard</span>
            </Link>

            <Link
              href="/settings"
              className="flex items-center space-x-2 hover:text-gray-400"
            >
              <Settings className="w-4 h-4" />
              <span>Settings</span>
            </Link>

            <Link
              href="/profile"
              className="flex items-center space-x-2 hover:text-gray-400"
            >
              <User className="w-4 h-4" />
              <span>Profile</span>
            </Link>
          </ul>
        </div>

        <button className="bg-blue-600 rounded p-2 text-white">LOGOUT</button>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 bg-gray-100">
        {/* Topbar */}
        <div className="h-16 bg-white flex items-center justify-between px-6 shadow relative z-10">
          <span className="w-1/3 font-semibold">DASHBOARD</span>

       
          <div className="flex items-center space-x-4 relative">
           {/* Mail Icon and Popup */}
            <div className="relative">
              <button
                onClick={() => setShowMailPopup(!showMailPopup)}
                className="focus:outline-none"
              >
                <Mail className="w-6 h-6 text-gray-600" />
              </button>

              {showMailPopup && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg p-4 z-50">
                  <p className="text-gray-700 text-sm">You have 3 new emails.</p>
                </div>
              )}
            </div>

            {/* Vertical line */}
            <div className="w-px h-6 bg-gray-600" />

            {/* Name and Image */}
            <span className="font-semibold text-blue-700">MARTHA MUSIIMIRE</span>
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img
                src="/AI PHOTO.PNG"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Dashboard content */}
        <div className="p-6">
          <h2 className="text-xl font-bold">Welcome to the Dashboard</h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
