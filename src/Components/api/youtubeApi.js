import axios from "axios";
const KEY = "AIzaSyA21nfCV-4zlpREg6fwp6W5F-YTuX1Tx2s";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY
    },
    headers: {}
});