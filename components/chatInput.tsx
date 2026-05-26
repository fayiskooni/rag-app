"use client";

import { useState } from "react";
import { Plus, Send } from "lucide-react";
import { Button } from "./ui/button";

type ChatInputProps = {
  onSend: (input: string) => void;
};

const ChatInput = ({ onSend }: ChatInputProps) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    onSend(input);

    // clear input after send
    setInput("");
  };

  return (
    <div className="flex gap-1 text-white w-175 bg-[#1e1f20] p-3 rounded-4xl">
      <Button variant="ghost" size="icon" className="rounded-full">
        <Plus />
      </Button>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSend();
          }
        }}
        placeholder="text anything..."
        className="flex-1 bg-transparent px-4 text-xl outline-none"
      />

      <Button onClick={handleSend} variant="ghost" size="icon">
        <Send />
      </Button>
    </div>
  );
};

export default ChatInput;
