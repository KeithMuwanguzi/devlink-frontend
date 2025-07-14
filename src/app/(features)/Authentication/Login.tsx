"use client";

import { Mail, Lock } from "lucide-react";
import { useState } from "react";

interface LoginProps {
  onClose: () => void;
}

const Login = ({ onClose }: LoginProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-purple-700">Login</h2>
          <button
            onClick={onClose}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white text-sm py-1 px-3 rounded-lg shadow"
          >
            Close
          </button>
        </div>

        {/* Subtitle */}
        <p className="text-sm text-gray-600 mb-6 text-center">Login to continue</p>

        {/* Email Input */}
        <div className="flex items-center bg-gray-100 p-3 rounded-lg mb-4 shadow-md">
          <Mail className="w-5 h-5 text-purple-500 mr-2" />
          <input
            type="email"
            placeholder="someone@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-transparent w-full outline-none text-sm text-gray-700"
          />
        </div>

        {/* Password Input */}
        <div className="flex items-center bg-gray-100 p-3 rounded-lg mb-6 shadow-md">
          <Lock className="w-5 h-5 text-purple-500 mr-2" />
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-transparent w-full outline-none text-sm text-gray-700"
          />
        </div>

        {/* Login Button */}
        <button
          className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-2 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
