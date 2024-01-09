import { createSlice } from "@reduxjs/toolkit";

const searchResultSlice = createSlice({
  name: "searchResult",
  initialState: {
    videosList: [],
    nextPageToken: "",
  },
  reducers: {
    addVideos: (state, action) => {
      state.videosList = [...state.videosList, ...action.payload.items];
      state.nextPageToken = action.payload.nextPageToken;
    },
    clearVideosList: (state) => {
      state.videosList.length = 0;
      state.nextPageToken = "";
    },
  },
});

export default searchResultSlice.reducer;
export const { addVideos, clearVideosList } = searchResultSlice.actions;
