import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  const videoId = searchParams.get("v");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="p-5">
      <iframe
        width="1000"
        height="500"
        src={`https://www.youtube.com/embed/${videoId}?si=R6VwVVoOFDQoQ04O?&autoplay=1`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
