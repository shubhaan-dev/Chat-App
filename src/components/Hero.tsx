function Hero() {
  return (
    <section className="bg-slate-950 text-white">
      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">

        {/* Badge */}
        <div className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400">
          💬 Real-Time Messaging
        </div>

        {/* Heading */}
        <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-7xl">
          Connect
          <span className="text-blue-500"> Instantly.</span>
          <br />
          Chat Seamlessly.
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg text-gray-400">
          Secure • Fast • Modern Communication
        </p>

        {/* Buttons */}
        <div className="mt-10 flex gap-5">
          <button className="rounded-xl bg-blue-600 px-7 py-3 font-semibold transition hover:bg-blue-700">
            Live Demo
          </button>

          <button className="rounded-xl border border-gray-600 px-7 py-3 font-semibold transition hover:border-blue-500 hover:text-blue-400">
            GitHub
          </button>
        </div>

        {/* Chat Preview */}
        <div className="mt-16 w-full max-w-lg overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">

          <div className="border-b border-slate-800 px-6 py-4 text-left font-semibold">
            💬 General Chat
          </div>

          <div className="space-y-4 p-6 text-left">

            <div>
              <span className="font-semibold text-blue-400">Alex</span>
              <p className="text-gray-300">Hey 👋</p>
            </div>

            <div>
              <span className="font-semibold text-green-400">Sam</span>
              <p className="text-gray-300">Ready?</p>
            </div>

            <div>
              <span className="font-semibold text-purple-400">You</span>
              <p className="text-gray-300">Let's build 🚀</p>
            </div>

          </div>

          <div className="border-t border-slate-800 px-6 py-4 text-left text-gray-500">
            Type a message...
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;