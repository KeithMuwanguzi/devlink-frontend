import React from 'react';

export default function SupportSection() {
  return (
    <div className="max-w-2xl">
      {/* Badge */}
      <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-medium mb-6 shadow-lg">
        <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
        Customer Support
      </div>

      {/* Main Headline */}
      <h1 className="text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
        We're Here
        <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent block">
          To Help
        </span>
      </h1>

      {/* Description */}
      <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
        Our dedicated support team is available 24/7 to help you succeed. Get instant answers, personalized guidance, and expert assistance whenever you need it.
      </p>

      {/* Support Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Chat</h3>
          <p className="text-gray-600 text-sm">Get instant help with our 24/7 live chat support system.</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Knowledge Base</h3>
          <p className="text-gray-600 text-sm">Access hundreds of tutorials, guides, and FAQs.</p>
        </div>
      </div>

      {/* Feature Pills */}
      <div className="flex flex-wrap gap-3 mb-8">
        <div className="flex items-center px-4 py-2 bg-white rounded-full shadow-md border border-gray-100">
          <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full mr-2"></div>
          <span className="text-sm font-medium text-gray-700">24/7 Available</span>
        </div>
        <div className="flex items-center px-4 py-2 bg-white rounded-full shadow-md border border-gray-100">
          <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mr-2"></div>
          <span className="text-sm font-medium text-gray-700">Expert Team</span>
        </div>
        <div className="flex items-center px-4 py-2 bg-white rounded-full shadow-md border border-gray-100">
          <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mr-2"></div>
          <span className="text-sm font-medium text-gray-700">Video Tutorials</span>
        </div>
        <div className="flex items-center px-4 py-2 bg-white rounded-full shadow-md border border-gray-100">
          <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mr-2"></div>
          <span className="text-sm font-medium text-gray-700">Community Forum</span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900 mb-1">24/7</div>
          <div className="text-sm text-gray-600">Support</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900 mb-1">&lt;2min</div>
          <div className="text-sm text-gray-600">Response Time</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900 mb-1">500+</div>
          <div className="text-sm text-gray-600">Help Articles</div>
        </div>
      </div>
    </div>
  );
} 