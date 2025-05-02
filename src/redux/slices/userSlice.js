

import { createSlice } from "@reduxjs/toolkit";
import initialUsers from "../../data/initialUsers";  
const initialState = {
  users: initialUsers,  
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const { addUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
