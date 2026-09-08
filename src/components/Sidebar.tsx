import ChatItem from "./ChatItem";

type Chat = {
  name: string;
  message: string;
  online: boolean;
};

type SidebarProps = {
  chats: Chat[];
  selectedChat: string;
  onSelectChat: (name: string) => void;
};

function Sidebar({
  chats,
  selectedChat,
  onSelectChat,
}: SidebarProps) {
  return (
    <div className="w-80 bg-white border-r flex flex-col">

      <div className="p-5 border-b">
        <h1 className="text-2xl font-bold">Connect</h1>
        <p className="text-gray-500 text-sm">Messages</p>
      </div>

      <div className="p-4">
        <input
          type="text"
          placeholder="Search chats..."
          className="w-full px-4 py-2 bg-gray-100 rounded-lg outline-none"
        />
      </div>

      <div className="flex-1 overflow-y-auto">
        {chats.map((chat) => (
          <ChatItem
            key={chat.name}
            {...chat}
            selected={selectedChat === chat.name}
            onClick={() => onSelectChat(chat.name)}
          />
        ))}
      </div>

      <div className="border-t p-4">
        <div className="p-3 hover:bg-gray-100 rounded-lg cursor-pointer">
          👤 My Profile
        </div>

        <div className="p-3 hover:bg-gray-100 rounded-lg cursor-pointer">
          ⚙ Settings
        </div>
      </div>

    </div>
  );
}

export default Sidebar;