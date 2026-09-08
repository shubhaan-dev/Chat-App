import { useState } from "react";

type MessageInputProps = {
  onSend: (message: string) => void;
};

function MessageInput({ onSend }: MessageInputProps) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    onSend(message);
    setMessage("");
  };

  return (
    <div className="p-4 bg-slate-900 border-t border-slate-800 flex gap-3">
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSend();
          }
        }}
        placeholder="Type a message..."
        className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl outline-none text-white placeholder-gray-500 focus:border-blue-500 transition"
      />

      <button
        onClick={handleSend}
        className="px-5 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition font-semibold"
      >
        Send
      </button>
    </div>
  );
}

export default MessageInput;