import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@/app/types/user";

type UsersState = {
  users: User[];
  loading: boolean;
};

const initialState: UsersState = {
  users: [],
  loading: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },

    updateUser: (state, action: PayloadAction<User>) => {
      const index = state.users.findIndex(
        (user) => user.id === action.payload.id,
      );

      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },

    removeUser: (state, action: PayloadAction<number>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const {
  setUsers,
  setLoading,
  addUser,
  updateUser,
  removeUser,
} = usersSlice.actions;

export default usersSlice.reducer;
