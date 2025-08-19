"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in both email and password.");
      return;
    }
    window.location.href = "/feed";
  };

  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-md border border-gray-200 rounded-2xl shadow-lg p-8">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="/connectly-logo.jpg.jpeg"
            alt="Connectly Logo"
            className="w-10 h-auto object-contain"
          />
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">Welcome back 👋</h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          Log in to continue using <span className="text-blue-600 font-semibold">Connectly</span>
        </p>

        {/* Social Login */}
        <div className="space-y-3 mb-6">
          <button className="w-full border border-gray-300 py-2 px-4 rounded-lg flex items-center justify-center gap-5 hover:bg-gray-50 transition">
            <img src="/google.jpg" alt="Google" className="w-6 h-7" />
            <span className="text-sm font-medium text-gray-700">Continue with Google</span>
          </button>
          <button className="w-full border border-gray-300 py-2 px-4 rounded-lg flex items-center justify-center gap-5 hover:bg-gray-50 transition">
            <img src="/facebook.jpg" alt="Facebook" className="w-6 h-7" />
            <span className="text-sm font-medium text-gray-700">Continue with Facebook</span>
          </button>
        </div>

        {/* Divider */}
        <div className="relative text-center mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <span className="bg-white px-4 text-sm text-gray-500 relative z-10">or continue with email</span>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleLogin}>
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email address
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password with Eye Toggle */}
          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div
              className="absolute right-3 top-10 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </div>
          </div>

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="form-checkbox text-blue-600" />
              Remember me
            </label>
            <a href="/forget-password" className="text-blue-600 hover:underline">Forgot password?</a>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Sign In
          </button>

          {error && <p className="text-red-600 text-sm text-center mt-2">{error}</p>}
        </form>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 mt-6">
          New to Connectly?{" "}
          <a href="/register" className="text-blue-600 hover:underline">Create an account</a>
        </div>
      </div>
    </main>
  );
}



