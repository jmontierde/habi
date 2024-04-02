import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// type UserState = {
//     users:
// }

interface RegisterUserData {
  username: string;
  email: string;
  password: string;
}

interface UserState {
  isLoading: boolean;
  error: string | null;
  registered: boolean;
}

const initialState: UserState = {
  isLoading: false,
  error: null,
  registered: false,
};

interface ApiError {
  message: string;
  // Add other error properties if your API provides them
}

export const registerUser = createAsyncThunk<void, RegisterUserData>(
  "user/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/register",
        userData
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error as ApiError);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = false;
      state.error = null;
    }),
      builder.addCase(registerUser.fulfilled, (state) => {
        state.isLoading = false;
        state.registered = true;
      }),
      builder.addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "An error occurred";
      });
  },
});

export default userSlice.reducer;
