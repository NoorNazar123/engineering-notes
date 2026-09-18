"use client";

import Link from "next/link";

import { useAppSelector } from "@/app/store/hooks";

export default function Footer() {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="group inline-flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-950 text-sm font-bold text-white transition group-hover:scale-105">
                T
              </div>

              <span className="text-lg font-bold tracking-tight text-gray-950">
                TeamHub
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-500">
              A simple and modern workspace for discovering and managing your
              team.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Navigation</h3>

            <nav className="mt-4 flex flex-col gap-3">
              <Link
                href="/"
                className="w-fit text-sm text-gray-500 transition hover:text-gray-900"
              >
                Home
              </Link>

              <Link
                href="/profile"
                className="w-fit text-sm text-gray-500 transition hover:text-gray-900"
              >
                My Profile
              </Link>

              {user?.role === "admin" && (
                <Link
                  href="/dashboard"
                  className="w-fit text-sm text-gray-500 transition hover:text-gray-900"
                >
                  Dashboard
                </Link>
              )}
            </nav>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Account</h3>

            <div className="mt-4">
              {user ? (
                <Link
                  href="/profile"
                  className="group flex w-fit items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-3 py-2.5 transition hover:border-gray-300 hover:bg-white"
                >
                  {user.profile_image ? (
                    <img
                      src={user.profile_image}
                      alt={`${user.username}'s profile`}
                      className="h-9 w-9 rounded-full object-cover"
                    />
                  ) : (
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-bold text-gray-600">
                      {user.username.charAt(0).toUpperCase()}
                    </div>
                  )}

                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {user.username}
                    </p>

                    <p className="text-xs capitalize text-gray-400">
                      {user.role}
                    </p>
                  </div>
                </Link>
              ) : (
                <Link
                  href="/login"
                  className="inline-flex rounded-xl bg-gray-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800"
                >
                  Sign in
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-3 border-t border-gray-100 pt-6 text-sm text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} TeamHub. All rights reserved.</p>

          <p>Built for simple, organized teamwork.</p>
        </div>
      </div>
    </footer>
  );
}
