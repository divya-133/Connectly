// "use client";

// import { useState, useEffect } from "react";
// import { useTheme } from "next-themes";
// import Link from "next/link";

// const TRENDING_TOPICS = [
//   "#AIRevolution",
//   "#ConnectlyUpdates",
//   "#DesignTrends2025",
//   "#NextJS",
//   "#DevCommunity",
//   "#Web3",
//   "#UIdesign",
//   "#Inspiration",
// ];

// const USER_AVATARS = [11, 21, 34, 45, 7, 15];
// const VIDEO_IDS = ["dQw4w9WgXcQ", "M7lc1UVf-VE", "e-ORhEE9VVg"];

// export default function ExplorePage() {
//   const { theme, setTheme } = useTheme();
//   const [activeTab, setActiveTab] = useState<"Trending" | "Photos" | "Videos" | "People">("Trending");
//   const [postCounts, setPostCounts] = useState<number[]>([]);

//   useEffect(() => {
//     const counts = TRENDING_TOPICS.map(() => Math.floor(Math.random() * 50 + 10));
//     setPostCounts(counts);
//   }, []);

//   const exploreContent = {
//     Trending: (
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-7">
//         {TRENDING_TOPICS.map((topic, i) => (
//           <article
//             key={topic}
//             tabIndex={0}
//             className="group cursor-pointer rounded-3xl p-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-lg transition ease-in-out"
//             aria-label={`${topic} with ${postCounts[i]}k posts today`}
//           >
//             <h3 className="text-xl font-semibold text-blue-600 group-hover:underline leading-snug">
//               {topic}
//             </h3>
//             <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 tracking-wide">
//               {postCounts[i]}k posts today
//             </p>
//           </article>
//         ))}
//       </div>
//     ),
//     Photos: (
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
//         {Array.from({ length: 15 }).map((_, idx) => (
//           <div
//             key={idx}
//             className="relative rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-md hover:shadow-lg transition cursor-pointer aspect-square"
//             aria-label={`Photo ${idx + 1}`}
//           >
//             <img
//               src={`https://source.unsplash.com/random/600x600?sig=${idx + 32}`}
//               alt={`Explore photo ${idx + 1}`}
//               className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//               loading="lazy"
//               draggable={false}
//             />
//           </div>
//         ))}
//       </div>
//     ),
//     Videos: (
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
//         {VIDEO_IDS.map((vid) => (
//           <div
//             key={vid}
//             className="aspect-video rounded-xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition cursor-pointer bg-gray-100 dark:bg-gray-900"
//             aria-label="Embedded video"
//           >
//             <iframe
//               src={`https://www.youtube.com/embed/${vid}`}
//               title="Explore video"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//               loading="lazy"
//               className="w-full h-full"
//             />
//           </div>
//         ))}
//       </div>
//     ),
//     People: (
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {USER_AVATARS.map((id) => (
//           <article
//             key={id}
//             tabIndex={0}
//             className="flex items-center gap-5 p-5 bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-md hover:shadow-lg transition cursor-pointer"
//             aria-label={`User profile @user_${id} with follow button`}
//           >
//             <img
//               src={`https://i.pravatar.cc/100?img=${id}`}
//               alt={`User avatar @user_${id}`}
//               className="w-14 h-14 rounded-full object-cover ring-2 ring-blue-400 dark:ring-blue-600"
//               draggable={false}
//             />
//             <div className="flex-1">
//               <h4 className="text-lg font-semibold text-gray-900 dark:text-white leading-snug truncate">
//                 @user_{id}
//               </h4>
//               <p className="text-sm text-gray-500 dark:text-gray-400 tracking-wide">
//                 Suggested for you
//               </p>
//             </div>
//             <button
//               onClick={(e) => {
//                 e.stopPropagation();
//                 alert(`Followed user_${id}`);
//               }}
//               className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2 rounded-full shadow-md transition focus:outline-none focus:ring-2 focus:ring-blue-400"
//               aria-label={`Follow user user_${id}`}
//             >
//               Follow
//             </button>
//           </article>
//         ))}
//       </div>
//     ),
//   };

//   return (
//     <main className="min-h-screen flex flex-col bg-gradient-to-tr from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 font-sans antialiased selection:bg-blue-300 selection:text-blue-900">
//       {/* HEADER */}
//       <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700 backdrop-blur-md shadow-md px-8 md:px-10 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-5 md:gap-0">
//         <div className="flex items-center gap-9 md:gap-6 text-2xl font-bold text-blue-700 dark:text-blue-400 tracking-tight select-none">
//           <img
//             src="/connectly-logo.jpg.jpeg"
//             alt="Connectly"
//             className="w-9 h-10 object-contain rounded-lg"
//           />
//           Explore
//         </div>
//         <div className="flex items-center gap-5 w-full md:w-auto">
//           <input
//             type="search"
//             placeholder="Search topics, photos, videos, people..."
//             aria-label="Search explore content"
//             className="flex-grow md:flex-grow-0 md:w-96 rounded-full border border-gray-300 dark:border-gray-600 px-5 py-3 text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-40 transition"
//           />
//           <button
//             onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//             aria-label="Toggle dark mode"
//             className="rounded-full bg-gray-200 dark:bg-gray-700 px-6 py-2 text-gray-800 dark:text-gray-200 font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-blue-500 transition"
//           >
//             {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
//           </button>
//         </div>
//       </header>

//       {/* TAB NAVIGATION */}
//       <nav
//         className="sticky top-[10px] z-90 bg-white dark:bg-gray-900 border-b border-gray-300 dark:border-gray-400 px-7 md:px-10 shadow-sm"
//         aria-label="Explore tabs"
//       >
//         <div className="flex gap-10 font-semibold text-blue-700 dark:text-blue-400 text-lg select-none">
//           {(["Trending", "Photos", "Videos", "People"] as const).map((tab) => {
//             const isActive = activeTab === tab;
//             return (
//               <button
//                 key={tab}
//                 type="button"
//                 onClick={() => setActiveTab(tab)}
//                 aria-current={isActive ? "page" : undefined}
//                 className={`relative pb-3 border-b-4 ${
//                   isActive
//                     ? "border-blue-600 text-blue-800 dark:text-blue-300 font-bold"
//                     : "border-transparent hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-200"
//                 } transition-colors`}
//               >
//                 {tab}
//               </button>
//             );
//           })}
//         </div>
//       </nav>

//       {/* CONTENT */}
//       <section className="flex-grow max-w-7xl mx-auto px-8 md:px-20 py-12">
//         {exploreContent[activeTab]}
//       </section>

//       {/* FOOTER */}
//       <footer className="border-t border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 py-7 text-center text-xs md:text-sm text-gray-600 dark:text-gray-400 select-none">
//         © {new Date().getFullYear()} Connectly Inc. ·{" "}
//         <Link href="#" className="hover:underline">
//           Privacy
//         </Link>{" "}
//         ·{" "}
//         <Link href="#" className="hover:underline">
//           Terms
//         </Link>
//       </footer>
//     </main>
//   );
// }


"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

// Sample Posts Data
const MOCK_POSTS = [
  {
    id: 1,
    title: "Welcome to Connectly!",
    content: "Let’s shape the future of online communities. Share your vision and feedback with us.",
    author: "jane_doe",
    authorAvatar: "https://i.pravatar.cc/100?img=67",
    upvotes: 42,
    commentsCount: 12,
    date: "1 hour ago",
    isOwner: false,
  },
  {
    id: 2,
    title: "Dark mode or Light mode?",
    content: "Which theme do you prefer? Vote and discuss! I think dark mode is easier on the eyes.",
    author: "johnsmith",
    authorAvatar: "https://i.pravatar.cc/100?img=11",
    upvotes: 65,
    commentsCount: 22,
    date: "3 hours ago",
    isOwner: true,
  },
  {
    id: 3,
    title: "Share your favorite AI tool",
    content: "There are so many out there: ChatGPT, Copilot, Perplexity... What’s changed your workflow?",
    author: "alicew",
    authorAvatar: "https://i.pravatar.cc/100?img=45",
    upvotes: 18,
    commentsCount: 6,
    date: "5 hours ago",
    isOwner: false,
  },
  // ...add more posts as needed
];

const MOCK_TOP_POSTS = [
  { id: 2, title: "Dark mode or Light mode?", upvotes: 65, commentsCount: 22 },
  { id: 1, title: "Welcome to Connectly!", upvotes: 42, commentsCount: 12 },
  { id: 3, title: "Share your favorite AI tool", upvotes: 18, commentsCount: 6 },
];

export default function ExplorePage() {
  const { theme, setTheme } = useTheme();
  const [sortBy, setSortBy] = useState("Top");

  // For demo: just sort by upvotes or by newest (descending id)
  const posts = [...MOCK_POSTS].sort((a, b) =>
    sortBy === "Top" ? b.upvotes - a.upvotes : b.id - a.id
  );

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col font-sans antialiased text-gray-900 dark:text-gray-100">
      {/* HEADER */}
      <header className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700 z-40 shadow-md px-8 md:px-10 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <div className="flex items-center gap-6 text-2xl font-bold text-blue-700 dark:text-blue-400 select-none">
          <img
            src="/connectly-logo.jpg.jpeg"
            alt="Connectly"
            className="w-9 h-10 object-contain rounded-lg"
          />
          Explore
        </div>
        <div className="flex items-center gap-5 w-full md:w-auto">
          <input
            type="search"
            placeholder="Search topics, photos, people..."
            aria-label="Search explore content"
            className="flex-grow md:flex-grow-0 md:w-96 rounded-full border border-gray-300 dark:border-gray-600 px-5 py-3 text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-40 transition"
          />
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle dark mode"
            className="rounded-full bg-gray-200 dark:bg-gray-700 px-6 py-2 text-gray-800 dark:text-gray-200 font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-blue-500 transition"
          >
            {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </header>

      {/* MAIN LAYOUT: Feed and Sidebar */}
      <div className="flex justify-center w-full flex-1 px-2 sm:px-8 py-8 gap-7 max-w-7xl mx-auto">
        {/* Main Feed */}
        <section className="flex-1 flex flex-col gap-6 min-w-0">
          {/* Header bar: New Post + Sort */}
          <div className="flex items-center justify-between mb-3">
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-full shadow hover:bg-blue-700 transition text-sm font-bold"
            >
              + NEW POST
            </button>
            <div>
              <label className="mr-2 text-gray-700 dark:text-gray-200 text-sm">Sort by:</label>
              <select
                className="border border-gray-300 dark:border-gray-700 py-1 px-3 rounded-full bg-white dark:bg-gray-900 text-sm"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="Top">Top</option>
                <option value="Newest">Newest</option>
              </select>
            </div>
          </div>

          {/* Feed-Posts Loop */}
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm p-5 hover:shadow transition"
              tabIndex={0}
            >
              {/* Upvotes */}
              <div className="flex flex-col items-center pt-1 min-w-[44px]">
                <button
                  className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-lg w-9 h-9 text-lg font-bold flex items-center justify-center mb-1 hover:ring-2 hover:ring-blue-300"
                  title="Upvote"
                  aria-label="Upvote"
                >
                  👍
                </button>
                <div className="font-semibold text-blue-700 dark:text-blue-300">{post.upvotes}</div>
              </div>
              {/* Post Card Body */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  <img
                    src={post.authorAvatar}
                    className="w-7 h-7 rounded-full object-cover ring-2 ring-blue-200 dark:ring-blue-700"
                    alt={post.author}
                  />
                  <span className="font-semibold text-gray-800 dark:text-gray-100 text-sm">@{post.author}</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{post.date}</span>
                  {post.isOwner && (
                    <>
                      <button className="ml-2 text-blue-500 hover:underline" title="Edit">
                        ✏️
                      </button>
                      <button className="ml-1 text-red-500 hover:underline" title="Delete">
                        🗑️
                      </button>
                    </>
                  )}
                </div>
                <h3 className="text-lg font-bold mb-1 truncate">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2 line-clamp-2">{post.content}</p>
                <div className="flex gap-8 text-sm text-gray-400 dark:text-gray-500 mt-1">
                  <span>💬 {post.commentsCount} comments</span>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Sidebar: Top Posts */}
        <aside className="hidden md:block w-80 shrink-0">
          <div className="bg-white dark:bg-gray-900 shadow-lg rounded-xl p-6 border border-gray-200 dark:border-gray-800">
            <h4 className="font-bold text-lg mb-4 text-blue-700 dark:text-blue-400">Top Posts</h4>
            <div className="flex flex-col gap-4">
              {MOCK_TOP_POSTS.map((post) => (
                <div
                  key={post.id}
                  className="flex gap-3 items-start bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 hover:shadow transition"
                >
                  <div className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-bold rounded-lg w-7 h-7 flex items-center justify-center mt-0.5 text-sm">
                    {post.upvotes}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="font-medium truncate text-sm mb-1">{post.title}</h5>
                    <div className="text-xs text-gray-400">💬 {post.commentsCount} comments</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 py-7 text-center text-xs md:text-sm text-gray-600 dark:text-gray-400 select-none">
        © {new Date().getFullYear()} Connectly Inc. ·{" "}
        <Link href="#" className="hover:underline">Privacy</Link>
        {" · "}
        <Link href="#" className="hover:underline">Terms</Link>
      </footer>
    </main>
  );
}
