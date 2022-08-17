import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import assignmentService from "./assignmentService";

const initialState = {
  assignments: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Create Assignment
export const createAssignment = createAsyncThunk(
  "assignment/create",
  async (assignmentData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await assignmentService.createAssignment(assignmentData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getAssignments = createAsyncThunk(
  "assignments/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await assignmentService.getAssignments(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

const assignmentSlice = createSlice({
  name: "assignment",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createAssignment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createAssignment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.assignments.push(action.payload);
      })
      .addCase(createAssignment.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getAssignments.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAssignments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.assignments = action.payload;
      })
      .addCase(getAssignments.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = assignmentSlice.actions;

export default assignmentSlice.reducer;
