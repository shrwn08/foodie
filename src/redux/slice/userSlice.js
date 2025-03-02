import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk(
  "registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/user/register",
        userData
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: "Registration failed" }
      );
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userData, {rejectWithValue}) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/user/login",
        userData,
        { withCredentials: true }
      );
      const {token} = response.data
      localStorage.setItem("userToken",token)
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: "Invaild Credential" }
      );
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: null,
    user: null,
    token: null,
    isError: false,
    isLoading: false,
    errorMessage: "",
  },
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("userToken");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true;
       state.isError = false;
        state.errorMessage = "";
    });

    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.token = action.payload.token;
      localStorage.setItem("userToken", action.payload.token)
    });

    builder.addCase(registerUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload?.message || "Something went wrong";
      console.log("Error", action.payload);
    });

    builder.addCase(loginUser.pending, (state)=>{
        state.isLoading = true;
    });

    builder.addCase(loginUser.fulfilled, (state,action)=>{
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        localStorage.setItem("userToken", action.payload.token);
    });
    builder.addCase(loginUser.rejected, (state, ) => {
        state.isLoading = false;
        state.isError = true;
      
      });
  },
});
export const {logoutUser} = userSlice.actions;
export default userSlice.reducer;
