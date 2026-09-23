"use client";

import React from "react";

import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { addUser } from "@/app/store/slices/usersSlice";
import type { User } from "@/app/types/user";
import { API_URL } from "@/app/lib/api";

const CreateUser = () => {
  const dispatch = useAppDispatch();

  const accessToken = useAppSelector((state) => state.auth.accessToken);

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [bio, setBio] = React.useState("");
  const [profileImage, setProfileImage] = React.useState<File | null>(null);

  const [loading, setLoading] = React.useState(false);

  const createUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!accessToken) {
      console.error("No access token");
      return;
    }

    setLoading(true);

    const formData = new FormData();

    formData.append("username", username);
    formData.append("password", password);
    formData.append("bio", bio);

    if (profileImage) {
      formData.append("profile_image", profileImage);
    }

    try {
      const response = await fetch(`${API_URL}/users`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: formData,
      });

      if (!response.ok) {
        const error = await response.json();

        throw new Error(error.detail || "Failed to create user");
      }

      const data: User = await response.json();

      console.log("Created user:", data);

      // Add the new user directly to Redux
      dispatch(addUser(data));

      // Clear form
      setUsername("");
      setPassword("");
      setBio("");
      setProfileImage(null);

      // Reset file input
      const fileInput = document.getElementById(
        "profileImage"
      ) as HTMLInputElement | null;

      if (fileInput) {
        fileInput.value = "";
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
      {/* Header */}
      <div className="border-b border-gray-100 px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            +
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900">Create User</h2>

            <p className="text-sm text-gray-500">
              Add a new user to your application
            </p>
          </div>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={createUser} className="space-y-5 p-6">
        {/* Username */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Username
          </label>

          <input
            type="text"
            placeholder="e.g. hammad123"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Password */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200"
          />
        </div>

        {/* Bio */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Bio
          </label>

          <textarea
            placeholder="Tell us something about this user..."
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            rows={3}
            required
            className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Profile Image */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Profile Image
          </label>

          <input
            id="profileImage"
            type="file"
            accept="image/*"
            onChange={(e) => {
              setProfileImage(e.target.files?.[0] || null);
            }}
            className="block w-full cursor-pointer rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-500 file:mr-4 file:border-0 file:bg-blue-50 file:px-4 file:py-3 file:text-sm file:font-medium file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-blue-600 px-5 py-3 font-medium text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Creating User..." : "Create User"}
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
