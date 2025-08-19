"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Heart, MessageCircle, UserPlus } from "lucide-react";

export default function NotificationsPage() {
  const router = useRouter();

  const notifications = [
    {
      id: 1,
      type: "like",
      user: "rahul_ui",
      avatar: "https://i.pravatar.cc/100?img=5",
      message: "liked your post.",
      time: "2h ago",
    },
    {
      id: 2,
      type: "comment",
      user: "design_guru",
      avatar: "https://i.pravatar.cc/100?img=7",
      message: "commented: 🔥 Awesome design!",
      time: "3h ago",
    },
    {
      id: 3,
      type: "comment",
      user: "design_guru",
      avatar: "https://i.pravatar.cc/100?img=7",
      message: "commented: 🔥 Awesome design!",
      time: "3h ago",
    },
    {
      id: 4,
      type: "like",
      user: "rahul_ui",
      avatar: "https://i.pravatar.cc/100?img=5",
      message: "liked your post.",
      time: "2h ago",
    },
    {
      id: 5,
      type: "comment",
      user: "design_guru",
      avatar: "https://i.pravatar.cc/100?img=7",
      message: "commented: 🔥 Awesome design!",
      time: "3h ago",
    },
    {
      id: 6,
      type: "follow",
      user: "newbie_dev",
      avatar: "https://i.pravatar.cc/100?img=15",
      message: "started following you.",
      time: "5h ago",
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "like":
        return <Heart className="text-pink-500 w-5 h-5" />;
      case "comment":
        return <MessageCircle className="text-blue-500 w-5 h-5" />;
      case "follow":
        return <UserPlus className="text-green-500 w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen bg-[#f9fafb] dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
      {/* Header */}
      <header className="sticky top-0 bg-white dark:bg-gray-800 shadow border-b px-6 py-4 z-10">
        <div className="max-w-9xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-700">Notifications</h1>
        </div>
      </header>

      {/* Notification List */}
      <section className="max-w-4xl mx-auto px-4 py-6 space-y-4">
        {notifications.map((n) => (
          <div
            key={n.id}
            onClick={() => router.push('/profile/${n.user}')} // ✅ FIXED here
            className="flex items-center gap-4 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-xl p-4 shadow-sm hover:shadow-md cursor-pointer transition"
          >
            <img
              src={n.avatar}
              alt={n.user}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <p className="text-sm text-gray-800 dark:text-white">
                <span className="font-semibold">@{n.user}</span> {n.message}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{n.time}</p>
            </div>
            {getIcon(n.type)}
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="text-xs text-gray-500 dark:text-gray-400 text-center py-6 border-t bg-white dark:bg-gray-800 mt-auto">
        <div className="max-w-4xl mx-auto px-4">
          <p>
            © {new Date().getFullYear()} Connectly Inc. {" "}
            <a href="#" className="hover:underline">Privacy</a> ·{" "}
            <a href="#" className="hover:underline">Terms</a>
          </p>
        </div>
      </footer>
    </main>
  );
}












