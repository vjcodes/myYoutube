import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const jsonData = await data.json();
    setVideos(jsonData?.items);
  };
  return (
    <div className="flex flex-wrap justify-start">
      {videos?.map((video) => (
        <VideoCard key={video?.id} videoDetails={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
