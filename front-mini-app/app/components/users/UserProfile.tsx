"use client";

import React from "react";

import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { setLoading, setUsers } from "@/app/store/slices/usersSlice";
import { API_URL } from "@/app/lib/api";

const UserProfile = () => {
  const dispatch = useAppDispatch();

  const users = useAppSelector((state) => state.users.users);
  const loading = useAppSelector((state) => state.users.loading);
  const accessToken = useAppSelector((state) => state.auth.accessToken);

  React.useEffect(() => {
    if (!accessToken) {
      return;
    }

    const fetchUsers = async () => {
      dispatch(setLoading(true));

      try {
        const response = await fetch(`${API_URL}/users`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();

        dispatch(setUsers(data));
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchUsers();
  }, [accessToken, dispatch]);

  return (
    <section className="space-y-8 py-16">
      {/* Section Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium text-blue-600">TeamHub Community</p>

          <h2 className="mt-1 text-2xl font-bold tracking-tight text-gray-900">
            Meet Our Members
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
            Explore the people currently connected with TeamHub.
          </p>
        </div>

        {/* User Count */}
        <div className="w-fit rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 shadow-sm">
          {users.length} {users.length === 1 ? "Member" : "Members"}
        </div>
      </div>

      {/* Loading */}
      {loading && (
        <div className="rounded-3xl border border-gray-200 bg-white p-12 text-center shadow-sm">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
            <span className="text-lg">⏳</span>
          </div>

          <p className="mt-4 text-sm font-medium text-gray-700">
            Loading members...
          </p>

          <p className="mt-1 text-sm text-gray-400">
            Please wait while we fetch the team.
          </p>
        </div>
      )}

      {/* Empty State */}
      {!loading && users.length === 0 && (
        <div className="rounded-3xl border border-dashed border-gray-300 bg-white p-12 text-center shadow-sm">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-xl">
            👥
          </div>

          <h3 className="mt-4 font-semibold text-gray-900">No members yet</h3>

          <p className="mt-1 text-sm text-gray-500">
            There are currently no registered TeamHub members.
          </p>
        </div>
      )}

      {/* Users */}
      {!loading && users.length > 0 && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => (
            <article
              key={user.id}
              className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Card Top */}
              <div className="h-20 bg-gray-50" />

              {/* Profile Content */}
              <div className="px-6 pb-6">
                {/* Avatar */}
                <div className="-mt-10">
                  {user.profile_image ? (
                    <img
                      src={user.profile_image}
                      alt={`${user.username}'s profile`}
                      className="h-20 w-20 rounded-full border-4 border-white object-cover shadow-sm"
                    />
                  ) : (
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-gray-100 text-2xl font-bold text-gray-600 shadow-sm">
                      {user.username?.charAt(0).toUpperCase()}
                    </div>
                  )}
                </div>

                {/* Name + Role */}
                <div className="mt-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="truncate text-lg font-semibold text-gray-900">
                        {user.username}
                      </h3>

                      <p className="mt-1 text-xs text-gray-400">
                        Member #{user.id}
                      </p>
                    </div>

                    <span className="shrink-0 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium capitalize text-gray-600">
                      {user.role}
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className="my-5 border-t border-gray-100" />

                {/* Bio */}
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                    About
                  </p>

                  <p className="mt-2 min-h-[48px] text-sm leading-6 text-gray-600 line-clamp-5">
                    {user.bio || "No bio available."}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default UserProfile;
