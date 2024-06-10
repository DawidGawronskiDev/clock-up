import { configureStore } from "@reduxjs/toolkit";
import timeReducer from "./timeSlice";

const store = configureStore({
  reducer: {
    time: timeReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
