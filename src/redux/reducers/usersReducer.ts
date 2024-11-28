import { UsersService } from "@/services/usersService";
import { User } from "@/type/User";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk<User[], void>(
  "users/fetchUsers",
  async () => {
    const users = await UsersService.getUsers();
    return users;
  }
);

interface UsersState {
  Users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  Users: [],
  loading: false,
  error: null,
};

const UsersSlice = createSlice({
  name: "Users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.Users = action.payload;
    });

    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Error fetching Userss";
    });
  },
});

export const UsersReducer = UsersSlice.reducer;
