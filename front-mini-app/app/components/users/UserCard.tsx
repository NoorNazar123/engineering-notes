"use client";

import React from "react";

import type { User } from "@/app/types/user";

type UserCardProps = {
  user: User;
  showActions?: boolean;
  onEdit?: (userId: number) => void;
};

export default function UserCard({
  user,
  showActions = false,
  onEdit,
}: UserCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">
      <div className="p-6">
        {/* Avatar + User */}
        <div className="flex items-center gap-4">
          {user.profile_image ? (
            <img
              src={user.profile_image}
              alt={`${user.username}'s profile`}
              className="h-16 w-16 rounded-full object-cover ring-4 ring-gray-50"
            />
          ) : (
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-xl font-bold text-gray-600 ring-4 ring-gray-50">
              {user.username.charAt(0).toUpperCase()}
            </div>
          )}

          <div className="min-w-0">
            <h3 className="truncate text-lg font-semibold text-gray-900">
              {user.username}
            </h3>

            <p className="mt-1 text-xs text-gray-400">User ID #{user.id}</p>

            <span className="mt-2 inline-flex rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium capitalize text-gray-600">
              {user.role}
            </span>
          </div>
        </div>

        {/* Bio */}
        <div className="mt-5 min-h-[60px]">
          <p className="text-sm leading-6 text-gray-600 line-clamp-5">
            {user.bio || "No bio available."}
          </p>
        </div>

        {/* Admin Edit */}
        {showActions && onEdit && (
          <div className="mt-5">
            <button
              type="button"
              onClick={() => onEdit(user.id)}
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
            >
              Edit
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
