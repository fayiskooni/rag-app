"use client"

import ChatInput from "../../components/chatInput";

const ChatPage = () => {

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Blue glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-225 h-150 rounded-full 
      bg-blue-900/40 blur-[150px]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen">
        <h1 className="text-white text-4xl mb-10">Hi Fayis, what&apos;s the move?</h1>
        <ChatInput/>
      </div>
    </div>
  );
};

export default ChatPage;
