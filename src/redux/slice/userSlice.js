import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Register User
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:3000/auth/user/register", userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: "Registration failed" });
    }
  }
);

// Login User
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:3000/auth/user/login", userData, {
        withCredentials: true,
      });
      const { token, user } = response.data;
      localStorage.setItem("userToken", token);
      return { user, token };
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: "Invalid Credentials" });
    }
  }
);

// Update User Address
export const updateUserAddress = createAsyncThunk(
  "updateUserAddress",
  async (  address , { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("userToken");
      // console.log(token)
      const response = await axios.put(
        `http://localhost:3000/auth/user/address`,
         {address} ,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      return response.data.user; // Return updated user
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: "Failed to update address" });
    }
  }
);

export const updateUserWallet = createAsyncThunk(
  "user/updateWallet",
  async (totalPrice, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("userToken"); // Get JWT token from localStorage
      const response = await axios.put(
        "http://localhost:3000/auth/user/wallet",
        { totalPrice }, // Send totalPrice in the request body
        { headers: { Authorization: `Bearer ${token}` } } // Include token for authentication
      );

      return response.data.wallet; // Return updated wallet balance
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Wallet update failed");
    }
  }
);


// Logout User
export const logoutUser = createAsyncThunk("user/logoutUser", async () => {
  localStorage.removeItem("userToken");
  return null;
});

// User Slice
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    token: localStorage.getItem("userToken") || null,
    isLoading: false,
    isError: false,
    errorMessage: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Register User
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        localStorage.setItem("userToken", action.payload.token);
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload?.message || "Something went wrong";
      })

      // Login User
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        localStorage.setItem("userToken", action.payload.token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload?.message || "Login failed";
      })

      // Update User Address
      .addCase(updateUserAddress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUserAddress.fulfilled, (state, action) => {
        state.isLoading = false;
        if (state.user) {
          state.user.address = action.payload.address; // Update user address in state
        }
      })
      .addCase(updateUserAddress.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload?.message || "Failed to update address";
      })

      // Logout User
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.token = null;
      });


      //user wallet
      builder
      .addCase(updateUserWallet.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateUserWallet.fulfilled, (state, action) => {
        state.status = "succeeded";
        if (state.user) {
          state.user.wallet = action.payload; // Update wallet balance
        }
      })
      .addCase(updateUserWallet.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});





export default userSlice.reducer;
