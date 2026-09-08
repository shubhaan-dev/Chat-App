function ChatWindow() {
  return (
    <div className="flex-1 flex flex-col">

      {/* Top bar */}
      <div className="h-16 bg-white border-b flex items-center justify-between px-6">
        <h2 className="font-semibold text-lg">Welcome to Connect</h2>

        <div className="flex items-center gap-3">
          <span>🔔</span>

          <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center font-semibold">
            K
          </div>
        </div>
      </div>

      {/* Empty chat area */}
      <div className="flex-1 flex items-center justify-center">

        <div className="text-center">
          <div className="text-5xl mb-4">💬</div>

          <h2 className="text-2xl font-semibold mb-2">
            Select a conversation
          </h2>

          <p className="text-gray-500">
            Choose a chat from the sidebar to start messaging.
          </p>
        </div>

      </div>

    </div>
  );
}

export default ChatWindow;