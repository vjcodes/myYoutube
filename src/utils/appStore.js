import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import cacheSlice from './searchSlice'
import chatSlice from "./chatSlice";
import searchResultSlice from "./searchResultSlice";

const appStore = configureStore({
  reducer: {
    app: appSlice,
    cache: cacheSlice,
    chat: chatSlice,
    searchResult: searchResultSlice
  },
});

export default appStore;
