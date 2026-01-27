import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center relative">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-blue-500 blur-[100px] opacity-20 rounded-full animate-pulse"></div>

        <div className="relative z-10">
          {/* Glitchy Text Effect */}
          <h1 className="text-9xl font-black text-white tracking-widest drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            4<span className="text-blue-500">0</span>4
          </h1>

          <div className="w-24 h-1 bg-blue-500 mx-auto my-6 rounded-full"></div>

          <h2 className="text-3xl font-bold text-white mb-2">Lost in Space?</h2>

          <p className="text-slate-400 text-lg mb-8">
            The page you are looking for seems to have drifted into a black
            hole.
          </p>

          <Link
            href="/"
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-blue-600 px-8 font-medium text-white transition-all duration-300 hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            <span className="mr-2">Take me Home</span>
            {/* Arrow Animation */}
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
