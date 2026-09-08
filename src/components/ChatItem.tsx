type ChatItemProps = {
  id: string;
  name: string;
  message: string;
  online: boolean;
  selected: boolean;
  onClick: () => void;
};

function ChatItem({
  name,
  message,
  online,
  selected,
  onClick,
}: ChatItemProps) {
  return (
    <div
      onClick={onClick}
      className={`px-4 py-4 flex items-center gap-3 cursor-pointer ${
        selected ? "bg-gray-100" : "hover:bg-gray-100"
      }`}
    >
      <div className="relative">
        <div className="w-11 h-11 rounded-full bg-gray-300 flex items-center justify-center font-semibold">
          {name[0]}
        </div>

        {online && (
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
        )}
      </div>

      <div className="flex-1 min-w-0">
        <p className="font-semibold">{name}</p>

        <p className="text-sm text-gray-500 truncate">
          {message}
        </p>
      </div>
    </div>
  );
}

export default ChatItem;
