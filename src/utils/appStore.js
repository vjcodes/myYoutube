import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import cacheSlice from './searchSlice'
import chatSlice from "./chatSlice";

const appStore = configureStore({
  reducer: {
    app: appSlice,
    cache: cacheSlice,
    chat: chatSlice
  },
});

export default appStore;
