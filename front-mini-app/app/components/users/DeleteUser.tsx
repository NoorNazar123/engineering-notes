"use client";

import React from "react";

import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { removeUser } from "@/app/store/slices/usersSlice";

type DeleteUserProps = {
  userId: number;
};

const DeleteUser = ({ userId }: DeleteUserProps) => {
  const dispatch = useAppDispatch();

  const accessToken = useAppSelector((state) => state.auth.accessToken);

  const [loading, setLoading] = React.useState(false);

  const deleteUser = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (!confirmed) {
      return;
    }

    if (!accessToken) {
      console.error("No access token");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`http://127.0.0.1:8000/users/${userId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        const error = await response.json();

        throw new Error(error.detail || "Failed to delete user");
      }

      console.log("User deleted successfully");

      // Remove user directly from Redux
      dispatch(removeUser(userId));
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={deleteUser}
      disabled={loading}
      className="flex-1 rounded-xl bg-red-50 px-4 py-2.5 text-sm font-medium text-red-600 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {loading ? "Deleting..." : "Delete"}
    </button>
  );
};

export default DeleteUser;
