import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ids: [],
};

const compareSlice = createSlice({
  name: "compare",
  initialState,

  reducers: {
    toggleCompare: (state, action) => {
      const id = String(action.payload);

      if (state.ids.includes(id)) {
        state.ids = state.ids.filter((item) => item !== id);
      } else if (state.ids.length < 3) {
        state.ids.push(id);
      }
    },

    removeCompare: (state, action) => {
      state.ids = state.ids.filter((id) => id !== String(action.payload));
    },

    clearCompare: (state) => {
      state.ids = [];
    },
  },
});

export const { toggleCompare, removeCompare, clearCompare } =
  compareSlice.actions;

export default compareSlice.reducer;
