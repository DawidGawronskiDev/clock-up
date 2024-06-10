import { configureStore } from "@reduxjs/toolkit";
import timeReducer from "./timeSlice";
import detailsReducer from "./details";

const store = configureStore({
  reducer: {
    time: timeReducer,
    details: detailsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
