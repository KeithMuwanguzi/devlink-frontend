import React from 'react';

export default function FeaturesSection() {
  return (
    <div className="max-w-2xl">
      {/* Badge */}
      <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-medium mb-6 shadow-lg">
        <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
        Platform Features
      </div>

      {/* Main Headline */}
      <h1 className="text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
        Powerful
        <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent block">
          Features
        </span>
      </h1>

      {/* Description */}
      <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
        Experience cutting-edge features designed to make your portfolio stand out. From AI-powered optimization to lightning-fast performance, we've got you covered.
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

      {/* Advanced Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Templates</h3>
          <p className="text-gray-600 text-sm">AI-powered templates that adapt to your content and industry.</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance</h3>
          <p className="text-gray-600 text-sm">Blazing fast load times with optimized assets and CDN delivery.</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900 mb-1">99.9%</div>
          <div className="text-sm text-gray-600">Uptime</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900 mb-1">&lt;1s</div>
          <div className="text-sm text-gray-600">Load Time</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900 mb-1">50+</div>
          <div className="text-sm text-gray-600">Templates</div>
        </div>
      </div>
    </div>
  );
} 