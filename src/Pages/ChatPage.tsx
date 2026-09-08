import { useState } from "react";
import Sidebar from "../components/Sidebar";
import MessageBubble from "../components/MessageBubble";
import MessageInput from "../components/MessageInput";

function ChatPage() {
  const chats = [
    {
      name: "Alex",
      message: "Hey, are you free?",
      online: true,
    },
    {
      name: "Rahul",
      message: "Let's meet tomorrow",
      online: true,
    },
    {
      name: "Sarah",
      message: "Okay, thanks!",
      online: false,
    },
    {
      name: "John",
      message: "See you tomorrow",
      online: true,
    },
  ];

  const [selectedChat, setSelectedChat] = useState("Alex");

  const [messages, setMessages] = useState([
    {
      text: "Hey! How are you?",
      own: false,
    },
    {
      text: "I'm good. What about you?",
      own: true,
    },
    {
      text: "Doing great!",
      own: false,
    },
  ]);

  const sendMessage = (message: string) => {
    setMessages([
      ...messages,
      {
        text: message,
        own: true,
      },
    ]);
  };

  return (
    <div className="h-screen flex bg-gray-100">

      <Sidebar
        chats={chats}
        selectedChat={selectedChat}
        onSelectChat={setSelectedChat}
      />

      <div className="flex-1 flex flex-col">

        {/* Chat Header */}
        <div className="h-16 bg-white border-b flex items-center px-6">
          <div>
            <h2 className="font-semibold">
              {selectedChat}
            </h2>

            <p className="text-sm text-gray-500">
              Online
            </p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 p-6 overflow-y-auto">
          {messages.map((message, index) => (
            <MessageBubble
              key={index}
              message={message.text}
              own={message.own}
            />
          ))}
        </div>

        {/* Input */}
        <MessageInput onSend={sendMessage} />

      </div>

    </div>
  );
}

export default ChatPage;