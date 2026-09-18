"use client";

import Link from "next/link";

import ProtectedRoute from "@/app/components/auth/ProtectedRoute";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import TeamMembers from "@/app/components/users/TeamMembers";

import { useAppSelector } from "@/app/store/hooks";

export default function DashboardPage() {
  const { users, loading } = useAppSelector((state) => state.users);

  return (
    <ProtectedRoute adminOnly>
      <div className="flex min-h-screen flex-col bg-gray-50">
        <Header />

        <main className="flex-1 px-6 py-10 lg:px-8">
          <div className="mx-auto max-w-7xl">
            {/* Page Header */}
            <div className="mb-8 flex items-start justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                  Dashboard
                </h1>

                <p className="mt-2 text-sm text-gray-500">
                  Manage your team and monitor your TeamHub workspace.
                </p>
              </div>

              <Link
                href="/"
                className="rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
              >
                View Team
              </Link>
            </div>

            {/* Stats */}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {/* Total Users */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-medium text-gray-500">Total Users</p>

                <p className="mt-3 text-3xl font-bold text-gray-900">
                  {loading ? "—" : users.length}
                </p>
              </div>

              {/* Team Members */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-medium text-gray-500">
                  Team Members
                </p>

                <p className="mt-3 text-3xl font-bold text-gray-900">
                  {loading ? "—" : users.length}
                </p>
              </div>

              {/* Workspace */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-medium text-gray-500">Workspace</p>

                <p className="mt-3 text-xl font-bold text-gray-900">TeamHub</p>
              </div>
            </div>

            {/* Team Management */}
            <section className="mt-8">
              <TeamMembers adminMode showCreateUser />
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </ProtectedRoute>
  );
}
