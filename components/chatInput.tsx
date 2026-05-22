"use client";

import { Plus, Send } from "lucide-react";
import { Button } from "./ui/button";

const ChatInput = () => {
  return (
    <div className="flex gap-0.5 text-white w-[700] bg-[#1e1f20] p-3 rounded-4xl">
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full hover:bg-[#2d2d2d]"
      >
        <Plus className="w-8 h-8 text-gray-200" />
      </Button>

      <input
        placeholder="text anything.."
        className="flex-1 bg-transparent px-4 text-xl text-white outline-none placeholder:text-gray-400"
      />

      <Button
        variant="ghost"
        size="icon"
        className="rounded-full hover:bg-[#2d2d2d]"
      >
        <Send className="w-8 h-8 text-gray-200" />
      </Button>
    </div>
  );
};

export default ChatInput;
