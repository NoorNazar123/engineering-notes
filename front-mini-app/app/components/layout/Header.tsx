"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { logout } from "@/app/store/slices/authSlice";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    router.replace("/login");
  };

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-950 text-sm font-bold text-white shadow-sm transition duration-200 group-hover:scale-105">
            T
          </div>

          <div className="leading-tight">
            <p className="text-lg font-bold tracking-tight text-gray-950">
              TeamHub
            </p>

            <p className="hidden text-[11px] font-medium text-gray-400 sm:block">
              Team workspace
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-1 rounded-2xl border border-gray-200 bg-gray-50/80 p-1 sm:flex">
          <Link
            href="/"
            className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
              isActive("/")
                ? "bg-white text-gray-950 shadow-sm"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            Home
          </Link>

          <Link
            href="/profile"
            className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
              isActive("/profile")
                ? "bg-white text-gray-950 shadow-sm"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            Profile
          </Link>

          {user?.role === "admin" && (
            <Link
              href="/dashboard"
              className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
                isActive("/dashboard")
                  ? "bg-white text-gray-950 shadow-sm"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Dashboard
            </Link>
          )}
        </nav>

        {/* Right Side */}
        {/* Right Side */}
        <div className="flex items-center gap-3">
          {user ? (
            <>
              {/* User */}
              <Link
                href="/profile"
                className="hidden items-center gap-3 rounded-2xl border border-transparent px-2 py-1.5 transition hover:border-gray-200 hover:bg-gray-50 sm:flex"
              >
                {/* Avatar */}
                {user.profile_image ? (
                  <img
                    src={user.profile_image}
                    alt={`${user.username}'s profile`}
                    className="h-9 w-9 rounded-full object-cover ring-2 ring-white"
                  />
                ) : (
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-sm font-bold text-gray-600">
                    {user.username.charAt(0).toUpperCase()}
                  </div>
                )}

                {/* User Details */}
                <div className="min-w-0 text-left leading-tight">
                  <p className="max-w-[100px] truncate text-sm font-semibold text-gray-900">
                    {user.username}
                  </p>

                  <p className="mt-0.5 text-[11px] font-medium capitalize text-gray-400">
                    {user.role}
                  </p>
                </div>
              </Link>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition duration-200 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-950 active:scale-[0.98]"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              {/* Sign Up */}
              <Link
                href="/signup"
                className="rounded-xl px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 hover:text-gray-950"
              >
                Sign Up
              </Link>

              {/* Login */}
              <Link
                href="/login"
                className="rounded-xl bg-gray-950 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800 active:scale-[0.98]"
              >
                Login
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="border-t border-gray-100 px-6 py-3 sm:hidden">
        <nav className="flex items-center gap-2 overflow-x-auto">
          <Link
            href="/"
            className={`whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium transition ${
              isActive("/")
                ? "bg-gray-950 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Home
          </Link>

          <Link
            href="/profile"
            className={`whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium transition ${
              isActive("/profile")
                ? "bg-gray-950 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Profile
          </Link>

          {user?.role === "admin" && (
            <Link
              href="/dashboard"
              className={`whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium transition ${
                isActive("/dashboard")
                  ? "bg-gray-950 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Dashboard
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
