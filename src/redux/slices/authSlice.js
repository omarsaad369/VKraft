import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,      
  userType: null,          
  user: null,              
  users: [],               
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
 
    login: (state, action) => {
      state.isLoggedIn = true;
      state.userType = action.payload.userType;
      state.user = action.payload.user;
    },

 
    logout: (state) => {
      state.isLoggedIn = false;
      state.userType = null;
      state.user = null;
    },

     registerUser: (state, action) => {
      state.users.push(action.payload);
    },
 
    updateUser: (state, action) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },
 
    setUser: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
  },
});

export const { login, logout, registerUser, updateUser, setUser } = authSlice.actions;
export default authSlice.reducer;
