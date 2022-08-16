import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  assignments: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

const assignmentSlice = createSlice({
  name: "assignment",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
});

export const { reset } = assignmentSlice.actions;

export default assignmentSlice.reducer;
