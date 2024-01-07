import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const cache = useSelector((store) => store.cache);

  useEffect(() => {
    // make an api call after every key press
    // but if the difference between 2 API calls is <200ms
    // decline the API call
    const timer = setTimeout(() => {
      if (cache[searchQuery]) {
        setSearchSuggestions(cache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  /**
   *
   * key - i
   * - render the component
   * - useEffect()
   * - start timer => make api call after 200ms
   *
   * key - ip
   * - destroy the component ( useEffect return method gets called)
   * - render the component
   * - useEffect()
   * - start timer => make api call after 200ms
   */

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API(searchQuery));
    const jsonData = await data.json();
    setSearchSuggestions(jsonData[1]);
    dispatch(
      cacheResults({
        [searchQuery]: jsonData[1],
      })
    );
  };
  return (
    <div className="w-[100%] grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex h-[100%] items-center col-span-1">
        <img
          className="h-8 cursor-pointer"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0MAAUOBQikpKQpJSadnZ309PUAAAAIAADZ2Nj8/Pyop6cYExXBwMAtKSpta2xpZ2draWpfXV7BwcGvrq77CGWbAAABG0lEQVR4nO3cwXKCMBQFUApFTQAVtf3/Ty3tsKhLZpKSxnP+4M57JCwyt2kAAAAAAAAAAAAAAADgFQ1TX4ZpyJJvvIXYlSGGecyQcI5v5Yi39AGHsHeqJyH9ovYljXAZ4qeEm9W/pc29pCHmOGma8R7iexky3RbLovbHMvR5bnwAAAAAAAAAANhkPJUhV77hcT2U4frI8mToI5zbUpzDJX3A06Hd+7neL22X/mHbpbDXl+mHeOz2DvUk9skT1j/D+r/DZYiVn6UvcB9+2/tnZpUrHgAAAAAAAAAAbDBMe5ftrXK17M619yZq2f1bGfpLp5JGmKWDtv6E9W9p/SfNz22xdxn7Kl/LbuW9+gAAAAAAAAAAAAAAAPCffAHLSDTi5JU+gwAAAABJRU5ErkJggg=="
          alt="menu"
          onClick={() => dispatch(toggleMenu())}
        />
        <img
          className="h-12"
          src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
          alt="yt-logo"
        />
      </div>

      <div className="flex-col items-center w-[100%] col-span-10 justify-center">
        <div className="flex items-center h-[80%]">
          <input
            className="border px-5 py-2 border-gray-400 h-[80%] w-1/2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border h-[80%] border-gray-400 px-5 py-2 box-border rounded-r-full bg-gray-100">
            <img
              className="h-5"
              src="https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png"
              alt="search"
            />
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute bg-white py-2 px-5 w-[35rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {searchSuggestions.map((suggestion, index) => (
                <li
                  className="flex items-center py-2 shadow-sm hover:bg-gray-100"
                  key={index}
                >
                  <img
                    className="h-3 mr-2"
                    src="https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png"
                    alt="search"
                  />
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1 flex items-center">
        <img
          className="h-8"
          alt="user-icon"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Header;
