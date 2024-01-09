const GOOGLE_API_KEY = "AIzaSyBSZKOH-gE5JMTtLMJ0NPJUt7Nz94-0eBU";
export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_SEARCH_API = (query) =>
  `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${query}`;

export const YOUTUBE_SEARCH_LIST_API = (query, nextPageToken) =>
  `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&pageToken=${nextPageToken}&q=${query}&type=video&key=${GOOGLE_API_KEY}`;

export const LIVE_CHAT_COUNT = 10;
