"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { useAppSelector } from "@/app/store/hooks";

type ProtectedRouteProps = {
  children: React.ReactNode;
  adminOnly?: boolean;
};

export default function ProtectedRoute({
  children,
  adminOnly = false,
}: ProtectedRouteProps) {
  const router = useRouter();

  const accessToken = useAppSelector((state) => state.auth.accessToken);

  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  const isInitializing = useAppSelector((state) => state.auth.isInitializing);

  const user = useAppSelector((state) => state.auth.user);

  React.useEffect(() => {
    if (isInitializing) {
      return;
    }

    if (!accessToken || !isAuthenticated) {
      router.replace("/login");
      return;
    }

    if (adminOnly && user?.role !== "admin") {
      router.replace("/profile");
    }
  }, [isInitializing, accessToken, isAuthenticated, user, adminOnly, router]);

  if (isInitializing) {
    return null;
  }

  if (!accessToken || !isAuthenticated) {
    return null;
  }

  if (adminOnly && user?.role !== "admin") {
    return null;
  }

  return <>{children}</>;
}
