type MessageBubbleProps = {
  role: "user" | "assistant";
  content: string;
};

export default function MessageBubble({ role, content }: MessageBubbleProps) {
  const isUser = role === "user";

  return (
    <div
      className={`flex w-175 ${isUser ? "justify-end" : "justify-start"} mb-4`}
    >
      <div
        className={`max-w-[85%] sm:max-w-[75%] rounded-2xl px-4 py-3 text-sm md:text-base leading-relaxed wrap-break-word
        ${isUser ? "bg-[#2b2b2b] text-white" : "bg-[#181818] text-white"}`}
      >
        {content}
      </div>
    </div>
  );
}
