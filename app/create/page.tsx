"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Upload, X, Eye, EyeOff, MapPin } from "lucide-react";

export default function CreatePostPage() {
  const router = useRouter();
  const [caption, setCaption] = useState("");
  const [media, setMedia] = useState<File | null>(null);
  const [visibility, setVisibility] = useState("public");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setMedia(file);
  };

  const handlePost = () => {
    if (!caption.trim() && !media) {
      alert("Add caption or media to post.");
      return;
    }

    // Simulate post logic (real app will call API)
    setTimeout(() => {
      alert("Post created successfully!");
      router.push("/feed"); // Redirect to feed
    }, 800);
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 px-4 py-10 text-gray-900 dark:text-white">
      <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4">Create a New Post</h2>

        {/* Media Upload */}
        <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 cursor-pointer hover:border-blue-500 transition">
          {media ? (
            <div className="relative">
              <img src={URL.createObjectURL(media)} className="w-full rounded-lg" alt="preview" />
              <button onClick={() => setMedia(null)} className="absolute top-2 right-2 bg-white dark:bg-gray-700 p-1 rounded-full">
                <X size={16} />
              </button>
            </div>
          ) : (
            <>
              <Upload className="w-8 h-8 mb-2 text-gray-500" />
              <p className="text-sm text-gray-500">Click to upload image/video</p>
              <input type="file" hidden accept="image/,video/" onChange={handleFileChange} />
            </>
          )}
        </label>

        {/* Caption */}
        <textarea
          placeholder="Write a caption..."
          className="w-full mt-4 p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-sm"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          rows={4}
        />

        {/* Visibility */}
        <div className="flex items-center gap-6 mt-4 text-sm">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="visibility"
              checked={visibility === "public"}
              onChange={() => setVisibility("public")}
            />
            <Eye size={16} /> Public
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="visibility"
              checked={visibility === "private"}
              onChange={() => setVisibility("private")}
            />
            <EyeOff size={16} /> Private
          </label>
        </div>

        {/* Location (Optional) */}
        <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
          <MapPin size={16} />
          <input
            type="text"
            placeholder="Add location..."
            className="bg-transparent border-b border-gray-300 dark:border-gray-600 focus:outline-none flex-1"
          />
        </div>

        {/* Post Button */}
        <button
          onClick={handlePost}
          className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 rounded-lg"
        >
          Post
        </button>
      </div>
    </main>
  );
}


// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { Upload, X, Eye, EyeOff, MapPin } from "lucide-react";

// export default function CreatePostPage() {
//   const router = useRouter();
//   const [caption, setCaption] = useState("");
//   const [media, setMedia] = useState<File | null>(null);
//   const [visibility, setVisibility] = useState<"public" | "private">("public");
//   const [location, setLocation] = useState("");

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) setMedia(file);
//   };

//   const handlePost = () => {
//     if (!caption.trim() && !media) {
//       alert("Please add a caption or upload media before posting.");
//       return;
//     }

//     // Simulate post creation
//     setTimeout(() => {
//       alert("✅ Post created successfully!");
//       router.push("/feed");
//     }, 800);
//   };

//   return (
//     <main className="min-h-screen bg-[#f4f6f8] dark:bg-gray-900 text-gray-900 dark:text-white">
//       {/* Header */}
//       <header className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 px-6 py-4 flex items-center justify-between">
//         <h1 className="text-lg font-semibold">Create a New Post</h1>
//         <button
//           onClick={() => router.back()}
//           className="text-sm text-gray-500 hover:text-gray-800 dark:hover:text-white transition"
//         >
//           Cancel
//         </button>
//       </header>

//       {/* Form Container */}
//       <section className="max-w-xl mx-auto px-6 py-8">
//         <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 space-y-6">

//           {/* 1. Media Upload */}
//           <div>
//             <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
//               Upload Media
//             </label>
//             <div
//               className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 cursor-pointer hover:border-blue-500 hover:bg-blue-50/30 dark:hover:bg-gray-700 transition"
//             >
//               {media ? (
//                 <div className="relative w-full">
//                   <img
//                     src={URL.createObjectURL(media)}
//                     alt="Preview"
//                     className="w-full rounded-lg object-cover"
//                   />
//                   <button
//                     onClick={() => setMedia(null)}
//                     type="button"
//                     className="absolute top-2 right-2 bg-white dark:bg-gray-700 p-1 rounded-full shadow hover:scale-105 transition"
//                   >
//                     <X size={16} />
//                   </button>
//                 </div>
//               ) : (
//                 <>
//                   <Upload className="w-8 h-8 mb-2 text-gray-500" />
//                   <p className="text-xs text-gray-500 text-center">
//                     Click to upload image or video
//                   </p>
//                   <input
//                     type="file"
//                     hidden
//                     accept="image/*,video/*"
//                     onChange={handleFileChange}
//                   />
//                 </>
//               )}
//             </div>
//           </div>

//           {/* 2. Caption */}
//           <div>
//             <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
//               Caption
//             </label>
//             <textarea
//               placeholder="What's on your mind?"
//               className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-sm focus:ring-2 focus:ring-blue-500 outline-none resize-none"
//               value={caption}
//               onChange={(e) => setCaption(e.target.value)}
//               rows={4}
//             />
//           </div>

//           {/* 3. Visibility */}
//           <div>
//             <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
//               Post Visibility
//             </label>
//             <div className="flex items-center gap-6">
//               <label className="flex items-center gap-2 cursor-pointer">
//                 <input
//                   type="radio"
//                   name="visibility"
//                   checked={visibility === "public"}
//                   onChange={() => setVisibility("public")}
//                 />
//                 <Eye size={16} /> Public
//               </label>
//               <label className="flex items-center gap-2 cursor-pointer">
//                 <input
//                   type="radio"
//                   name="visibility"
//                   checked={visibility === "private"}
//                   onChange={() => setVisibility("private")}
//                 />
//                 <EyeOff size={16} /> Private
//               </label>
//             </div>
//           </div>

//           {/* 4. Location */}
//           <div>
//             <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
//               Location (Optional)
//             </label>
//             <div className="flex items-center gap-2">
//               <MapPin size={16} className="text-gray-500" />
//               <input
//                 type="text"
//                 value={location}
//                 onChange={(e) => setLocation(e.target.value)}
//                 placeholder="Add location..."
//                 className="bg-transparent border-b border-gray-300 dark:border-gray-600 flex-1 focus:outline-none text-sm py-1"
//               />
//             </div>
//           </div>

//           {/* 5. Post Button */}
//           <div>
//             <button
//               onClick={handlePost}
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm py-2.5 rounded-lg transition shadow-sm hover:shadow"
//             >
//               Post
//             </button>
//           </div>

//         </div>
//       </section>
//     </main>
//   );
// }
