import React, { useEffect, useState } from "react";
import {
  addToFavourites,
  addToWatchLater,
  removeFromFavourites,
  removeFromWatchLater,
} from "../utils/userPlaylistsSlice";
import { useDispatch, useSelector } from "react-redux";
import { IoMdClose } from "react-icons/io";

const SaveModal = ({ videoDetails, setShowSaveModal }) => {
  const dispatch = useDispatch();
  const [watchLater, setWatchLater] = useState(false);
  const [favourites, setFavourites] = useState(false);

  const watchLaterVideos = useSelector(
    (store) => store.userPlaylists.playlists.watchLater
  );
  const favVideos = useSelector(
    (store) => store.userPlaylists.playlists.favourites
  );
  console.log(watchLaterVideos);
  console.log(videoDetails?.items[0]?.id);
  console.log(watchLater);

  useEffect(() => {
    watchLaterVideos.forEach((video) => {
      if (video?.items[0]?.id === videoDetails?.items[0]?.id) {
        setWatchLater(true);
      }
    });
  }, [watchLaterVideos]);

  useEffect(() => {
    favVideos.forEach((video) => {
      if (video?.items[0]?.id === videoDetails?.items[0]?.id) {
        setFavourites(true);
      }
    });
  }, [favVideos]);

  return (
    <div className="fixed left-[50%] top-[50%] right-[50%] border border-slate-200 bg-white p-3 w-[20%] rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg">Save video to...</h1>
        <IoMdClose
          className="cursor-pointer"
          onClick={() => setShowSaveModal(false)}
        />
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          value={watchLater}
          checked={watchLater}
          onChange={() => {
            setWatchLater(!watchLater);
            if (!watchLater) {
              dispatch(addToWatchLater(videoDetails));
            } else {
              dispatch(removeFromWatchLater(videoDetails?.items[0]?.id));
            }
          }}
          className="mr-2"
        />
        Watch Later
      </div>

      <div>
        <input
          type="checkbox"
          value={favourites}
          checked={favourites}
          onChange={() => {
            setFavourites(!favourites);
            if (!favourites) {
              dispatch(addToFavourites(videoDetails));
            } else {
              dispatch(removeFromFavourites(videoDetails?.items[0]?.id));
            }
          }}
          className="mr-2"
        />
        Favourites
      </div>
    </div>
  );
};

export default SaveModal;
