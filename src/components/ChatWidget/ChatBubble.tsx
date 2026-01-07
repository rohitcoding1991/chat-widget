import { cn } from "@/lib/utils";
import { WidgetConfig } from "./config";

interface ChatBubbleProps {
  message: string;
  type?: "sent" | "received";
}

const ChatBubble = ({ message, type = "sent" }: ChatBubbleProps) => {
  const bubbleColor = type === "sent" ? "bg-pink-500" : "bg-gray-200";
  return (
    <div
      className={cn("flex-1", {
        "flex justify-end items-center": type === "sent",
      })}
    >
      <div
        className={cn("py-[6px] px-2 rounded-tr-2xl rounded-xl text-sm w-fit", bubbleColor, {
          "rounded-br-none text-white": type === "sent",
          "rounded-bl-none text-left": type === "received",
        })}
        style={{ maxWidth: WidgetConfig.chatBubbleWidth }}
      >
        {message}
      </div>
    </div>
  );
};

export default ChatBubble;
