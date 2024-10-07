import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { register, login } from "./authService";

export const signup = createAsyncThunk("auth/signup", async (signupData) => {
  try {
    const response = await register(signupData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error in signup thunk", error);
  }
});

export const signin = createAsyncThunk("auth/signin", async (SigninData) => {
  try {
    const response = await login(SigninData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error in signin", error);
    throw (
      error.response?.data?.message || error.message || "Something went wrong"
    );
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    email: null,
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.loading = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.loading = false;
        state.email = action.payload.data.email;
        state.message = action.payload.message;
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(signin.pending, (state) => {
        state.loading = true;
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.loading = false;
        state.email = action.payload.data.email;
        state.message = action.payload.message;
      })
      .addCase(signin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default authSlice.reducer;
