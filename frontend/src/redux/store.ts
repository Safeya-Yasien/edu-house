import { configureStore } from "@reduxjs/toolkit";
import courses from "./courses/coursesSlice";

export const store = configureStore({
  reducer: {
    courses,
  },
});

// Export store's types for use in your components
export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
