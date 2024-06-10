import { createSlice } from "@reduxjs/toolkit";

interface DetailsState {
  isOpen: boolean;
}

const initialState: DetailsState = {
  isOpen: false,
};

const detailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { open } = detailsSlice.actions;

export default detailsSlice.reducer;
