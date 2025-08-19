// "use client";

// import {
//   Smile,
//   Paperclip,
//   Send,
//   CheckCheck,
//   Phone,
//   Video,
//   Info,
// } from "lucide-react";
// import { useState, useRef, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Badge } from "@/components/ui/badge";
// import { ScrollArea } from "@/components/ui/scroll-area";

// const dummyConversations = [
//   {
//     id: 1,
//     name: "divya_dev",
//     avatar: "https://i.pravatar.cc/100?img=3",
//     lastMessage: "Let’s finalize the UI!",
//     time: "2m ago",
//     messages: [
//       { from: "them", text: "Hey! Ready to review the message layout?" },
//       { from: "me", text: "Yes! Let’s finalize the UI!" }
//     ]
//   },
//   {
//     id: 2,
//     name: "rahul_ui",
//     avatar: "https://i.pravatar.cc/100?img=7",
//     lastMessage: "See you tomorrow!",
//     time: "5h ago",
//     messages: [
//       { from: "them", text: "See you tomorrow!" },
//       { from: "me", text: "Sure, take care!" }
//     ]
//   }
// ];

// export default function MessagesPage() {
//   const [selectedId, setSelectedId] = useState(1);
//   const [input, setInput] = useState("");
//   const [isTyping, setIsTyping] = useState(false);
//   const messagesEndRef = useRef<HTMLDivElement | null>(null);

//   const selectedChat = dummyConversations.find((c) => c.id === selectedId);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [selectedChat?.messages]);

//   const handleSend = () => {
//     if (input.trim()) {
//       selectedChat?.messages.push({ from: "me", text: input });
//       setInput("");
//       setIsTyping(false);
//     }
//   };

//   return (
//     <main className="grid grid-cols-1 md:grid-cols-[1fr_2fr] h-screen font-sans bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      
//       {/* Sidebar */}
//       <aside className="border-r border-gray-200 dark:border-gray-700 overflow-y-auto">
//         <div className="px-4 py-4 font-semibold text-lg border-b dark:border-gray-700">Messages</div>
//         <input
//           type="text"
//           placeholder="Search users"
//           className="w-full px-4 py-2 text-sm border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
//         />
//         <ul>
//           {dummyConversations.map((chat) => (
//             <li
//               key={chat.id}
//               onClick={() => setSelectedId(chat.id)}
//               className={`flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 ${
//                 selectedId === chat.id ? "bg-gray-100 dark:bg-gray-800" : ""
//               }`}
//             >
//               <img src={chat.avatar} className="w-10 h-10 rounded-full" />
//               <div className="flex-1">
//                 <p className="font-medium text-sm">@{chat.name}</p>
//                 <p className="text-xs text-gray-500 truncate">{chat.lastMessage}</p>
//               </div>
//               <span className="text-xs text-gray-400">{chat.time}</span>
//             </li>
//           ))}
//         </ul>
//       </aside> 

//       {/* Chat Section */}
//       <section className="flex flex-col h-screen">
//         {/* <header className="p-4 border-b dark:border-gray-700 flex items-center gap-3">
//           <img src={selectedChat?.avatar} className="w-10 h-10 rounded-full" />
//           <div>
//             <p className="font-medium text-sm">@{selectedChat?.name}</p>
//             <p className="text-xs text-gray-400">Active now</p>
//           </div>
//         </header> */}

//         <header className="p-4 border-b dark:border-gray-700 flex justify-between items-center">
//   <div className="flex items-center gap-3">
//     <img src={selectedChat?.avatar} className="w-10 h-10 rounded-full" />
//     <div>
//       <p className="font-medium text-sm">@{selectedChat?.name}</p>
//       <p className="text-xs text-gray-400">Active now</p>
//     </div>
//   </div>
  
//  <div className="flex items-center gap-2">
//             <Button variant="ghost" size="icon" onClick={() => alert("Audio call coming soon!")}>
//               <Phone className="w-5 h-5" />
//             </Button>
//             <Button variant="ghost" size="icon" onClick={() => alert("Video call coming soon!")}>
//               <Video className="w-5 h-5" />
//             </Button>
//             <Button variant="ghost" size="icon" onClick={() => alert("Info panel coming soon!")}>
//               <Info className="w-5 h-5" />
//             </Button>
//           </div>
// </header>


//         <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-900">
//           {selectedChat?.messages.map((msg, i) => (
//               <div key={i} className={`flex ${msg.from === "me" ? "justify-end" : "justify-start"}`}>
//               <div
//                 className={`max-w-xs px-4 py-2 rounded-2xl text-sm shadow ${
//                   msg.from === "me"
//                     ? "bg-blue-600 text-white rounded-br-none"
//                     : "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-bl-none"
//                 }`}
//               >
//                 <p>{msg.text}</p>
//                 {msg.from === "me" && (
//                   <span className="text-[10px] flex justify-end mt-1 text-white opacity-70">
//                     <CheckCheck size={14} />
//                   </span>
//                 )}
//               </div>
//             </div>
//           ))}
//           {isTyping && (
//             <div className="text-xs italic text-gray-400 dark:text-gray-500">Typing...</div>
//           )}
//           <div ref={messagesEndRef} />
//         </div>

//         {/* Input */}
//         <footer className="p-4 border-t dark:border-gray-700 flex gap-3 bg-white dark:bg-gray-800">
//           <button className="text-gray-500 hover:text-blue-600 dark:text-gray-400">
//             <Smile size={20} />
//           </button>

//           <input
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder="Type a message..."
//             onKeyDown={(e) => {
//               setIsTyping(true);
//               if (e.key === "Enter") {
//                 e.preventDefault();
//                 handleSend();
//               }
//             }}
//             className="flex-1 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm focus:outline-none"
//           />

//           <label className="cursor-pointer text-gray-500 hover:text-blue-600 dark:text-gray-400">
//             <Paperclip size={20} />
//             <input type="file" hidden />
//           </label>

//           <button
//             onClick={handleSend}
//             className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 text-sm"
//           >
//             <Send size={16} />
//           </button>
//         </footer>
//       </section>
//     </main>
//   );
// }





"use client";

import {
  Smile,
  Paperclip,
  Send,
  CheckCheck,
  Phone,
  Video,
  Info,
  Plus,
  Search,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const dummyConversations = [
  {
    id: 1,
    name: "divya_dev",
    avatar: "https://i.pravatar.cc/100?img=3",
    lastMessage: "Let’s finalize the UI!",
    time: "2m ago",
    online: true,
    unread: 1,
    messages: [
      { from: "them", text: "Hey! Ready to review the message layout?", time: "2:28 PM", read: true },
      { from: "me", text: "Yes! Let’s finalize the UI!", time: "2:29 PM", read: true },
      { from: "them", text: "Great! Let's proceed to testing.", time: "2:30 PM", read: false },
      { from: "me", text: "Absolutely. I'll handle the regression tests.", time: "2:31 PM", read: false },
    ],
  },
  {
    id: 2,
    name: "rahul_ui",
    avatar: "https://i.pravatar.cc/100?img=7",
    lastMessage: "See you tomorrow!",
    time: "5h ago",
    online: false,
    unread: 0,
    messages: [
      { from: "them", text: "See you tomorrow!", time: "9:00 AM", read: true },
      { from: "me", text: "Sure, take care!", time: "9:05 AM", read: true },
      { from: "them", text: "Don't forget the meeting at 10.", time: "8:50 AM", read: true },
    ],
  },
  {
    id: 3,
    name: "maria_dev",
    avatar: "https://i.pravatar.cc/100?img=12",
    lastMessage: "I'll send over the docs.",
    time: "10m ago",
    online: true,
    unread: 2,
    messages: [
      { from: "them", text: "Can you review the latest API docs?", time: "10:00 AM", read: false },
      { from: "me", text: "Sure, will do by EOD.", time: "10:05 AM", read: false },
    ],
  },
  {
    id: 4,
    name: "alex_k",
    avatar: "https://i.pravatar.cc/100?img=5",
    lastMessage: "Thanks for your help!",
    time: "1d ago",
    online: false,
    unread: 0,
    messages: [
      { from: "them", text: "Thanks for your help!", time: "Yesterday 3:30 PM", read: true },
      { from: "me", text: "Anytime, happy to assist!", time: "Yesterday 3:35 PM", read: true },
      { from: "them", text: "Will catch up soon.", time: "Yesterday 3:40 PM", read: true },
    ],
  },
  {
    id: 5,
    name: "lisa_w",
    avatar: "https://i.pravatar.cc/100?img=15",
    lastMessage: "Lunch at 1?",
    time: "30m ago",
    online: true,
    unread: 0,
    messages: [
      { from: "them", text: "Lunch at 1?", time: "12:30 PM", read: true },
      { from: "me", text: "Perfect, see you then.", time: "12:32 PM", read: true },
    ],
  },
  {
    id: 6,
    name: "john_doe",
    avatar: "https://i.pravatar.cc/100?img=21",
    lastMessage: "Check out this PR.",
    time: "Today 9:00 AM",
    online: false,
    unread: 4,
    messages: [
      { from: "them", text: "Check out this PR.", time: "9:00 AM", read: false },
      { from: "me", text: "Will do shortly.", time: "9:05 AM", read: false },
      { from: "them", text: "Thanks!", time: "9:06 AM", read: false },
    ],
  },
  {
    id: 7,
    name: "emma_stone",
    avatar: "https://i.pravatar.cc/100?img=31",
    lastMessage: "Meeting reschedule",
    time: "Yesterday 5:45 PM",
    online: true,
    unread: 0,
    messages: [
      { from: "them", text: "Meeting reschedule to Thursday.", time: "Yesterday 5:45 PM", read: true },
      { from: "me", text: "Got it, thanks for letting me know!", time: "Yesterday 5:50 PM", read: true },
    ],
  },
  {
    id: 8,
    name: "tom_h",
    avatar: "https://i.pravatar.cc/100?img=48",
    lastMessage: "Good job on the launch!",
    time: "3h ago",
    online: true,
    unread: 0,
    messages: [
      { from: "them", text: "Good job on the launch!", time: "3:00 PM", read: true },
      { from: "me", text: "Thanks! Couldn't have done it without the team.", time: "3:02 PM", read: true },
    ],
  },
];

export default function MessagesPage() {
  const [selectedId, setSelectedId] = useState(dummyConversations[0].id);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const selectedChat = dummyConversations.find((chat) => chat.id === selectedId);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [selectedChat?.messages]);

  const typingTimeout = useRef<NodeJS.Timeout | null>(null);

  const debounceTyping = () => {
    if (typingTimeout.current) clearTimeout(typingTimeout.current);
    typingTimeout.current = setTimeout(() => setIsTyping(false), 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setIsTyping(true);
    debounceTyping();
  };

  const handleSend = () => {
    if (input.trim() && selectedChat) {
      selectedChat.messages.push({
        from: "me",
        text: input.trim(),
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        read: false,
      });
      setInput("");
      setIsTyping(false);
      setSelectedId(selectedChat.id); // force re-render
    }
  };

  return (
    <main className="grid grid-cols-1 md:grid-cols-[1fr_2fr] h-screen font-sans bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Conversations Sidebar */}
      <aside className="border-r border-gray-200 dark:border-gray-700 overflow-y-auto flex flex-col h-screen">
        {/* Header */}
        <div className="px-4 py-4 font-semibold  text-blue-600  dark:border-gray-700  flex items-center justify-between">
  Messages
  <Button variant="ghost" size="icon" onClick={() => alert("New conversation coming soon!")}>
    <Plus className="w-5 h-5" />
  </Button>
</div>

        {/* Search input */}
        <div className="p-1 relative w-full max-w-lg">
  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
  <Input className="pl-12 w-full" placeholder="Search conversations" />
</div>

        {/* List of conversations */}
        <ScrollArea className="flex-1">
          <ul className="p-2 space-y-1">
            {dummyConversations.map((chat) => (
              <li
                key={chat.id}
                onClick={() => setSelectedId(chat.id)}
                className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors select-none ${
                  selectedId === chat.id
                    ? "bg-muted dark:bg-gray-800"
                    : "hover:bg-muted/50 dark:hover:bg-gray-700"
                }`}
              >
                <div className="relative">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={chat.avatar} />
                    <AvatarFallback>{chat.name.charAt(0).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  {chat.online && (
                    <span className="absolute bottom-0 right-0 block w-4 h-4 bg-green-500 border-2 border-background rounded-full" />
                  )}
                </div>
                <div className="flex-1 min-w-0 overflow-hidden">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium text-sm truncate">{chat.name}</h3>
                    <time className="text-xs text-muted-foreground flex-shrink-0 ml-2">{chat.time}</time>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-muted-foreground truncate">{chat.lastMessage}</p>
                    {chat.unread > 0 && (
                      <Badge variant="destructive" className="w-5 h-5 text-xs flex items-center justify-center p-0">
                        {chat.unread}
                      </Badge>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </ScrollArea>
      </aside>

      {/* Chat Section */}
      <section className="flex flex-col h-screen">
        {/* Chat header */}
        <header className="p-4 border-b border-border flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Avatar className="w-10 h-10">
              <AvatarImage src={selectedChat?.avatar} />
              <AvatarFallback>{selectedChat?.name.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium text-sm">@{selectedChat?.name}</p>
              <p className="text-xs text-gray-400">Active now</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => alert("Audio call coming soon!")}>
              <Phone className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => alert("Video call coming soon!")}>
              <Video className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => alert("Info panel coming soon!")}>
              <Info className="w-5 h-5" />
            </Button>
          </div>
        </header>

        {/* Messages list */}
        <ScrollArea className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-900">
          {selectedChat?.messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.from === "me" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-xs px-4 py-2 rounded-2xl text-sm shadow ${
                  msg.from === "me"
                    ? "bg-blue-600 text-white rounded-br-none"
                    : "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-bl-none"
                }`}
              >
                <p>{msg.text}</p>
                {msg.from === "me" && (
                  <span className="text-[10px] flex justify-end mt-1 text-white opacity-70">
                    <CheckCheck size={14} />
                  </span>
                )}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="text-xs italic text-gray-400 dark:text-gray-500">Typing...</div>
          )}
          <div ref={messagesEndRef} />
        </ScrollArea>

        {/* Message Input */}
        <footer className="p-4 border-t border-border flex gap-3 bg-white dark:bg-gray-800">
          <button
            className="text-gray-500 hover:text-blue-600 dark:text-gray-400"
            onClick={() => alert("Emoji picker coming soon!")}
          >
            <Smile size={20} />
          </button>

          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Type a message..."
            onKeyDown={(e) => {
              setIsTyping(true);
              if (e.key === "Enter") {
                e.preventDefault();
                handleSend();
              }
            }}
            className="flex-1 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm focus:outline-none"
          />

          <label className="cursor-pointer text-gray-500 hover:text-blue-600 dark:text-gray-400">
            <Paperclip size={20} />
            <input type="file" hidden />
          </label>

          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 text-sm"
            aria-label="Send message"
          >
            <Send size={16} />
          </button>
        </footer>
      </section>
    </main>
  );

//   function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
//   setInput(e.target.value);
//   setIsTyping(true);
//   debounceTyping();
// }
}

