import axios from "axios";
const KEY = "AIzaSyBLWOuDnCiz7zLrXfZIhmcoBUA9V3MRbF4";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 4,
        key: KEY
    },
    headers: {}
});