import { createSlice } from "@reduxjs/toolkit";

interface TimeState {
  date: string;
  timezone: string;
}

const initialState: TimeState = {
  date: new Date().toISOString(),
  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
};

const timeSlice = createSlice({
  name: "time",
  initialState,
  reducers: {
    updateTime: (state) => {
      state.date = new Date().toISOString();
    },
  },
});

export const { updateTime } = timeSlice.actions;

export default timeSlice.reducer;
