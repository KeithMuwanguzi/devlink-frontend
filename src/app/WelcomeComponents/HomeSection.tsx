import React from 'react';

export default function HomeSection() {
  return (
    <div className="max-w-2xl">
      {/* Badge */}
      <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-medium mb-6 shadow-lg">
        <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
        Portfolio Management System
      </div>

      {/* Main Headline */}
      <h1 className="text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
        Craft Your
        <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent block">
          Digital Presence
        </span>
      </h1>

      {/* Description */}
      <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
        Professional portfolio management reimagined. Create stunning showcases that captivate clients and elevate your career with our next-generation platform.
      </p>

      {/* Feature Pills */}
      <div className="flex flex-wrap gap-3 mb-8">
        <div className="flex items-center px-4 py-2 bg-white rounded-full shadow-md border border-gray-100">
          <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mr-2"></div>
          <span className="text-sm font-medium text-gray-700">AI-Powered</span>
        </div>
        <div className="flex items-center px-4 py-2 bg-white rounded-full shadow-md border border-gray-100">
          <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mr-2"></div>
          <span className="text-sm font-medium text-gray-700">Lightning Fast</span>
        </div>
        <div className="flex items-center px-4 py-2 bg-white rounded-full shadow-md border border-gray-100">
          <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mr-2"></div>
          <span className="text-sm font-medium text-gray-700">Mobile First</span>
        </div>
        <div className="flex items-center px-4 py-2 bg-white rounded-full shadow-md border border-gray-100">
          <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-cyan-500 rounded-full mr-2"></div>
          <span className="text-sm font-medium text-gray-700">SEO Optimized</span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900 mb-1">50K+</div>
          <div className="text-sm text-gray-600">Active Users</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900 mb-1">99.9%</div>
          <div className="text-sm text-gray-600">Uptime</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900 mb-1">24/7</div>
          <div className="text-sm text-gray-600">Support</div>
        </div>
      </div>
    </div>
  );
} 