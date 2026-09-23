"use client";

import React from "react";

import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { logout } from "@/app/store/slices/authSlice";
import { API_URL } from "../lib/api";

type AIBioImproverProps = {
  currentBio: string;
  onBioGenerated: (bio: string) => void;
};

export default function AIBioImprover({
  currentBio,
  onBioGenerated,
}: AIBioImproverProps) {
  const dispatch = useAppDispatch();
  const accessToken = useAppSelector((state) => state.auth.accessToken);

  const [generatedBio, setGeneratedBio] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleGenerate = async () => {
    if (!accessToken) {
      setError("You are not authenticated.");
      return;
    }

    if (!currentBio.trim()) {
      setError("Write a short description first so AI can improve it.");
      return;
    }

    setLoading(true);
    setError("");
    setGeneratedBio("");

    try {
      const response = await fetch(`${API_URL}/ai/generate-bio`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          description: currentBio.trim(),
        }),
      });

      if (response.status === 401) {
        dispatch(logout());
        return;
      }

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.detail || "Failed to generate bio");
      }

      const data: { bio: string } = await response.json();

      setGeneratedBio(data.bio);
    } catch (error) {
      console.error("AI bio error:", error);

      setError(
        error instanceof Error
          ? error.message
          : "Failed to generate bio. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleUseBio = () => {
    if (!generatedBio) {
      return;
    }

    onBioGenerated(generatedBio);
    setGeneratedBio("");
    setError("");
  };

  return (
    <div className="mt-4">
      <button
        type="button"
        onClick={handleGenerate}
        disabled={loading || !currentBio.trim()}
        className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-700 transition hover:bg-blue-100 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? (
          <>
            <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-blue-300 border-t-blue-700" />
            Improving...
          </>
        ) : (
          <>
            <span>✨</span>
            Improve with AI
          </>
        )}
      </button>

      {error && (
        <div className="mt-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3">
          <p className="text-xs text-red-600">{error}</p>
        </div>
      )}

      {generatedBio && (
        <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
              AI Generated Bio
            </p>

            <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600">
              Ready
            </span>
          </div>

          <p className="mt-4 text-sm leading-7 text-gray-700">{generatedBio}</p>

          <button
            type="button"
            onClick={handleUseBio}
            className="mt-5 rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
          >
            Use This Bio
          </button>
        </div>
      )}
    </div>
  );
}
