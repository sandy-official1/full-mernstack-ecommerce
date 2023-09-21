import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/ProductList.js/ProductListSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
