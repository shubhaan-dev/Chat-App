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
            ? "bg-blue-600 text-white"
            : "bg-slate-800 text-gray-100 border border-slate-700"
        }`}
      >
        {message}
      </div>
    </div>
  );
}

export default MessageBubble;