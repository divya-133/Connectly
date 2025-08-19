"use client";

import { useState, useEffect } from "react";
import { Settings, Grid3X3, Heart, Bookmark, UserPlus } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";


const user = {
  name: "Divya Jagadeesan",
  username: "divya_dev",
  avatar: "https://i.pravatar.cc/150?img=32",
  bio: "🚀 Frontend Developer | Building Connectly — the future of social apps for creators.",
  followers: 250,
  following: 180,
  posts: 32,
  verified: true,
};

export default function Profile() {
  const [tab, setTab] = useState<"posts" | "likes" | "saved">("posts");

  // Posts with likes/comments generated only once to avoid hydration mismatch
  const [posts, setPosts] = useState<
    { id: number; image: string; likes: number; comments: number }[]
  >([]);

  useEffect(() => {
    const postData = Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      image: `https://source.unsplash.com/random/720x720?sig=${i + 1}`,
      likes: Math.floor(Math.random() * 500) + 50,
      comments: Math.floor(Math.random() * 50) + 5,
    }));
    setPosts(postData);
  }, []);

  function StatCard({ label, value }: { label: string; value: number }) {
    return (
      <div className="text-center">
        <div className="text-xl font-semibold">{value.toLocaleString()}</div>
        <div className="text-xs text-gray-500 dark:text-gray-400">{label}</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#f4f6f8] dark:bg-gray-900 text-gray-900 dark:text-white font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#f4f6f8]/80 dark:bg-gray-900/80 backdrop-blur-md border-b">
  <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-end">
    <div>{/* Left side content, if any, else empty */}</div>
    <Link href="/settings" passHref>
    <Button
      variant="ghost"
      size="icon"
      className="text-black dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
      aria-label="Settings">
      <Settings className="w-5 h-5" />
    </Button>
    </Link>
  </div>
</header>

      <div className="max-w-4xl mx-auto px-4 pt-24 pb-6">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row gap-8 mb-8 bg-white dark:bg-gray-800 rounded-xl p-6 shadow">
          <div className="flex-shrink-0">
            <div className="hidden md:block">
              <img
                src={user.avatar}
                alt="Avatar"
                className="w-32 h-32 rounded-full border-4 border-white shadow-md"
              />
            </div>
          </div>
          <div className="flex-1 space-y-4 justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {user.name}
                </h1>
                {user.verified && (
                  <span className="px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs font-medium">
                    Verified
                  </span>
                )}
              </div>
              <p className="text-gray-500 dark:text-gray-400 font-medium">@{user.username}</p>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line">{user.bio}</p>
            <div className="flex gap-10 pt-2">
              <StatCard label="Posts" value={user.posts} />
              <StatCard label="Followers" value={user.followers} />
              <StatCard label="Following" value={user.following} />
            </div>
            {/* Actions */}
            <div className="flex gap-3">
              <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-5 py-2 rounded-full flex items-center gap-2 shadow font-semibold">
                <UserPlus className="w-4 h-4" />
                Follow
              </button>
              <button className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-sm px-5 py-2 rounded-full text-gray-700 dark:text-gray-200 font-semibold">
                Message
              </button>
            </div>
          </div>
        </div>

        {/* Content Tabs */}
        <nav className="bg-white dark:bg-gray-800 rounded-xl shadow mb-8">
  <div className="max-w-4xl mx-auto px-6 py-3 flex justify-between text-sm font-semibold text-gray-500 dark:text-gray-400 select-none">
    {[
      { label: <><Grid3X3 className="w-5 h-5 mb-0.5" /> Posts</>, value: "posts" },
      { label: <><Heart className="w-5 h-5 mb-0.5" /> Likes</>, value: "likes" },
      { label: <><Bookmark className="w-5 h-5 mb-0.5" /> Saved</>, value: "saved" },
    ].map((item) => (
      <button
        key={item.value}
        onClick={() => setTab(item.value as typeof tab)}
        className={`
          flex flex-col items-center gap-1 text-center flex-1
          border-b-2
          transition
          ${
            tab === item.value
              ? "border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400"
              : "border-transparent hover:text-gray-700 dark:hover:text-gray-300"
          }
          py-2
        `}
        aria-current={tab === item.value ? "page" : undefined}
      >
        {item.label}
      </button>
    ))}
  </div>
</nav>

        {/* Tab Content */}
        {tab === "posts" && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {posts.map((post) => (
              <div
                key={post.id}
                className="aspect-square overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-900 shadow group cursor-pointer"
              >
                <div className="relative w-full h-full">
                  <img
                    src="/bo.jpg"
                    alt="Post"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="flex items-center gap-3 text-white text-sm font-medium">
                      <Heart className="w-5 h-5 mr-1 fill-current" />
                      {post.likes}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "likes" && (
          <div className="text-center py-16 text-gray-500 dark:text-gray-400">
            <Heart className="w-12 h-12 mx-auto mb-4" />
            <div className="text-lg font-semibold mb-2">No liked posts yet</div>
            <p>When you like posts, they'll appear here.</p>
          </div>
        )}

        {tab === "saved" && (
          <div className="text-center py-16 text-gray-500 dark:text-gray-400">
            <Bookmark className="w-12 h-12 mx-auto mb-4" />
            <div className="text-lg font-semibold mb-2">No saved posts yet</div>
            <p>Save posts you want to see again.</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 dark:text-gray-400 py-6 border-t dark:border-gray-700 mt-10">
        &copy; {new Date().getFullYear()} Connectly · Crafted with 💙 by Divya
      </footer>
    </main>
  );
}

