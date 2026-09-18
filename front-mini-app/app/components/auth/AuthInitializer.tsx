"use client";

import React from "react";

import { useAppDispatch } from "@/app/store/hooks";

import {
  logout,
  setAuthInitialized,
  setCredentials,
  setUser,
} from "@/app/store/slices/authSlice";

import { getUserById, getUserIdFromToken } from "@/app/lib/authService";

export default function AuthInitializer() {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const initializeAuth = async () => {
      const token = localStorage.getItem("accessToken");

      // No saved token
      if (!token) {
        dispatch(setAuthInitialized());
        return;
      }

      try {
        // Restore token into Redux
        dispatch(setCredentials(token));

        // Get user ID from JWT
        const userId = getUserIdFromToken(token);

        // Get current logged-in user
        const user = await getUserById(userId, token);

        // Restore user into Redux
        dispatch(setUser(user));
      } catch (error) {
        // Token is invalid/expired
        if (error instanceof Error && error.message === "AUTH_TOKEN_INVALID") {
          console.log("Session expired. Please login again.");
        } else {
          console.error("Failed to restore authentication:", error);
        }

        // Remove token from browser
        localStorage.removeItem("accessToken");

        // Clear Redux authentication state
        dispatch(logout());
      } finally {
        // Authentication check is complete
        dispatch(setAuthInitialized());
      }
    };

    initializeAuth();
  }, [dispatch]);

  return null;
}
