import React from 'react';

export default function AboutSection() {
  return (
    <div className="max-w-2xl">
      {/* Badge */}
      <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-medium mb-6 shadow-lg">
        <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
        About DevLink
      </div>

      {/* Main Headline */}
      <h1 className="text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
        About Our
        <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent block">
          Vision & Mission
        </span>
      </h1>

      {/* Description */}
      <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
        DevLink was born from a simple belief: every creative professional deserves a platform that truly showcases their talent. We're revolutionizing how portfolios are created, managed, and shared.
      </p>

      {/* Feature Pills */}
      <div className="flex flex-wrap gap-3 mb-8">
        <div className="flex items-center px-4 py-2 bg-white rounded-full shadow-md border border-gray-100">
          <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full mr-2"></div>
          <span className="text-sm font-medium text-gray-700">Founded 2023</span>
        </div>
        <div className="flex items-center px-4 py-2 bg-white rounded-full shadow-md border border-gray-100">
          <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mr-2"></div>
          <span className="text-sm font-medium text-gray-700">Remote First</span>
        </div>
        <div className="flex items-center px-4 py-2 bg-white rounded-full shadow-md border border-gray-100">
          <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mr-2"></div>
          <span className="text-sm font-medium text-gray-700">Creator Focused</span>
        </div>
        <div className="flex items-center px-4 py-2 bg-white rounded-full shadow-md border border-gray-100">
          <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mr-2"></div>
          <span className="text-sm font-medium text-gray-700">Open Source</span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900 mb-1">2023</div>
          <div className="text-sm text-gray-600">Founded</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900 mb-1">50K+</div>
          <div className="text-sm text-gray-600">Happy Users</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900 mb-1">12+</div>
          <div className="text-sm text-gray-600">Countries</div>
        </div>
      </div>
    </div>
  );
} 