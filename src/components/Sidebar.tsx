import ChatItem from "./ChatItem";

type Chat = {
  id: string;
  name: string;
  message: string;
  online: boolean;
};

type SidebarProps = {
  chats: Chat[];
  selectedChat: string;
  onSelectChat: (id: string) => void;
};

function Sidebar({
  chats,
  selectedChat,
  onSelectChat,
}: SidebarProps) {
  return (
    <div className="w-80 bg-slate-900 border-r border-slate-800 flex flex-col">

      <div className="p-5 border-b border-slate-800">
        <h1 className="text-2xl font-bold text-white"> Connect</h1>
        <p className="text-gray-400 text-sm">Messages</p>
      </div>

      <div className="p-4">
        <input
          type="text"
          placeholder="Search chats..."
          className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg outline-none text-white placeholder-gray-500 focus:border-blue-500 transition"
        />
      </div>

      <div className="flex-1 overflow-y-auto">
        {chats.map((chat) => (
          <ChatItem
            key={chat.id}
            {...chat}
            selected={selectedChat === chat.id}
            onClick={() => onSelectChat(chat.id)}
          />
        ))}
      </div>

      <div className="border-t border-slate-800 p-4">
        <div className="p-3 hover:bg-slate-800 rounded-lg cursor-pointer text-gray-300 transition">
          👤 My Profile
        </div>

        <div className="p-3 hover:bg-slate-800 rounded-lg cursor-pointer text-gray-300 transition">
          ⚙ Settings
        </div>
      </div>

    </div>
  );
}

export default Sidebar;