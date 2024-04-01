import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

// type UserState = {
//     users:
// }

interface User {
  //   id: number;
  username: string;
  email: string;
  password: string;
}
interface UserState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

interface RegisterUserData {
  username: string;
  email: string;
  password: string;
  // Add more fields as needed
}

const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
};

export const registerUser = createAsyncThunk<RegisterUserData>(
  "user/registerUser",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/register",
        userData
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error); // Pass the error response to the rejected action payload
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.loading = false;
      state.error = null;
    }),
      builder.addCase(
        registerUser.fulfilled,
        (state, action: PayloadAction<User>) => {
          state.loading = false;
          state.error = null;
          state.user = action.payload;
        }
      ),
      builder.addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred";
      });
  },
});

export default userSlice.reducer;
