import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import cacheSlice from './searchSlice'

const appStore = configureStore({
  reducer: {
    app: appSlice,
    cache: cacheSlice
  },
});

export default appStore;
