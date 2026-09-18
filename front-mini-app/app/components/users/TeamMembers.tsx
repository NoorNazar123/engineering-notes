"use client";

import React from "react";

import CreateUser from "./CreateUser";
import UpdateUser from "./UpdateUser";
import DeleteUser from "./DeleteUser";
import UserCard from "./UserCard";

import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { setLoading, setUsers } from "@/app/store/slices/usersSlice";

type TeamMembersProps = {
  adminMode?: boolean;
  showCreateUser?: boolean;
};

export default function TeamMembers({
  adminMode = false,
  showCreateUser = false,
}: TeamMembersProps) {
  const dispatch = useAppDispatch();

  const { users, loading } = useAppSelector((state) => state.users);

  const accessToken = useAppSelector((state) => state.auth.accessToken);

  const [error, setError] = React.useState("");

  const [editingUserId, setEditingUserId] = React.useState<number | null>(null);

  React.useEffect(() => {
    if (!accessToken) {
      return;
    }

    const fetchUsers = async () => {
      try {
        setError("");
        dispatch(setLoading(true));

        const response = await fetch("http://127.0.0.1:8000/users", {
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

        setError(
          error instanceof Error ? error.message : "Failed to load users"
        );
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchUsers();
  }, [accessToken, dispatch]);

  const handleEdit = (userId: number) => {
    setEditingUserId((currentId) => (currentId === userId ? null : userId));
  };

  return (
    <div className="space-y-8">
      {/* Create User */}
      {adminMode && showCreateUser && <CreateUser />}

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Team Members</h2>

          <p className="mt-1 text-sm text-gray-500">
            {adminMode
              ? "Manage users in your TeamHub workspace."
              : "Meet the members of TeamHub."}
          </p>
        </div>

        <div className="rounded-full bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-600">
          {users.length} {users.length === 1 ? "User" : "Users"}
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}

      {/* Loading */}
      {loading && (
        <div className="rounded-2xl border border-gray-200 bg-white p-10 text-center">
          <p className="text-sm text-gray-500">Loading team members...</p>
        </div>
      )}

      {/* Empty */}
      {!loading && !error && users.length === 0 && (
        <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-12 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-xl text-gray-500">
            👤
          </div>

          <h3 className="font-semibold text-gray-900">No users yet</h3>

          <p className="mt-1 text-sm text-gray-500">
            {adminMode
              ? "Create your first user to get started."
              : "No team members are available yet."}
          </p>
        </div>
      )}

      {/* Users */}
      {!loading && users.length > 0 && (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => (
            <div key={user.id}>
              {/* User Card */}
              <UserCard
                user={user}
                showActions={adminMode}
                onEdit={handleEdit}
              />

              {/* Admin Controls */}
              {adminMode && (
                <div className="mt-3">
                  <DeleteUser userId={user.id} />
                </div>
              )}

              {/* Update Form */}
              {adminMode && editingUserId === user.id && (
                <div className="mt-3 rounded-2xl border border-gray-200 bg-gray-50 p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <h4 className="font-semibold text-gray-900">Edit User</h4>

                    <button
                      type="button"
                      onClick={() => setEditingUserId(null)}
                      className="text-sm text-gray-500 transition hover:text-gray-900"
                    >
                      Cancel
                    </button>
                  </div>

                  <UpdateUser
                    userId={user.id}
                    onUpdated={() => {
                      setEditingUserId(null);
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
