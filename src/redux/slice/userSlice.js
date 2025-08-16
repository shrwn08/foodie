import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../../config/config";

// Load persisted data
const token = localStorage.getItem("accessToken") || null;
const user = JSON.parse(localStorage.getItem("user")) || null;

// Register User
export const registerUser = createAsyncThunk(
  "user/register",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${config}/auth/user/register`,
        userData,
        { headers: { "Content-Type": "application/json" } }
      );

      const { accessToken, user } = response.data;
      return { user, token: accessToken };
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: "Registration failed" }
      );
    }
  }
);

// Login User
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${config}/auth/user/login`,
        userData,
        { headers: { "Content-Type": "application/json" }, withCredentials: true }
      );

      const { accessToken, user } = response.data;
      return { user, token: accessToken };
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: "Invalid Credentials" }
      );
    }
  }
);

// Update User Address
export const updateUserAddress = createAsyncThunk(
  "user/updateAddress",
  async (address, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios.put(
        `http://localhost:3000/auth/user/address`,
        { address },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      return response.data.user;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: "Failed to update address" }
      );
    }
  }
);

// Update User Wallet
export const updateUserWallet = createAsyncThunk(
  "user/updateWallet",
  async (totalPrice, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios.put(
        "http://localhost:3000/auth/user/wallet",
        { totalPrice },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      return response.data.wallet;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Wallet update failed"
      );
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: user,
    token: token,
    isAuthenticated: !!token,
    isLoading: false,
    isError: false,
    errorMessage: "",
  },
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        localStorage.setItem("accessToken", action.payload.token);
        localStorage.setItem("user", JSON.stringify(action.payload.user));
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload?.message || "Something went wrong";
      })

      // Login
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        localStorage.setItem("accessToken", action.payload.token);
        localStorage.setItem("user", JSON.stringify(action.payload.user));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload?.message || "Login failed";
      })

      // Update Address
      .addCase(updateUserAddress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUserAddress.fulfilled, (state, action) => {
        state.isLoading = false;
        if (state.user) {
          state.user.address = action.payload.address;
          localStorage.setItem("user", JSON.stringify(state.user));
        }
      })
      .addCase(updateUserAddress.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage =
          action.payload?.message || "Failed to update address";
      })

      // Update Wallet
      .addCase(updateUserWallet.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUserWallet.fulfilled, (state, action) => {
        state.isLoading = false;
        if (state.user) {
          state.user.wallet = action.payload;
          localStorage.setItem("user", JSON.stringify(state.user));
        }
      })
      .addCase(updateUserWallet.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage =
          action.payload?.message || "Failed to update wallet";
      });
  },
});

export const { logoutUser } = userSlice.actions;
export default userSlice.reducer;
