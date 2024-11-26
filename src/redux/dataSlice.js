import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk(
  "data/fetchData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:3000/api/cars");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message); // Pass error message to reducer
    }
  }
);

export const createData = createAsyncThunk(
  "data/createData",
  async (postData, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:3000/api/cars", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData),
      });
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      const newData = response.json();
      return newData;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.message);
    }
  }
);

export const deleteData = createAsyncThunk(
  "data/deleteData",
  async (deletedId, { rejectWithValue }) => {

    try {
      const response = await fetch(
        `http://localhost:3000/api/cars/${deletedId}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      const newData = await response.json();
      return newData;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.message);
    }
  }
);

const dataSlice = createSlice({
  name: "cars",
  initialState: {
    data: [],
    loading: false,
    error: null,
    success: false,
  },
  
  
  reducers: {
    resetSuccess: (state) => {
      state.success = false; // Reset the success field
    },
  },

  

  extraReducers: (builder) => {
    builder

      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        (state.loading = false), (state.error = action.payload);
      })
      .addCase(createData.pending, (state) => {
        state.success = false;
        state.loading = true;
        state.error = null;
      })
      .addCase(createData.fulfilled, (state, action) => {
        state.loading = false;
        state.data.push(action.payload);
        state.success = true;
        console.log(state.success);
        
      })
      .addCase(createData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(deleteData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default dataSlice.reducer;
export const { resetSuccess } = dataSlice.actions;
