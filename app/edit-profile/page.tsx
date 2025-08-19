"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditProfilePage() {
  const router = useRouter();
  const [name, setName] = useState("Divya Jagadeesan");
  const [username, setUsername] = useState("divya_dev");
  const [bio, setBio] = useState(
    "🚀 Frontend Developer | Building Connectly — the future of social apps for creators."
  );
  const [avatar, setAvatar] = useState("https://i.pravatar.cc/150?img=32");

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // your save logic...
  console.log({ name, username, bio, avatar });
  router.push("/profile");
};

  return (
    <main className="min-h-screen bg-[#f4f6f8] dark:bg-gray-900 text-gray-900 dark:text-white font-sans">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold">Edit Profile</h1>
        <button
          onClick={() => router.back()}
          className="text-sm text-gray-500 hover:text-gray-800 dark:hover:text-white"
        >
          Cancel
        </button>
      </header>

      {/* Form */}
      <section className="max-w-3xl mx-auto px-6 py-8">
        <form
          onSubmit={handleSave}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 space-y-6"
        >
          {/* Avatar Upload */}
          <div className="flex items-center gap-4">
            <img
              src={avatar}
              alt="Avatar"
              className="w-20 h-20 rounded-full object-cover border-4 border-gray-200 dark:border-gray-700"
            />
            <div>
              <label className="block text-sm font-medium mb-1">
                Profile Photo
              </label>
              <input
                type="url"
                value={avatar}
                onChange={(e) => setAvatar(e.target.value)}
                placeholder="Enter image URL"
                className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm w-full"
              />
            </div>
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm w-full"
            />
          </div>

          {/* Username */}
          <div>
            <label className="block text-sm font-medium mb-1">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm w-full"
            />
          </div>

          {/* Bio */}
          <div>
            <label className="block text-sm font-medium mb-1">Bio</label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              rows={4}
              className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm w-full"
            ></textarea>
          </div>

          {/* Actions */}
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-6 py-2 rounded-full"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={() => router.push("/profile")}
              className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-sm px-6 py-2 rounded-full"
            >
              Cancel
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
