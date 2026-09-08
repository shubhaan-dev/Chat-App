import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-4xl rounded-3xl border border-slate-800 bg-slate-900 px-8 py-16 text-center">

        <h2 className="text-4xl font-bold">
          Ready to Start Chatting?
        </h2>

        <p className="mt-4 text-lg text-gray-400">
          Create an account and experience fast, secure and real-time messaging.
        </p>

        <Link
          to="/register"
          className="mt-10 inline-block rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold transition hover:bg-blue-700"
        >
          Create Account
        </Link>

        <p className="mt-6 text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-blue-400 hover:underline"
          >
            Login
          </Link>
        </p>

      </div>
    </section>
  );
}

export default CTA;