import { configureStore } from "@reduxjs/toolkit";
import { UsersReducer } from "./reducers/usersReducer";

export const store = configureStore({
  reducer: {
    Users: UsersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

