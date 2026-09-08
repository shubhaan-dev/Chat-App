import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full border-b border-gray-800 bg-black text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

        {/* Logo */}
        <h1 className="text-2xl font-bold">Connect</h1>

        {/* Navigation */}
        <div className="flex items-center gap-10">

          <ul className="flex gap-8 text-sm">
            <li className="cursor-pointer hover:text-blue-400">Home</li>
            <li className="cursor-pointer hover:text-blue-400">Features</li>
            <li className="cursor-pointer hover:text-blue-400">About</li>
            <li className="cursor-pointer hover:text-blue-400">GitHub</li>
          </ul>

          {/* Login Button */}
          <Link
            to="/login"
            className="rounded-lg border border-blue-500 px-5 py-2 text-sm font-medium transition hover:bg-blue-600"
          >
            Login
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;