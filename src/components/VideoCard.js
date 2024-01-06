import React from "react";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ videoDetails }) => {
  console.log(videoDetails);
  const { snippet, statistics } = videoDetails;
  const { channelTitle, title, thumbnails } = snippet;

  const navigate = useNavigate()
  return (
    <div className="my-5 mx-7 w-96 h-fit shadow-lg"
    onClick={()=>navigate(`/watch?v=${videoDetails?.id}`)}
    >
      <img
        className="h-[80%] w-[100%] rounded-lg"
        src={thumbnails?.high?.url}
        alt="video-img"
      />
      <div className="p-2">
        <h1 className="font-bold">{title}</h1>
        <h2>{channelTitle}</h2>
        <div>
          <h2>{statistics?.viewCount} views</h2>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
