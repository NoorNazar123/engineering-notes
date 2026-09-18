"use client";

import React from "react";

import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { updateUser as updateUserInStore } from "@/app/store/slices/usersSlice";
import type { User } from "@/app/types/user";

type UpdateUserProps = {
  userId: number;
  onUpdated: () => void;
};

const UpdateUser = ({ userId, onUpdated }: UpdateUserProps) => {
  const dispatch = useAppDispatch();

  const accessToken = useAppSelector((state) => state.auth.accessToken);

  const currentUser = useAppSelector((state) =>
    state.users.users.find((user) => user.id === userId)
  );

  const [username, setUsername] = React.useState(currentUser?.username ?? "");
  const [bio, setBio] = React.useState(currentUser?.bio ?? "");
  const [password, setPassword] = React.useState("");
  const [profileImage, setProfileImage] = React.useState<File | null>(null);

  const [loading, setLoading] = React.useState(false);

  const updateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!accessToken) {
      console.error("No access token");
      return;
    }

    setLoading(true);

    const formData = new FormData();

    formData.append("username", username);
    formData.append("bio", bio);
    formData.append("password", password);

    if (profileImage) {
      formData.append("profile_image", profileImage);
    }

    try {
      const response = await fetch(`http://127.0.0.1:8000/users/${userId}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: formData,
      });

      if (!response.ok) {
        const error = await response.json();

        throw new Error(error.detail || "Failed to update user");
      }

      const data: User = await response.json();

      console.log("Updated user:", data);

      // Update Redux directly
      dispatch(updateUserInStore(data));

      onUpdated();
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={updateUser} className="space-y-4">
      <div>
        <label className="mb-1.5 block text-xs font-medium text-gray-600">
          Username
        </label>

        <input
          type="text"
          placeholder="New username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-medium text-gray-600">
          Bio
        </label>

        <textarea
          placeholder="New bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          rows={3}
          className="w-full resize-none rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-medium text-gray-600">
          New Password
        </label>

        <input
          type="password"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-medium text-gray-600">
          Profile Image
        </label>

        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            setProfileImage(e.target.files?.[0] || null);
          }}
          className="block w-full cursor-pointer rounded-xl border border-gray-200 bg-white text-xs text-gray-500 file:mr-3 file:border-0 file:bg-gray-100 file:px-3 file:py-2.5 file:text-xs file:font-medium hover:file:bg-gray-200"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-green-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Updating..." : "Save Changes"}
      </button>
    </form>
  );
};

export default UpdateUser;
