function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-black py-10 text-gray-400">
      <div className="mx-auto max-w-7xl px-6 text-center">

        <h2 className="text-2xl font-bold text-white">
          💬 SyncChat
        </h2>

        <p className="mt-3">
          Real-time messaging built with modern web technologies.
        </p>

        <div className="mt-6 flex justify-center gap-8">

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            LinkedIn
          </a>

          <a
            href="mailto:yourmail@gmail.com"
            className="hover:text-white"
          >
            Email
          </a>

        </div>

        <p className="mt-8 text-sm">
          © 2026 Md Kaif. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;