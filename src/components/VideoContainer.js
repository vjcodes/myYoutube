import React, { useEffect, useState } from "react";
import { youtubeVideosApi } from "../utils/constants";
import VideoCard, { AdVideoCard } from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    console.log(nextPageToken);
    setIsLoading(true);
    const data = await fetch(youtubeVideosApi(nextPageToken));
    const jsonData = await data.json();
    console.log(jsonData);
    setVideos((prev) => [...prev, ...jsonData?.items]);
    console.log(jsonData.nextPageToken);
    setNextPageToken(jsonData.nextPageToken);
    setIsLoading(false);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      getVideos();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);
  
  return (
    <div className="flex flex-wrap justify-start h-[44rem] overflow-y-scroll">
      {/* {videos[0] && <AdVideoCard videoDetails={videos[0]} />} */}
      {videos?.map((video) => (
        <VideoCard key={video?.id} videoDetails={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
