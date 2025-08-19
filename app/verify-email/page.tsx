"use client";

export default function VerifyEmailPage() {
  return (
    <main className="min-h-screen bg-[#f9fafb] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white border border-gray-200 rounded-2xl shadow-lg p-8 text-center">
        <img
          src="/email-verify.png"
          alt="Verify Email"
          className="w-20 h-20 mx-auto mb-4"
        />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Check your inbox 📬</h2>
        <p className="text-sm text-gray-600">
          We've sent a verification link to your email. Click it to activate your Opportunet account.
        </p>
        <p className="mt-4 text-sm text-gray-500">
          Didn’t get it? <a href="#" className="text-indigo-600 font-medium hover:underline">Resend email</a>
        </p>
      </div>
    </main>
  );
}