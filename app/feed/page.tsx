"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Plus,
  Heart,
  MessageCircle,
  Repeat2,
  MoreHorizontal,
  Sun,
  Moon,
} from "lucide-react";
import { useTheme } from "next-themes";

// Define typings for posts
type Post = {
  id: number;
  user: string;
  avatar: string;
  content: string;
  image: string;
  time: string;
};

// Define typings for suggestions
type Suggestion = {
  user: string;
  img: string;
  mutual: number;
};

// Define Story type with optional ring property
type Story = {
  user: string;
  img: string;
  ring?: boolean;
};

// Reusable UserAvatar Component with typing
function UserAvatar({
  src,
  alt,
  size = 12,
  ring = false,
  onClick,
}: {
  src: string;
  alt?: string;
  size?: number;
  ring?: boolean;
  onClick?: () => void;
}) {
  return (
    <img
      src={src}
      alt={alt}
      onClick={onClick}
      className={`rounded-full object-cover aspect-square ${
        ring ? "ring-3 ring-blue-100" : ""
      } ${
        onClick
          ? "cursor-pointer hover:scale-110 active:scale-95 transition-transform"
          : ""
      }`}
      style={{ width: size * 4, height: size * 4 }}
    />
  );
}

// Typed posts array
const posts: Post[] = [
  {
    id: 1,
    user: "alice_superdev",
    avatar: "https://i.pravatar.cc/150?img=13",
    content:
      "Connectly 2.0 is out! Brand new design, blazing fast, built with ❤️.",
    image: "https://source.unsplash.com/900x540/?social,tech,1",
    time: "Just now",
  },
  {
    id: 2,
    user: "bobby_coder",
    avatar: "https://i.pravatar.cc/150?img=14",
    content: "UI/UX is king 👑. Our feed never felt smoother! Try dark mode 🌒",
    image: "https://source.unsplash.com/900x580/?technology,coding,2",
    time: "22m ago",
  },
  {
    id: 3,
    user: "elena_uiux",
    avatar: "https://i.pravatar.cc/150?img=15",
    content:
      "Feeling inspired by the modern social world. Connect, share, thrive! 💡",
    image: "https://source.unsplash.com/900x620/?app,design,3",
    time: "3h ago",
  },
];

// Typed suggestions array
const suggestions: Suggestion[] = [
  { user: "alex_cool", img: "https://i.pravatar.cc/100?img=22", mutual: 3 },
  { user: "jessy_tech", img: "https://i.pravatar.cc/100?img=43", mutual: 1 },
  { user: "sammy_dev", img: "https://i.pravatar.cc/100?img=18", mutual: 5 },
  { user: "jordan_js", img: "https://i.pravatar.cc/100?img=9", mutual: 2 },
];

// Typed stories array
const stories: Story[] = [
  { user: "You", img: "https://i.pravatar.cc/90?img=33" },
  { user: "divya_dev", img: "https://i.pravatar.cc/90?img=11", ring: true },
  { user: "priya_ai", img: "https://i.pravatar.cc/90?img=14", ring: true },
  { user: "rahul_front", img: "https://i.pravatar.cc/90?img=12", ring: true },
  { user: "matt_lib", img: "https://i.pravatar.cc/90?img=16", ring: true },
  { user: "vivi_biz", img: "https://i.pravatar.cc/90?img=15", ring: true },
  { user: "david_ui", img: "https://i.pravatar.cc/90?img=37", ring: true },
];

export default function FeedPage() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  return (
    <main className="min-h-screen bg-gradient-to-tr from-[rgb(255,255,255)] via-[#f6f7f8] to-[#fbfbfc] dark:from-[#141927] dark:to-[#222a3a] font-inter text-neutral-800 dark:text-neutral-100 antialiased">
      {/* HEADER */}
      <header className="fixed w-full z-40 bg-white/80 dark:bg-[#141927]/80 border-b border-neutral-200/70 dark:border-neutral-800 px-2 md:px-12 py-2.5 md:py-3 flex items-center justify-between shadow-sm backdrop-blur-md">
        {/* Logo & Name */}
        <div className="flex items-center gap-3 md:gap-4 text-2xl font-bold text-blue-700 dark:text-blue-400 tracking-tight select-none">
          <img
            src="/connectly-logo.jpg.jpeg"
            alt="Connectly"
            className="w-9 h-10 object-contain rounded-lg"
          />
          Connectly
        </div>

        {/* Navbar */}
        <nav className="flex items-center gap-5 text-base md:text-sm lg:text-base font-medium">
          <Link
            className="font-semibold text-blue-600 dark:text-blue-300"
            href="/feed"
          >
            Home
          </Link>
          <Link
            className="hover:text-blue-500 dark:hover:text-blue-200 transition hidden md:inline"
            href="/explore"
          >
            Explore
          </Link>
          <Link
            className="hover:text-blue-500 dark:hover:text-blue-200 transition"
            href="/notifications"
          >
            Notifications
          </Link>
          <Link
            className="hover:text-blue-500 dark:hover:text-blue-200 transition hidden md:inline"
            href="/messages"
          >
            Messages
          </Link>

          {/* Create Post Button */}
          <Link
            href="/create"
            className="ml-2 bg-blue-600 hover:bg-blue-700 transition text-white square-full p-2 shadow-md"
          >
            <Plus className="w-4 h-4" />
          </Link>

          {/* Profile Avatar */}
          <div
            className="relative group cursor-pointer ml-1"
            onClick={() => router.push("/profile")}
          >
            <UserAvatar
              src="https://i.pravatar.cc/100?img=3"
              alt="User"
              size={10}
              ring
            />
          </div>
        </nav>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-[84px] md:h-[80px]" />

      {/* MAIN CONTENT */}
      <div className="relative max-w-6xl mx-auto flex flex-row gap-10 items-stretch px-2 sm:px-5 md:px-10 pt-6 pb-16 w-full">
        {/* FEED AREA */}
        <section className="flex-1 flex flex-col min-w-0 max-w-2xl mx-auto">
          {/* STORIES BAR */}
          <div className="flex items-center gap-4 overflow-x-auto pb-2 px-1 mb-7 mt-2">
            {stories.map((s, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center gap-1 min-w-[4.5rem]"
              >
                <UserAvatar
                  src={s.img}
                  alt={s.user}
                  size={14}
                  ring={!!s.ring || idx === 0}
                  onClick={
                    idx === 0 ? undefined : () => router.push(`/profile/${s.user}`)
                  }
                />
                <span
                  className={`text-xs font-semibold ${
                    idx === 0
                      ? "text-blue-600"
                      : "text-neutral-500 dark:text-neutral-300"
                  }`}
                >
                  {s.user}
                </span>
              </div>
            ))}
          </div>

          {/* POSTS FEED */}
          <div className="flex flex-col gap-9">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-white/95 dark:bg-[#191c24]/95 border border-neutral-200/70 dark:border-neutral-800 shadow-xl rounded-3xl backdrop-blur-[1.5px] transition hover:shadow-2xl overflow-hidden p-0"
              >
                {/* Post Header */}
                <div className="flex items-center gap-3 px-6 pt-5 pb-2">
                  <UserAvatar
                    src={post.avatar}
                    alt={post.user}
                    size={7}
                    ring
                    onClick={() => router.push(`/profile/${post.user}`)}
                  />
                  <div className="flex flex-col flex-1 min-w-0">
                    <span
                      onClick={() => router.push(`/profile/${post.user}`)}
                      className="cursor-pointer font-semibold hover:underline truncate text-lg"
                    >
                      @{post.user}
                    </span>
                    <span className="text-xs text-neutral-400">{post.time}</span>
                  </div>
                  <button className="hover:bg-neutral-100 hover:dark:bg-[#242c3e] w-8 h-8 flex items-center justify-center rounded-full transition">
                    <MoreHorizontal className="w-5 h-5 text-neutral-400" />
                  </button>
                </div>

                {/* Post Image */}
                <div>
                  <img
                    src="/bo.jpg"
                    alt="No Images"
                    className="w-full aspect-[16/8] object-cover rounded-2xl mx-auto transition group-hover:scale-[1.01] duration-200"
                  />
                </div>

                {/* Post Content */}
                <div className="px-6 pt-4 pb-1">
                  <p className="text-lg leading-relaxed font-normal text-neutral-800 dark:text-neutral-100">
                    {post.content}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex items-center px-6 pt-4 pb-5 gap-10 border-t border-neutral-100 dark:border-[#232948]">
                  <button className="group flex items-center gap-2 text-neutral-600 dark:text-neutral-200 hover:text-pink-600 active:scale-95 transition font-medium">
                    <Heart className="w-5 h-5 group-hover:scale-125 transition" /> Like
                  </button>
                  <button className="group flex items-center gap-2 text-neutral-600 dark:text-neutral-200 hover:text-blue-600 active:scale-95 transition font-medium">
                    <MessageCircle className="w-5 h-5 group-hover:scale-125 transition" /> Comment
                  </button>
                  <button className="group flex items-center gap-2 text-neutral-600 dark:text-neutral-200 hover:text-green-600 active:scale-95 transition font-medium">
                    <Repeat2 className="w-5 h-5 group-hover:scale-125 transition" /> Share
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SIDEBAR */}
        <aside className="hidden md:flex flex-col w-80 px-2 sticky top-28 gap-8">
          {/* Suggestions */}
          <div className="bg-white/95 dark:bg-[#181a22]/95 border border-neutral-100 dark:border-[#222938] shadow rounded-2xl py-4 px-4">
            <div className="font-bold text-lg text-neutral-900 dark:text-neutral-100 mb-2">
              People you may know
            </div>
            <div className="space-y-4">
              {suggestions.map((s) => (
                <div key={s.user} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <UserAvatar src={s.img} size={6} ring />
                    <div>
                      <span className="font-medium text-sm">@{s.user}</span>
                      <span className="block text-xs text-neutral-400">
                        {s.mutual} mutual {s.mutual > 1 ? "friends" : "friend"}
                      </span>
                    </div>
                  </div>
                  <button className="text-xs bg-blue-600 text-white px-4 py-1.5 rounded-full font-semibold hover:bg-blue-700 shadow transition">
                    Follow
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Trending */}
          <div className="bg-white/95 dark:bg-[#181a22]/95 border border-neutral-100 dark:border-[#222938] shadow rounded-2xl py-4 px-4">
            <div className="font-bold text-lg mb-2 text-neutral-900 dark:text-neutral-100">
              Trending
            </div>
            <ul className="space-y-2 font-medium text-base">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full" /> #ConnectlyTransform{" "}
                <span className="ml-2 text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 font-semibold px-1.5 rounded">
                  5.8k
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-pink-500 rounded-full" /> #UXDesign{" "}
                <span className="ml-2 text-xs bg-pink-100 dark:bg-pink-900 text-pink-700 font-semibold px-1.5 rounded">
                  4.2k
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full" /> #NextjsPower{" "}
                <span className="ml-2 text-xs bg-green-100 dark:bg-green-900 text-green-700 font-semibold px-1.5 rounded">
                  4k
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full" /> #OpenSource{" "}
                <span className="ml-2 text-xs bg-yellow-50 dark:bg-yellow-800 text-yellow-700 font-semibold px-1.5 rounded">
                  3.5k
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-600 rounded-full" /> #FrontendLovers{" "}
                <span className="ml-2 text-xs bg-purple-100 dark:bg-purple-900 text-purple-700 font-semibold px-1.5 rounded">
                  2.9k
                </span>
              </li>
            </ul>
          </div>
        </aside>
      </div>

      {/* FOOTER */}
      <footer className="w-full mt-8 border-t border-neutral-200/60 dark:border-neutral-700 py-7 bg-transparent text-center text-xs text-neutral-500 dark:text-neutral-400 select-none px-4">
        <div className="max-w-6xl mx-auto text-xs text-neutral-500 dark:text-neutral-400 px-4 tracking-wide flex flex-col gap-2">
          <p>
            © {new Date().getFullYear()} Connectly Inc. •{" "}
            <a href="#" className="hover:underline">
              Privacy
            </a>{" "}
            •{" "}
            <a href="#" className="hover:underline">
              Terms
            </a>
          </p>
          <p>
            Built modern by Divya • Inspired by Instagram, Twitter, Facebook •
            Imagination by you 📱✨
          </p>
        </div>
      </footer>
    </main>
  );
}
