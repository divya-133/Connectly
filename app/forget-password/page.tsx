"use client";

import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate email sending
    setTimeout(() => setSubmitted(true), 1000);
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white border border-gray-200 shadow-xl rounded-2xl px-8 py-10">
        
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="/connectly-logo.jpg.jpeg"
            alt="Connectly Logo"
            className="w-12 h-12 object-contain"
          />
        </div>

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Forgot Password?
        </h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          Enter your email to receive a password reset link.
        </p>

        {submitted ? (
          <div className="text-center text-green-600 font-medium">
            ✅ If this email exists, a reset link has been sent.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Reset Link
            </button>
          </form>
        )}

        <div className="text-center text-sm text-gray-500 mt-6">
          <a href="/login" className="text-blue-600 hover:underline">
            ← Back to Login
          </a>
        </div>
      </div>
    </main>
  );
}