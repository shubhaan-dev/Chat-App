import FeatureCard from "./FeatureCard";

function Features() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Everything You Need
          </h2>

          <p className="mt-4 text-gray-400">
            Powerful features built for seamless communication.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          <FeatureCard
            icon="⚡"
            title="Real-Time Chat"
            description="Instant messaging powered by WebSockets."
          />

          <FeatureCard
            icon="🔒"
            title="Secure Authentication"
            description="JWT-based login and protected routes."
          />

          <FeatureCard
            icon="👥"
            title="Group Chats"
            description="Create groups and chat with multiple users."
          />

          <FeatureCard
            icon="📎"
            title="File Sharing"
            description="Send images, PDFs and documents."
          />

          <FeatureCard
            icon="😊"
            title="Emoji Support"
            description="Express yourself with emojis and reactions."
          />

          <FeatureCard
            icon="📱"
            title="Responsive Design"
            description="Optimized for desktop, tablet and mobile."
          />
          

        </div>

      </div>
    </section>
  );
}

export default Features;