import { axiosInstance } from "@/services/axiosConfig";
import { TCourse } from "@/types/courseType";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

type TResponse = TCourse[];

export const actGetCourses = createAsyncThunk(
  "users/fetchByIdStatus",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axiosInstance<TResponse>({
        url: "/courses",
        method: "GET",
        headers: { Authorization: `Bearer ${Cookies.get("token")}` },
      });

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data || error.message);
      }
      return rejectWithValue("An expected error occurred");
    }
  }
);
