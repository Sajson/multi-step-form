import { configureStore } from "@reduxjs/toolkit";
import { appSlice } from "./appSlice";

export const store = configureStore({
  reducer: appSlice.reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
