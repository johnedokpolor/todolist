import { createSlice } from "@reduxjs/toolkit";

const darkModeSlice = createSlice({
  name: "darkmode",
  initialState: { dark: false },
  reducers: {
    toggle(state) {
      state.dark = !state.dark;
    },
  },
});

export const darkmodeActions = darkModeSlice.actions;
export default darkModeSlice;
