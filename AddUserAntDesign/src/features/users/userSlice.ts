import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface User {
  id: string;
  name: string;
  email: string;
}

interface UserState {
  list: User[];
}

const initialState: UserState = {
  list: [],
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<User>) {
      state.list.push(action.payload);
    },
    updateUser(state, action: PayloadAction<User>) {
      const index = state.list.findIndex(u => u.id === action.payload.id);
      if (index > -1) {
        state.list[index] = action.payload;
      }
    },
    deleteUser(state, action: PayloadAction<string>) {
      state.list = state.list.filter(u => u.id !== action.payload);
    },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
