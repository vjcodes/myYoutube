import React from "react";
import { useNavigate } from "react-router-dom";

const SearchResultVideoCard = ({ videoDetails }) => {
  const navigate = useNavigate();
  const { snippet } = videoDetails;
  const { thumbnails, title, description, channelTitle } = snippet;
  return (
    <div
      className="flex w-full mb-3 cursor-pointer"
      onClick={() => navigate(`/watch?v=${videoDetails?.id?.videoId}`)}
    >
      <img
        src={thumbnails?.medium?.url}
        alt="vid-img"
        className="rounded-lg mr-2"
      />
      <div className="mr-2">
        <h1 className="font-bold text-xl">{title}</h1>
        <h2>{channelTitle}</h2>
        <h2>{description}</h2>
      </div>
    </div>
  );
};

export default SearchResultVideoCard;
