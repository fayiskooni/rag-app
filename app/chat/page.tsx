"use client";

import { useEffect, useRef, useState } from "react";
import ChatInput from "../../components/chatInput";
import MessageBubble from "../../components/messageBubble";

type Message = {
  id: number;
  role: "user" | "assistant";
  content: string;
};

const ChatPage = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSend = (text: string) => {
    const newMessage = {
      id: Date.now(),
      role: "user" as const,
      content: text,
    };

    setMessages((prev) => [...prev, newMessage]);

    // fake AI response for testing
    setTimeout(() => {
      const aiMessage = {
        id: Date.now() + 1,
        role: "assistant" as const,
        content: `You said: ${text}`,
      };

      setMessages((prev) => [...prev, aiMessage]);
    }, 700);
  };

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <div className="h-screen bg-black relative overflow-hidden">
      <div className="relative z-10 flex flex-col h-screen">
        <div className="flex-1 p-6">
          {messages.length === 0 ? (
            <div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-225 h-150 rounded-full 
      bg-blue-900/40 blur-[150px]"
                />
              </div>

              <div className="relative z-10 flex flex-col items-center justify-center h-screen">
                <h1 className="text-white text-4xl mb-10">
                  Hi Fayis, what&apos;s the move?
                </h1>
                <ChatInput onSend={handleSend} />
              </div>
            </div>
          ) : (
            <div className="flex flex-col h-screen items-center">
              {/* Scrollable messages */}
              <div className="flex-1 overflow-y-auto px-6">
                <div className="flex flex-col justify-end min-h-full">
                  {messages.map((message) => (
                    <MessageBubble
                      key={message.id}
                      role={message.role}
                      content={message.content}
                    />
                  ))}
                  <div ref={bottomRef}></div>
                </div>
              </div>

              {/* Input at bottom */}
              <div className="pb-2 flex justify-center">
                <ChatInput onSend={handleSend} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
