import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AuthState } from "@/app/types/auth";
import type { User } from "@/app/types/user";

const initialState: AuthState = {
  accessToken: null,
  user: null,
  isAuthenticated: false,
  isInitializing: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    setCredentials: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
      state.isAuthenticated = true;

      if (typeof window !== "undefined") {
        localStorage.setItem("accessToken", action.payload);
      }
    },

    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },

    loadCredentials: (state) => {
      if (typeof window !== "undefined") {
        const token = localStorage.getItem("accessToken");

        if (token) {
          state.accessToken = token;
          state.isAuthenticated = true;
        }
      }
    },

    setAuthInitialized: (state) => {
      state.isInitializing = false;
    },

    logout: (state) => {
      state.accessToken = null;
      state.user = null;
      state.isAuthenticated = false;

      if (typeof window !== "undefined") {
        localStorage.removeItem("accessToken");
      }
    },
  },
});

export const {
  setCredentials,
  setUser,
  loadCredentials,
  setAuthInitialized,
  logout,
} = authSlice.actions;

export default authSlice.reducer;
