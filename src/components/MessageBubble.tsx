type MessageBubbleProps = {
  message: string;
  own: boolean;
};

function MessageBubble({ message, own }: MessageBubbleProps) {
  return (
    <div
      className={`flex mb-3 ${
        own ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`px-4 py-2 rounded-2xl max-w-xs ${
          own
            ? "bg-black text-white"
            : "bg-white border"
        }`}
      >
        {message}
      </div>
    </div>
  );
}

export default MessageBubble;