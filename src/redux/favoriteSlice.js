import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ids: JSON.parse(localStorage.getItem("favorites")) || [],
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,

  reducers: {
    toggleFavorite: (state, action) => {
      const id = action.payload;

      if (state.ids.includes(id)) {
        state.ids = state.ids.filter((item) => item !== id);
      } else {
        state.ids.push(id);
      }
    },
  },
});

export const { toggleFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
