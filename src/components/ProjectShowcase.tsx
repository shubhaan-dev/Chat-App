function ProjectShowcase() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Product Showcase
          </h2>

          <p className="mt-4 text-gray-400">
            Explore some of the key screens from the application.
          </p>
        </div>

        {/* Screenshots */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {/* Card 1 */}
          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-xl transition hover:-translate-y-2 hover:border-blue-500">

            <div className="flex items-center gap-2 border-b border-slate-800 px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>

            <div className="flex h-64 items-center justify-center text-xl font-semibold text-gray-400">
              Login Screen
            </div>

          </div>

          {/* Card 2 */}
          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-xl transition hover:-translate-y-2 hover:border-blue-500">

            <div className="flex items-center gap-2 border-b border-slate-800 px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>

            <div className="flex h-64 items-center justify-center text-xl font-semibold text-gray-400">
              Chat Window
            </div>

          </div>

          {/* Card 3 */}
          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-xl transition hover:-translate-y-2 hover:border-blue-500">

            <div className="flex items-center gap-2 border-b border-slate-800 px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>

            <div className="flex h-64 items-center justify-center text-xl font-semibold text-gray-400">
              Group Chat
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ProjectShowcase;