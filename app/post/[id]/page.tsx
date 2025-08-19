"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  Smile,
  MoreHorizontal,
} from "lucide-react";

export default function PostDetailPage() {
  const { id } = useParams();

  const [comments, setComments] = useState([
    { id: 1, user: "rahul_ui", text: "🔥🔥 love this layout!" },
    { id: 2, user: "alex_c", text: "This design is too good!" },
    { id: 3, user: "designqueen", text: "UI goals 💯" },
  ]);
  const [newComment, setNewComment] = useState("");

  const handleComment = () => {
    if (newComment.trim()) {
      setComments([
        ...comments,
        { id: comments.length + 1, user: "you", text: newComment },
      ]);
      setNewComment("");
    }
  };

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-10">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md md:flex">
        {/* Left: Post Media */}
        <div className="md:w-1/2 border-r dark:border-gray-700 bg-black">
          <img
            src="https://source.unsplash.com/random/600x600?tech"
            alt="Post media"
            className="object-cover w-full h-full max-h-[600px] rounded-l-xl"
          />
        </div>

        {/* Right: Post Details */}
        <div className="md:w-1/2 flex flex-col justify-between p-6 space-y-4">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img
                src="https://i.pravatar.cc/100?img=32"
                className="w-9 h-9 rounded-full"
                alt="User"
              />
              <p className="font-semibold text-sm">@divya_dev</p>
            </div>
            <MoreHorizontal className="w-5 h-5 text-gray-500 cursor-pointer" />
          </div>

          {/* Caption */}
          <p className="text-sm mt-2">
            🚀 Just launched the new profile layout for Connectly. Simple, clean, and modern.
          </p>

          {/* Comments Scrollable */}
          <div className="flex-1 overflow-y-auto max-h-60 mt-4 space-y-3 pr-2">
            {comments.map((comment) => (
              <div key={comment.id} className="text-sm">
                <span className="font-semibold mr-2">@{comment.user}</span>
                {comment.text}
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex justify-between items-center mt-4">
            <div className="flex gap-4 text-gray-600 dark:text-gray-300">
              <Heart className="cursor-pointer hover:text-red-500" />
              <MessageCircle className="cursor-pointer hover:text-blue-500" />
              <Send className="cursor-pointer hover:text-green-500" />
            </div>
            <Bookmark className="cursor-pointer hover:text-yellow-500" />
          </div>

          {/* Comment Input */}
          <div className="flex items-center gap-3 border-t pt-3 dark:border-gray-700">
            <Smile className="text-gray-400" />
            <input
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              className="flex-1 bg-transparent outline-none text-sm"
            />
            <button
              onClick={handleComment}
              className="text-blue-600 text-sm font-semibold hover:underline"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}