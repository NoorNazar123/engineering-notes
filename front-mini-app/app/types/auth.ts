import type { User } from "./user";

export type AuthState = {
  accessToken: string | null;
  user: User | null;
  isAuthenticated: boolean;
  isInitializing: boolean;
};
