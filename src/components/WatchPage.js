import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import { youtubeVideoDetailsApi } from "../utils/constants";
import { SlOptions } from "react-icons/sl";
import { CgPlayListAdd } from "react-icons/cg";
import SaveModal from "./SaveModal";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const [videoDetails, setVideoDetails] = useState(null);
  const [showOptionsModal, setShowOptionsModal] = useState(false);
  const [showSaveModal, setShowSaveModal] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
    fetchVideoDetails();
  }, []);

  const fetchVideoDetails = async () => {
    const data = await fetch(youtubeVideoDetailsApi(videoId));
    const jsonData = await data.json();
    setVideoDetails(jsonData);
  };

  if (!videoDetails) {
    return;
  }

  const { snippet } = videoDetails?.items[0];
  const { title, channelTitle, description } = snippet;

  return (
    <>
      <div
        className={`flex-col w-full ${
          showSaveModal
          // &&
          // "bg-black bg-opacity-50"
        }`}
        onClick={() => {
          showSaveModal && setShowSaveModal(false);
        }}
      >
        <div className="px-5 flex">
          <div>
            <iframe
              width="1000"
              height="500"
              src={`https://www.youtube.com/embed/${videoId}?si=R6VwVVoOFDQoQ04O?&autoplay=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <h1 className="font-extrabold text-xl mt-2">{title}</h1>
            <div className="flex justify-between items-center mr-4">
              <h1 className="font-bold text-lg mt-2">{channelTitle}</h1>
              <div className="rounded-[100%] bg-gray-100 p-3 text-center flex items-center">
                <SlOptions
                  className="cursor-pointer"
                  onClick={() => setShowOptionsModal(!showOptionsModal)}
                />
                {showOptionsModal && (
                  <div className="absolute bg-white ml-7 rounded-lg shadow-lg border-gray-50 px-5 py-2">
                    <button
                      className="flex w-full items-center text-lg"
                      onClick={() => {
                        setShowSaveModal(!showSaveModal);
                        setShowOptionsModal(false);
                      }}
                    >
                      <CgPlayListAdd className="mr-2" /> Save
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="w-full">
            <LiveChat />
          </div>
        </div>
        <CommentsContainer />
      </div>
      {showSaveModal && (
        <SaveModal
          videoDetails={videoDetails}
          setShowSaveModal={setShowSaveModal}
        />
      )}
    </>
  );
};

export default WatchPage;
