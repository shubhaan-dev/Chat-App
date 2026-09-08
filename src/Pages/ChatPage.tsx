
import { useState, useEffect, useRef } from "react";
import Sidebar from "../components/Sidebar";
import MessageBubble from "../components/MessageBubble";
import MessageInput from "../components/MessageInput";
import { API_BASE_URL } from "../config";
import { socket } from "../socket";

type User = {
  _id: string;
  name: string;
  email: string;
};

type Conversation = {
  _id: string;
  participants: User[];
  lastMessage: string;
};

type ChatListItem = {
  id: string;
  name: string;
  message: string;
  online: boolean;
};

type Message = {
  _id: string;
  text: string;
  sender: string;
  conversationId: string;
};

function ChatPage() {
  const token = localStorage.getItem("token");
  const currentUser = JSON.parse(localStorage.getItem("user") || "{}");

  const [users, setUsers] = useState<User[]>([]);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<string>("");
  const [conversationId, setConversationId] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  
  const conversationIdRef = useRef<string>("");

  const fetchUsers = async () => {
    const res = await fetch(`${API_BASE_URL}/chat/users`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    setUsers(data);
  };

  const fetchConversations = async () => {
    const res = await fetch(`${API_BASE_URL}/chat/conversations`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    setConversations(data);
  };

  useEffect(() => {
    conversationIdRef.current = conversationId;
  }, [conversationId]);

  useEffect(() => {
    if (currentUser?._id) {
      socket.emit("addUser", currentUser._id);
    }
  }, [currentUser?._id]);

  useEffect(() => {
    const handleOnlineUsers = (userIds: string[]) => {
      setOnlineUsers(userIds);
    };

    socket.on("getOnlineUsers", handleOnlineUsers);

    return () => {
      socket.off("getOnlineUsers", handleOnlineUsers);
    };
  }, []);

  useEffect(() => {
    const handleReceiveMessage = (message: Message) => {
      if (message.conversationId === conversationIdRef.current) {
        setMessages((prev) => [...prev, message]);
      }
      fetchConversations();
    };

    socket.on("receiveMessage", handleReceiveMessage);

    return () => {
      socket.off("receiveMessage", handleReceiveMessage);
    };
  }, []);

  

  useEffect(() => {
    fetchUsers();
    fetchConversations();
  }, [token]);

  const handleSelectUser = async (userId: string) => {
    setSelectedUserId(userId);

    const res = await fetch(`${API_BASE_URL}/chat/conversations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ otherUserId: userId }),
    });

    const conversation = await res.json();
    setConversationId(conversation._id);

    const msgRes = await fetch(`${API_BASE_URL}/chat/messages/${conversation._id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const msgData = await msgRes.json();
    setMessages(msgData);
  };

  const sendMessage = async (text: string) => {
    if (!conversationId) return;

    const res = await fetch(`${API_BASE_URL}/chat/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ conversationId, text }),
    });

    const newMessage = await res.json();
    setMessages((prev) => [...prev, newMessage]);
    fetchConversations();

    socket.emit("sendMessage", {
      conversationId,
      senderId: currentUser._id,
      receiverId: selectedUserId,
      text,
      messageId: newMessage._id,
    });
  };

  const chats: ChatListItem[] = users.map((u) => {
    const convo = conversations.find((c) =>
      c.participants.some((p) => p._id === u._id)
    );

    return {
      id: u._id,
      name: u.name,
      message: convo?.lastMessage || "Tap to start chatting",
      online: onlineUsers.includes(u._id),
    };
  });

  const selectedUserName = users.find((u) => u._id === selectedUserId)?.name || "Select a chat";

  return (
    <div className="h-screen flex bg-slate-950">
      <Sidebar
        chats={chats}
        selectedChat={selectedUserId}
        onSelectChat={handleSelectUser}
      />
      <div className="flex-1 flex flex-col">
        <div className="h-16 bg-slate-900 border-b border-slate-800 flex items-center px-6">
          <div>
            <h2 className="font-semibold text-white">
              {selectedUserName}
            </h2>
          </div>
        </div>
        <div className="flex-1 p-6 overflow-y-auto">
          {messages.map((message) => (
            <MessageBubble
              key={message._id}
              message={message.text}
              own={message.sender === currentUser._id}
            />
          ))}
        </div>
        <MessageInput onSend={sendMessage} />
      </div>
    </div>
  );
}

export default ChatPage;