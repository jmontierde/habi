import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiRequest } from "@/lib/apiRequest";

// type UserState = {
//     users:
// }

interface RegisterUserData {
  username: string;
  email: string;
  password: string;
}

interface UserState {
  user: string | null;
  isLoading: boolean;
  error: string | null;
  isAuthenticated: boolean;
}

const initialState: UserState = {
  user: "",
  isLoading: false,
  error: null,
  isAuthenticated: false,
};

interface LoginPayload {
  username: string;
  password: string;
}

export const registerUser = createAsyncThunk<void, RegisterUserData>(
  "user/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await apiRequest.post(`/api/auth/register`, userData);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Axios error
        return rejectWithValue(error.response?.data.message);
      } else {
        // Other types of errors
        return rejectWithValue("An error occurred");
      }
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (payload: LoginPayload, { rejectWithValue }) => {
    try {
      const response = await apiRequest.post(`/auth/login`, payload);

      localStorage.setItem("user", JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Axios error
        return rejectWithValue(error.response?.data.message);
      } else {
        // Other types of errors
        return rejectWithValue("An error occurred");
      }
    }
  }
);
export const logoutUser = createAsyncThunk("user/logoutUser", async () => {
  try {
    const response = await apiRequest.post(`/auth/logout`);
    localStorage.removeItem("user");
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Axios error
      throw new Error(error.response?.data.message);
    } else {
      // Other types of errors
      throw new Error("An error occurred");
    }
  }
});

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
        state.isAuthenticated = true;
      }),
      builder.addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string | null;
      });
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = false;
      state.error = null;
    }),
      builder.addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
      }),
      builder.addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string | null;
      });
    builder.addCase(logoutUser.pending, (state) => {
      state.isLoading = false;
      state.error = null;
    }),
      builder.addCase(logoutUser.fulfilled, (state) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
      }),
      builder.addCase(logoutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string | null;
      });
  },
});

export default userSlice.reducer;
