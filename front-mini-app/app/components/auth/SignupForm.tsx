"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { signupUser } from "@/app/lib/authService";

export default function SignupForm() {
  const router = useRouter();

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [bio, setBio] = React.useState("");
  const [profileImage, setProfileImage] = React.useState<File | null>(null);

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError("");
    setSuccess("");

    if (!profileImage) {
      setError("Please select a profile image.");
      return;
    }

    setLoading(true);

    try {
      await signupUser({
        username,
        password,
        bio,
        profile_image: profileImage,
      });

      setSuccess("Account created successfully!");

      setUsername("");
      setPassword("");
      setBio("");
      setProfileImage(null);

      setTimeout(() => {
        router.push("/login");
      }, 1000);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Username */}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        required
        className="w-full rounded-xl border border-gray-400 px-4 py-3 outline-none focus:border-gray-400"
      />

      {/* Password */}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
        className="w-full rounded-xl border border-gray-400 px-4 py-3 outline-none focus:border-gray-400"
      />

      {/* Bio */}
      <textarea
        placeholder="Bio"
        value={bio}
        onChange={(event) => setBio(event.target.value)}
        required
        rows={3}
        className="w-full resize-none rounded-xl border border-gray-400 px-4 py-3 outline-none focus:border-gray-400"
      />

      {/* Profile Image */}
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
          required
          className="w-full rounded-xl border border-gray-400 bg-white px-4 py-3 text-sm"
        />
      </div>

      {/* Error */}
      {error && <p className="text-sm text-red-500">{error}</p>}

      {/* Success */}
      {success && <p className="text-sm text-green-600">{success}</p>}

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-gray-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-gray-800 disabled:opacity-50"
      >
        {loading ? "Creating account..." : "Create account"}
      </button>
    </form>
  );
}
