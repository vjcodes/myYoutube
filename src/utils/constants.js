const GOOGLE_API_KEY = "AIzaSyDOxu8-pg7PBHASk052CChZHKEu0PNwj1s";
export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_SEARCH_API = (query) =>
  `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${query}`;

export const YOUTUBE_SEARCH_LIST_API = (query) =>
  `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&type=video&key=${GOOGLE_API_KEY}`;
