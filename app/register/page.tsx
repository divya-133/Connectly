// "use client";

// import { useState } from "react";
// import { Eye, EyeOff } from "lucide-react";

// export default function RegisterPage() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirm, setShowConfirm] = useState(false);

//   const handleRegister = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!name || !email || !password || !confirmPassword) {
//       setError("Please fill in all fields.");
//       return;
//     }

//     if (password !== confirmPassword) {
//       setError("Passwords do not match.");
//       return;
//     }

//     window.location.href = "/feed";
//   };

//   return (
//     <main className="min-h-screen bg-white flex items-center justify-center px-4">
//       <div className="w-full max-w-md border border-gray-200 rounded-2xl shadow-lg p-8">
//         {/* Logo */}
//         <div className="flex justify-center mb-6">
//           <img
//             src="/connectly-logo.jpg.jpeg"
//             alt="Connectly Logo"
//             className="w-14 h-auto object-contain"
//           />
//         </div>

//         {/* Heading */}
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">Create your account</h2>
//         <p className="text-center text-sm text-gray-500 mb-6">
//           Sign up to start using <span className="text-blue-600 font-semibold">Connectly</span>
//         </p>

//         {error && (
//           <div className="text-red-600 bg-red-50 border border-red-200 p-2 rounded mb-4 text-sm text-center">
//             {error}
//           </div>
//         )}

//         {/* Form */}
//         <form className="space-y-5" onSubmit={handleRegister}>
//           {/* Name */}
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               placeholder="Your name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               placeholder="you@example.com"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Password */}
//           <div className="relative">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
//               Password
//             </label>
//             <input
//               type={showPassword ? "text" : "password"}
//               id="password"
//               placeholder="••••••••"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-4 py-3 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <div
//               className="absolute right-3 top-10 cursor-pointer text-gray-500"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//             </div>
//           </div>

//           {/* Confirm Password */}
//           <div className="relative">
//             <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
//               Confirm Password
//             </label>
//             <input
//               type={showConfirm ? "text" : "password"}
//               id="confirmPassword"
//               placeholder="••••••••"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               className="w-full px-4 py-3 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <div
//               className="absolute right-3 top-10 cursor-pointer text-gray-500"
//               onClick={() => setShowConfirm(!showConfirm)}
//             >
//               {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
//             </div>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
//           >
//             Create Account
//           </button>
//         </form>

//         {/* Footer */}
//         <div className="text-center text-sm text-gray-500 mt-6">
//           Already have an account?{" "}
//           <a href="/login" className="text-blue-600 hover:underline">
//             Login
//           </a>
//         </div>
//       </div>
//     </main>
//   );
// }



"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  async function handleRegister(name: string, email: string, password: string) {
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();

    if (res.ok) {
      alert("Registration successful! Please check your email.");
      // Redirect to feed or login page
      window.location.href = "/login"; // or '/feed'
    } else {
      setError(data.message || "Registration failed");
    }
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    handleRegister(name, email, password);
  };

  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-md border border-gray-200 rounded-2xl shadow-lg p-8">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="/connectly-logo.jpg.jpeg"
            alt="Connectly Logo"
            className="w-14 h-auto object-contain"
          />
        </div>
        {/* Heading */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Create your account
        </h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          Sign up to start using{" "}
          <span className="text-blue-600 font-semibold">Connectly</span>
        </p>

        {error && (
          <div className="text-red-600 bg-red-50 border border-red-200 p-2 rounded mb-4 text-sm text-center">
            {error}
          </div>
        )}

        {/* Form */}
        <form className="space-y-5" onSubmit={onSubmit}>
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
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

          {/* Password */}
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
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

          {/* Confirm Password */}
          <div className="relative">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Confirm Password
            </label>
            <input
              type={showConfirm ? "text" : "password"}
              id="confirmPassword"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div
              className="absolute right-3 top-10 cursor-pointer text-gray-500"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Create Account
          </button>
        </form>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </div>
      </div>
    </main>
  );
}
