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
    <div className="p-4 bg-white border-t flex gap-3">
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSend();
          }
        }}
        placeholder="Type a message..."
        className="flex-1 px-4 py-3 bg-gray-100 rounded-xl outline-none"
      />

      <button
        onClick={handleSend}
        className="px-5 py-3 bg-black text-white rounded-xl"
      >
        Send
      </button>
    </div>
  );
}

export default MessageInput;