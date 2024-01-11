import { createSlice } from "@reduxjs/toolkit";

const userPlaylistsSlice = createSlice({
  name: "userPlaylists",
  initialState: {
    playlists: {
      watchLater: [],
      favourites: [],
    },
  },
  reducers: {
    addToWatchLater: (state, action) => {
      let isAlreadyThere = false;
      state.playlists.watchLater.forEach((video) => {
        if (video.items[0].id === action.payload.items[0].id) {
          isAlreadyThere = true;
        }
      });
      !isAlreadyThere && state.playlists.watchLater.push(action.payload);
    },
    addToFavourites: (state, action) => {
      let isAlreadyThere = false;
      state.playlists.favourites.forEach((video) => {
        if (video.items[0].id === action.payload.items[0].id) {
          isAlreadyThere = true;
        }
      });
      !isAlreadyThere && state.playlists.favourites.push(action.payload);
    },
    clearAllPlaylists: (state) => {
      state.playlists.watchLater.length = 0;
      state.playlists.favourites.length = 0;
    },
    removeFromWatchLater: (state, action) => {
      const newArr = state.playlists.watchLater.filter(
        (video) => video.items[0].id !== action.payload
      );
      state.playlists.watchLater = newArr;
    },
    removeFromFavourites: (state, action) => {
      const newArr = state.playlists.favourites.filter(
        (video) => video.items[0].id !== action.payload
      );
      state.playlists.favourites = newArr;
    },
  },
});

export const {
  addToFavourites,
  addToWatchLater,
  clearAllPlaylists,
  removeFromFavourites,
  removeFromWatchLater,
} = userPlaylistsSlice.actions;
export default userPlaylistsSlice.reducer;
