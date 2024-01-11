import React, { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_LIST_API } from "../utils/constants";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addVideos, clearVideosList } from "../utils/searchResultSlice";
import SearchResultVideoCard from "./SearchResultVideoCard";

const SearchResultsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const searchQuery = searchParams.get("search_query");

  const videosList = useSelector((store) => store.searchResult.videosList);
  const nextPageToken = useSelector(
    (store) => store.searchResult.nextPageToken
  );

  useEffect(() => {
    dispatch(clearVideosList());
    fetchSearchResults();
  }, [searchQuery]);

  // const handleScroll = () => {
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop !==
  //       document.documentElement.offsetHeight ||
  //     isLoading
  //   ) {
  //     return;
  //   }
  //   fetchSearchResults();
  // };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      fetchSearchResults();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

  const fetchSearchResults = async () => {
    setIsLoading(true);
    const data = await fetch(
      YOUTUBE_SEARCH_LIST_API(searchQuery, nextPageToken)
    );
    const jsonData = await data.json();
    dispatch(addVideos(jsonData));
    setIsLoading(false);
  };
  return (
    <div className="p-4 w-full">
      {videosList?.map((video) => (
        <SearchResultVideoCard key={video.id.videoId} videoDetails={video} />
      ))}
    </div>
  );
};

export default SearchResultsPage;
