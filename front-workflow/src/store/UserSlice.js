import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import jwtDecode from 'jwt-decode';

const URL = "http://localhost:3000/api/v1/auth/login";
// const URL = "https://workflow-api-qa.onrender.com/api/v1/auth/login"

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userCredentials) => {
    const request = await axios.post(
      URL,
      new URLSearchParams(userCredentials),
      {
        headers: { accept: "application/json" },
      }
    );
    const response = await request.data;
    // localStorage.setItem("user", JSON.stringify(response));
    return response;
  }
);

const initialState = {
  loading: false,
  user: null,
  error: null,
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    localUser: (state, action) => {
      state.loading = false;
      state.user = action.payload
      state.error = null;
    },
    logout: (state) => (state = initialState),
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = jwtDecode(action.payload.token);
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.error.message;
      });
  },
});

export const { localUser, logout } = UserSlice.actions;
export default UserSlice.reducer;