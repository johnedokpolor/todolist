import { configureStore } from "@reduxjs/toolkit";
import darkModeSlice from "./darkModeSlice";
const store = configureStore({
  reducer: {
    darkmode: darkModeSlice.reducer,
  },
});

export default store;
