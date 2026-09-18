"use client";

const VideoIntro = () => {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="mx-auto flex min-h-screen max-w-6xl items-center px-8 py-16">
        <div className="w-full">
          {/* Label */}
          <div className="mb-10 flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-blue-500" />

            <p className="text-sm font-medium uppercase tracking-[0.25em] text-gray-400">
              Developer Journey
            </p>
          </div>

          {/* Main heading */}
          <div className="max-w-5xl">
            <h1 className="text-6xl font-bold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">
              Building today.
              <br />
              <span className="text-gray-500">Evolving for tomorrow.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400 sm:text-xl">
              I&apos;m expanding from frontend development into full-stack
              engineering, with a long-term focus on building intelligent
              software products.
            </p>
          </div>

          {/* Career direction */}
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <p className="mb-2 text-sm text-gray-500">Current</p>

              <h2 className="text-xl font-semibold">Frontend Developer</h2>

              <p className="mt-3 text-sm text-gray-400">
                React · Next.js · TypeScript
              </p>
            </div>

            <div className="rounded-2xl border border-blue-500/30 bg-blue-500/[0.08] p-6">
              <p className="mb-2 text-sm text-blue-400">Now building</p>

              <h2 className="text-xl font-semibold">Full-Stack Engineer</h2>

              <p className="mt-3 text-sm text-gray-400">
                Python · FastAPI · PostgreSQL
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <p className="mb-2 text-sm text-gray-500">Long-term</p>

              <h2 className="text-xl font-semibold">AI Product Engineer</h2>

              <p className="mt-3 text-sm text-gray-400">
                AI · LLMs · Intelligent Products
              </p>
            </div>
          </div>

          {/* Current project */}
          <div className="mt-10 flex flex-col justify-between gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-7 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm text-gray-500">Current project</p>

              <h2 className="mt-1 text-3xl font-bold">TeamHub</h2>

              <p className="mt-2 text-sm text-gray-400">
                A full-stack team management application
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "Next.js",
                "TypeScript",
                "FastAPI",
                "PostgreSQL",
                "SQLAlchemy",
              ].map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-gray-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          {/* Roadmap */}
          <div className="mt-10">
            <p className="mb-4 text-sm uppercase tracking-widest text-gray-500">
              What&apos;s next
            </p>

            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-300">
              <span>Redux Toolkit</span>
              <span className="text-gray-600">→</span>

              <span>Authentication</span>
              <span className="text-gray-600">→</span>

              <span>Authorization</span>
              <span className="text-gray-600">→</span>

              <span>Production Architecture</span>
              <span className="text-gray-600">→</span>

              <span>AI Integration</span>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-14 flex items-center justify-between border-t border-white/10 pt-6">
            <p className="text-sm text-gray-500">Muhammad Noor</p>

            <p className="text-sm text-gray-600">TeamHub · 2026</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default VideoIntro;
