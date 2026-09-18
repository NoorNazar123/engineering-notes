"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { useAppDispatch } from "@/app/store/hooks";
import { setCredentials, setUser } from "@/app/store/slices/authSlice";
import {
  getUserById,
  getUserIdFromToken,
  loginUser,
} from "@/app/lib/authService";

export default function LoginForm() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);
    setError("");

    try {
      // 1. Login
      const data = await loginUser({
        username,
        password,
      });

      // 2. Save access token
      dispatch(setCredentials(data.access_token));

      // 3. Get logged-in user's ID from JWT
      const userId = getUserIdFromToken(data.access_token);

      // 4. Get complete user data from backend
      const user = await getUserById(userId, data.access_token);

      // 5. Save user + role in Redux
      dispatch(setUser(user));

      console.log("Login successful");
      console.log("User:", user);
      console.log("Role:", user.role);

      // 6. Redirect according to role
      if (user.role === "admin") {
        router.replace("/dashboard");
      } else {
        router.replace("/profile");
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        required
        className="w-full rounded-xl border border-gray-400 px-4 py-3"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
        className="w-full rounded-xl border border-gray-400 px-4 py-3"
      />

      {error && <p className="text-sm text-red-500">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-gray-900 px-4 py-3 text-sm font-medium text-white disabled:opacity-50"
      >
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}
