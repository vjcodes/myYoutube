import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import cacheSlice from './searchSlice'
import chatSlice from "./chatSlice";
import searchResultSlice from "./searchResultSlice";
import userSlice from "./userSlice";

const appStore = configureStore({
  reducer: {
    app: appSlice,
    cache: cacheSlice,
    chat: chatSlice,
    searchResult: searchResultSlice,
    user: userSlice
  },
});

export default appStore;
