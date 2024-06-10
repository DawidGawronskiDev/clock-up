import { createSlice } from "@reduxjs/toolkit";

interface TimeState {
  date: Date;
}

const initialState: TimeState = {
  date: new Date(),
};

const timeSlice = createSlice({
  name: "time",
  initialState,
  reducers: {
    updateTime: (state) => {
      state.date = new Date();
    },
  },
});

export const { updateTime } = timeSlice.actions;

export default timeSlice.reducer;
