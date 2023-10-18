import styles from "./VideoPage.module.css";
import waters from "../../Components/assets/images/lilac-waters.jpg";
import React, {useState, useEffect, useContext} from "react";
import axios from "axios";
import {AuthContext} from "../../Context/AuthContext";
import {Link} from "react-router-dom";
import VideoFrame from "../../Components/VideoFrame";


function VideoPage() {

    const {user} = useContext(AuthContext);
    const [videoResults, setVideoResults] = useState([]);
    const [loading, toggleLoading] = useState(false);
    const [error, toggleError] = useState(false);
    const KEY = "AIzaSyBLWOuDnCiz7zLrXfZIhmcoBUA9V3MRbF4";
    let q = "";


    useEffect(() => {
        q = `yoga,${user.time}, ${user.focus}, ${user.intensity}`;

        async function fetchData() {
            try {
                const result = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=4&q=${q}&videoDuration=${user.time}&key=${KEY}`
                    , {
                    })
                setVideoResults(result.data.items)
            } catch (e) {
                console.error(e);
            }
        }

        fetchData();

    }, [])


        useEffect(() => {
        const controller = new AbortController();

            async function unMount() {

            toggleLoading(true);
            toggleError(false);

            try {
                const {result} = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=4&q=${q}&videoDuration=${user.time}&key=${KEY}`
                    , {signal: controller.signal,
                        headers: {}
                    })
                setVideoResults(result.data.items)
            } catch (e) {
                if (axios.isCancel(e)) {
                    console.error('Request is canceled...');
                } else {
                    console.error(e);
                    toggleError(true);
                }
            } finally {
                toggleLoading(false);
            }
            }

        return function cleanup() {
            controller.abort();
        }
        unMount();

    }, [ ]);


    return (

        <>
            <img className={styles["video-rectangle"]} src={waters} alt="lilac waters"/>
            <div className={styles["video-rectangle-container"]}>
                <p className={styles.header}>
                    Here's your personal selection of video's for today, {user.username}!
                </p>
            </div>

            {videoResults && videoResults.length > 0 && (
                <>
                        <VideoFrame
                            widthAttribute="420"
                            heightAttribute="315"
                            classNameAttribute="styles[video-one]"
                            titleAttribute={videoResults.title}
                            sourceValue={`https://www.youtube.com/embed/${videoResults[1].id.videoId}/?controls=0/autoplay=1`}
                            fullScreenAttribute="allowFullscreen"
                        />

                        <VideoFrame
                            widthAttribute="420"
                            heightAttribute="315"
                            classNameAttribute="styles[video-two]"
                            titleAttribute={videoResults.title}
                            sourceValue={`https://www.youtube.com/embed/${videoResults[2].id.videoId}/?controls=0/autoplay=1`}
                            fullScreenAttribute="allowFullscreen"
                        />

                        <VideoFrame
                            widthAttribute="420"
                            heightAttribute="315"
                            classNameAttribute="styles[video-three]"
                            titleAttribute={videoResults.title}
                            sourceValue={`https://www.youtube.com/embed/${videoResults[3].id.videoId}/?controls=0/autoplay=1`}
                            fullScreenAttribute="allowFullscreen"
                        />
                        <VideoFrame
                            widthAttribute="420"
                            heightAttribute="315"
                            classNameAttribute="styles[video-main]"
                            titleAttribute={videoResults.title}
                            sourceValue={`https://www.youtube.com/embed/${videoResults[0].id.videoId}/?controls=0/autoplay=1`}
                            fullScreenAttribute="allowFullscreen"
                        />


                </>
            )}

                <p className={styles["welcome-page-link"]}>Don't see anything you like? click <Link
            to="/welcomepage">here</Link> to try again</p>

            {loading && <p>Loading...</p>}
            {videoResults.length === 0 && error && <p>Er ging iets mis bij het ophalen van de data...</p>}

        </>

    );
}

export default VideoPage;