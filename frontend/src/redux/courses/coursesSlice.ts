import { TCourse } from "@/types/courseType";
import { TLoading } from "@/types/shared";
import { createSlice } from "@reduxjs/toolkit";
import { actGetCourses } from "./actGetCourses";

// Define a type for the slice state
interface ICourseState {
  courses: TCourse[];
  loading: TLoading;
  error: string | null;
}

// Define the initial state using that type
const initialState: ICourseState = {
  courses: [],
  loading: "idle",
  error: null,
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actGetCourses.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(actGetCourses.fulfilled, (state, action) => {
        state.loading = "succeeded";a
        state.courses = action.payload;
      })
      .addCase(actGetCourses.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload as string;
      });
  },
});


export default coursesSlice.reducer;
