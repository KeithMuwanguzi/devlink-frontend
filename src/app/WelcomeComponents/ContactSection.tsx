import React from 'react';

export default function ContactSection() {
  return (
    <div className="max-w-2xl">
      {/* Badge */}
      <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-medium mb-6 shadow-lg">
        <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
        Get In Touch
      </div>

      {/* Main Headline */}
      <h1 className="text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
        Let's
        <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent block">
          Connect
        </span>
      </h1>

      {/* Description */}
      <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
        Have questions, feedback, or want to partner with us? We'd love to hear from you. Reach out through any of these channels and we'll get back to you promptly.
      </p>

      {/* Contact Options */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="bg-white w-full  md:w-2/3 rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Us</h3>
          <div className="space-y-1">
            <a href="mailto:keithmuwanguzi@gmail.com" className="block text-gray-600 text-sm hover:text-indigo-600 transition-colors duration-200 hover:translate-x-1 transform">
              keithmuwanguzi@gmail.com | +256 763-647885
            </a>
            <a href="mailto:musiimiremartha@gmail.com" className="block text-gray-600 text-sm hover:text-indigo-600 transition-colors duration-200 hover:translate-x-1 transform">
              musiimiremartha@gmail.com | +256 775-466913
            </a>
          </div>
        </div>

        <div className="bg-white w-full md:w-1/3 rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
          <p className="text-gray-600 text-sm">Kampala, Uganda</p>
        </div>
      </div>

      {/* Feature Pills */}
      <div className="flex flex-wrap gap-3 mb-8">
        <div className="flex items-center px-4 py-2 bg-white rounded-full shadow-md border border-gray-100">
          <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full mr-2"></div>
          <span className="text-sm font-medium text-gray-700">Quick Response</span>
        </div>
        <div className="flex items-center px-4 py-2 bg-white rounded-full shadow-md border border-gray-100">
          <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mr-2"></div>
          <span className="text-sm font-medium text-gray-700">Global Reach</span>
        </div>
        <div className="flex items-center px-4 py-2 bg-white rounded-full shadow-md border border-gray-100">
          <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mr-2"></div>
          <span className="text-sm font-medium text-gray-700">Partnership Ready</span>
        </div>
        <div className="flex items-center px-4 py-2 bg-white rounded-full shadow-md border border-gray-100">
          <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mr-2"></div>
          <span className="text-sm font-medium text-gray-700">Enterprise Solutions</span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900 mb-1">12h</div>
          <div className="text-sm text-gray-600">Response Time</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900 mb-1">50+</div>
          <div className="text-sm text-gray-600">Countries</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900 mb-1">100+</div>
          <div className="text-sm text-gray-600">Partners</div>
        </div>
      </div>
    </div>
  );
} 