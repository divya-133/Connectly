"use client";

import { useState } from "react";
import { BarChart, Eye, Heart, Users, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function AnalyticsPage() {
  const [activeTab, setActiveTab] = useState("Overview");

  const insights = {
    impressions: 48213,
    likes: 12980,
    followers: 2187,
    growth: "12.3%",
    topPosts: [
      {
        id: 1,
        image: "https://source.unsplash.com/random/300x200?1",
        caption: "🔥 Just launched the new UI design!",
        likes: 1200,
        comments: 134,
      },
      {
        id: 2,
        image: "https://source.unsplash.com/random/300x200?2",
        caption: "📸 Behind the scenes of Connectly",
        likes: 980,
        comments: 92,
      },
      {
        id: 3,
        image: "https://source.unsplash.com/random/300x200?3",
        caption: "💬 Engaging with the community",
        likes: 865,
        comments: 101,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f5f7fa] px-4 py-10 text-gray-900 dark:text-white font-sans">
      {/* Header */}
      <section className="max-w-6xl mx-auto mb-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-blue-600">Analytics Dashboard</h1>
          <Link href="/feed" className="text-sm text-blue-500 hover:underline">
            ← Back to Feed
          </Link>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 text-sm font-medium border-b pb-2 text-gray-600">
          {["Overview", "Top Posts", "Followers"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-1 ${
                activeTab === tab ? "text-blue-600 border-b-2 border-blue-600" : "hover:text-blue-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto space-y-10">
        {activeTab === "Overview" && (
          <>
            {/* Metrics Cards */}
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border flex flex-col items-start">
                <Eye className="text-blue-600 mb-2" />
                <p className="text-sm text-gray-500">Total Impressions</p>
                <h2 className="text-xl font-semibold mt-1">{insights.impressions.toLocaleString()}</h2>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border flex flex-col items-start">
                <Heart className="text-red-500 mb-2" />
                <p className="text-sm text-gray-500">Total Likes</p>
                <h2 className="text-xl font-semibold mt-1">{insights.likes.toLocaleString()}</h2>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border flex flex-col items-start">
                <Users className="text-green-500 mb-2" />
                <p className="text-sm text-gray-500">Followers</p>
                <h2 className="text-xl font-semibold mt-1">{insights.followers.toLocaleString()}</h2>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border flex flex-col items-start">
                <TrendingUp className="text-purple-600 mb-2" />
                <p className="text-sm text-gray-500">Growth Rate</p>
                <h2 className="text-xl font-semibold mt-1">{insights.growth}</h2>
              </div>
            </div>

            {/* Placeholder Chart */}
            <div className="mt-10 bg-white p-6 rounded-xl shadow-sm border">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Engagement Over Time</h3>
                <BarChart className="w-5 h-5 text-gray-400" />
              </div>
              <div className="h-40 bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 rounded-md animate-pulse opacity-50 flex items-center justify-center text-sm text-gray-500">
                📊 Chart Placeholder (integrate Recharts or Chart.js)
              </div>
            </div>
          </>
        )}

        {activeTab === "Top Posts" && (
          <div className="grid md:grid-cols-3 gap-6">
            {insights.topPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-xl overflow-hidden border shadow-sm">
                <img src={post.image} alt="Top post" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <p className="text-sm text-gray-700 mb-2">{post.caption}</p>
                  <div className="flex gap-6 text-xs text-gray-500">
                    <span>❤️ {post.likes}</span>
                    <span>💬 {post.comments}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Followers" && (
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Follower Breakdown</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>🌍 45% from India</li>
              <li>🇺🇸 30% from United States</li>
              <li>🇬🇧 10% from United Kingdom</li>
              <li>📱 70% use mobile</li>
              <li>🧑‍💻 30% active weekly</li>
            </ul>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 mt-16 py-6 border-t">
        &copy; {new Date().getFullYear()} Connectly · Built for Creators · Analytics powered by 💡
      </footer>
    </main>
  );
}