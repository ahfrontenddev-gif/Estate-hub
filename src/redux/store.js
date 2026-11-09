import { configureStore } from "@reduxjs/toolkit";
import { propertyApi } from "../data/apiProperty";
import favoriteReducer from "./favoriteSlice";
import compareReducer from "./compareSlice";
import { authApi } from "../data/apiAuth";

export const store = configureStore({
  reducer: {
    [propertyApi.reducerPath]: propertyApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    favorites: favoriteReducer,
    compare: compareReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      propertyApi.middleware,
      authApi.middleware,
    );
  },
});

store.subscribe(() => {
  const ids = store.getState().favorites.ids;

  localStorage.setItem("favorites", JSON.stringify(ids));
});
