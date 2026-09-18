"use client";

import React from "react";

import AIBioImprover from "./AIBioImprover";
import ProtectedRoute from "@/app/components/auth/ProtectedRoute";
import Footer from "@/app/components/layout/Footer";
import Header from "@/app/components/layout/Header";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { logout, setUser } from "@/app/store/slices/authSlice";

import type { User } from "@/app/types/user";

export default function ProfilePage() {
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.auth.user);
  const accessToken = useAppSelector((state) => state.auth.accessToken);

  const [isEditing, setIsEditing] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [bio, setBio] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [profileImage, setProfileImage] = React.useState<File | null>(null);

  const [loading, setLoading] = React.useState(false);
  const [deleting, setDeleting] = React.useState(false);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    if (!user) {
      return;
    }

    setUsername(user.username);
    setBio(user.bio ?? "");
  }, [user]);

  const handleUpdate = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!user || !accessToken) {
      setError("You are not authenticated.");
      return;
    }

    setLoading(true);
    setError("");

    const formData = new FormData();

    formData.append("username", username);
    formData.append("bio", bio);

    if (password.trim()) {
      formData.append("password", password);
    }

    if (profileImage) {
      formData.append("profile_image", profileImage);
    }

    try {
      const response = await fetch(`http://127.0.0.1:8000/users/${user.id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: formData,
      });

      if (response.status === 401) {
        dispatch(logout());
        return;
      }

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.detail || "Failed to update profile");
      }

      const updatedUser: User = await response.json();

      dispatch(setUser(updatedUser));

      setPassword("");
      setProfileImage(null);
      setIsEditing(false);
    } catch (error) {
      console.error("Profile update error:", error);

      setError(
        error instanceof Error ? error.message : "Failed to update profile"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!user || !accessToken) {
      setError("You are not authenticated.");
      return;
    }

    const confirmed = window.confirm(
      "Are you sure you want to permanently delete your account?"
    );

    if (!confirmed) {
      return;
    }

    setDeleting(true);
    setError("");

    try {
      const response = await fetch(`http://127.0.0.1:8000/users/${user.id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.status === 401) {
        dispatch(logout());
        return;
      }

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.detail || "Failed to delete account");
      }

      dispatch(logout());
    } catch (error) {
      console.error("Account deletion error:", error);

      setError(
        error instanceof Error ? error.message : "Failed to delete account"
      );

      setDeleting(false);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setUsername(user?.username ?? "");
    setBio(user?.bio ?? "");
    setPassword("");
    setProfileImage(null);
    setError("");
  };

  return (
    <ProtectedRoute>
      <div className="flex min-h-screen flex-col bg-gray-50">
        <Header />

        <main className="flex-1 px-6 py-10 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8">
              <p className="mb-2 text-sm font-semibold text-blue-600">
                TeamHub
              </p>

              <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                Your Profile
              </h1>

              <p className="mt-2 text-sm text-gray-500">
                Manage your account and personal information.
              </p>
            </div>

            {error && (
              <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 p-4">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}

            <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
              <div className="border-b border-gray-100 px-6 py-8 sm:px-8">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-5">
                    {user?.profile_image ? (
                      <img
                        src={user.profile_image}
                        alt={`${user.username}'s profile`}
                        className="h-24 w-24 rounded-full object-cover ring-4 ring-gray-100"
                      />
                    ) : (
                      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gray-100 text-3xl font-bold text-gray-600 ring-4 ring-gray-50">
                        {user?.username?.charAt(0).toUpperCase()}
                      </div>
                    )}

                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        {user?.username}
                      </h2>

                      <p className="mt-1 text-sm text-gray-500">
                        TeamHub member
                      </p>

                      <span className="mt-3 inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold capitalize text-gray-700">
                        {user?.role}
                      </span>
                    </div>
                  </div>

                  {!isEditing && (
                    <button
                      type="button"
                      onClick={() => {
                        setIsEditing(true);
                        setError("");
                      }}
                      className="rounded-xl bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
                    >
                      Edit Profile
                    </button>
                  )}
                </div>
              </div>

              {!isEditing && (
                <div className="px-6 py-8 sm:px-8">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Account Information
                  </h3>

                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                        Username
                      </p>

                      <p className="mt-2 text-sm font-medium text-gray-900">
                        {user?.username}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                        Role
                      </p>

                      <p className="mt-2 text-sm font-medium capitalize text-gray-900">
                        {user?.role}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                        User ID
                      </p>

                      <p className="mt-2 text-sm font-medium text-gray-900">
                        #{user?.id}
                      </p>
                    </div>

                    <div className="sm:col-span-2">
                      <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                        Bio
                      </p>

                      <p className="mt-2 text-sm leading-6 text-gray-600 line-clamp-5">
                        {user?.bio || "No bio available."}
                      </p>
                    </div>
                  </div>

                  <div className="mt-10 border-t border-gray-100 pt-8">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Account Actions
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      Permanently remove your TeamHub account.
                    </p>

                    <button
                      type="button"
                      onClick={handleDelete}
                      disabled={deleting}
                      className="mt-5 rounded-xl bg-red-50 px-5 py-2.5 text-sm font-medium text-red-600 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {deleting ? "Deleting Account..." : "Delete My Account"}
                    </button>
                  </div>
                </div>
              )}

              {isEditing && (
                <form onSubmit={handleUpdate} className="px-6 py-8 sm:px-8">
                  <div className="mb-7">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Edit Profile
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      Update your account information.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Username
                      </label>

                      <input
                        type="text"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        required
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-100"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Bio
                      </label>

                      <textarea
                        value={bio}
                        onChange={(event) => setBio(event.target.value)}
                        rows={5}
                        placeholder="Tell us about yourself, your skills, and what you do..."
                        className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm leading-6 outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-100"
                      />

                      <p className="mt-2 text-xs text-gray-400">
                        Write a rough description and use AI to turn it into a
                        professional bio.
                      </p>

                      <AIBioImprover currentBio={bio} onBioGenerated={setBio} />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        New Password
                      </label>

                      <input
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder="Leave empty to keep current password"
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-100"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Profile Image
                      </label>

                      <input
                        type="file"
                        accept="image/*"
                        onChange={(event) => {
                          setProfileImage(event.target.files?.[0] ?? null);
                        }}
                        className="block w-full cursor-pointer rounded-xl border border-gray-200 bg-white text-sm text-gray-500 file:mr-4 file:border-0 file:bg-gray-100 file:px-4 file:py-3 file:text-sm file:font-medium hover:file:bg-gray-200"
                      />
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <button
                      type="submit"
                      disabled={loading}
                      className="rounded-xl bg-gray-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {loading ? "Saving Changes..." : "Save Changes"}
                    </button>

                    <button
                      type="button"
                      onClick={handleCancelEdit}
                      disabled={loading}
                      className="rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50 disabled:opacity-60"
                    >
                      Cancel
                    </button>
                  </div>

                  <div className="mt-10 border-t border-gray-100 pt-8">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Danger Zone
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      Deleting your account is permanent and cannot be undone.
                    </p>

                    <button
                      type="button"
                      onClick={handleDelete}
                      disabled={deleting || loading}
                      className="mt-5 rounded-xl bg-red-50 px-5 py-2.5 text-sm font-medium text-red-600 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {deleting ? "Deleting Account..." : "Delete My Account"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </ProtectedRoute>
  );
}
