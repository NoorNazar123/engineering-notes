import Link from "next/link";

import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import UserProfile from "./components/users/UserProfile";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gray-100">
        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl" />

          <div className="absolute -right-20 top-20 h-64 w-64 rounded-full bg-gray-100 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Welcome to TeamHub
            </div>

            {/* Heading */}
            <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-gray-950 sm:text-6xl lg:text-7xl">
              Your team.
              <br />
              <span className="text-gray-400">One simple workspace.</span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-500 sm:text-xl">
              Discover your team members, explore their profiles, and keep
              everything organized in one clean and simple workspace.
            </p>

            {/* Actions */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/profile"
                className="rounded-xl bg-gray-950 px-6 py-3.5 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800"
              >
                View My Profile
              </Link>

              <a
                href="#members"
                className="rounded-xl border border-gray-200 bg-white px-6 py-3.5 text-center text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50"
              >
                Explore Members
              </a>
            </div>
          </div>

          {/* Simple stats */}
          <div className="mt-16 grid max-w-3xl gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <p className="text-2xl font-bold text-gray-900">Team</p>
              <p className="mt-1 text-sm text-gray-500">Connected members</p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <p className="text-2xl font-bold text-gray-900">Profiles</p>
              <p className="mt-1 text-sm text-gray-500">Personal information</p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <p className="text-2xl font-bold text-gray-900">Simple</p>
              <p className="mt-1 text-sm text-gray-500">Clean workspace</p>
            </div>
          </div>
        </div>
      </section>

      {/* Members */}
      <section id="members" className="bg-gray-50 px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <UserProfile />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-gray-100 bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold text-blue-600">TeamHub</p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Your profile, your workspace.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-gray-500">
            Sign in to manage your own profile and keep your TeamHub information
            up to date.
          </p>

          <div className="mt-8">
            <Link
              href="/profile"
              className="inline-flex rounded-xl bg-gray-950 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800"
            >
              Go to My Profile
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
