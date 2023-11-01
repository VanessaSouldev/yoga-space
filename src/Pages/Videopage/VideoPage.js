import styles from "./VideoPage.module.css";
import waters from "../../Components/assets/images/lilac-waters.jpg";
import React, {useState, useEffect, useContext} from "react";
import axios from "axios";
import {AuthContext} from "../../Context/AuthContext";
import {Link} from "react-router-dom";


function VideoPage() {

    const {user} = useContext(AuthContext);
    const [videoResults, setVideoResults] = useState([]);
    const [loading, toggleLoading] = useState(false);
    const [error, toggleError] = useState(false);
    // const [favoriteAddedMessage, setFavoriteAddedMessage] = useState(false);
    const KEY = "AIzaSyBLWOuDnCiz7zLrXfZIhmcoBUA9V3MRbF4";
    const controller = new AbortController();
    let q = "";


    useEffect(() => {
        q = `yoga,${user.time}, ${user.focus}, ${user.intensity}`;

        async function fetchData() {

            toggleLoading(true);
            toggleError(false);


            try {
                const result = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=4&q=${q}&videoDuration=${user.time}&key=${KEY}`
                    , {
                        signal: controller.signal,
                    })
                setVideoResults(result.data.items)
            } catch (e) {
                console.error(e);
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

        fetchData();

        return function cleanup() {
                    controller.abort();
                }

    }, [q, user.time])

    async function handleSubmit(e) {
        // setFavoriteAddedMessage(false);

        localStorage.setItem('favoriteOne', `https://www.youtube.com/embed/${videoResults[1].id.videoId}/?controls=0/autoplay=1`)
        localStorage.setItem('favoriteTwo', `https://www.youtube.com/embed/${videoResults[2].id.videoId}/?controls=0/autoplay=1`)
        localStorage.setItem('favoriteThree', `https://www.youtube.com/embed/${videoResults[3].id.videoId}/?controls=0/autoplay=1`)
        localStorage.setItem('favoriteFour', `https://www.youtube.com/embed/${videoResults[0].id.videoId}/?controls=0/autoplay=1`)

    // } catch(e) {
    //
    //     if (localStorage) {
    //         console.favoriteAddedMessage('This video has been added to your Favorites');
    //         setFavoriteAddedMessage(true);
    //     } else {
    //
    //     }
    }



    return (

        <>
            <img className={styles["video-rectangle"]} src={waters} alt="lilac waters"/>
            <div className={styles["video-rectangle-container"]}>
                <p className={styles.header}>
                    Here's your personal selection of video's for today, {user.username}!
                </p>
                <p className={styles["favorites-text-profile-page"]}>You can find your favorites on your:  <Link
                    to="/profile"> Profile-page </Link> !</p>
            </div>

            {videoResults && videoResults.length > 0 && (
                <section>
                    <iframe
                        className={styles["video-one"]}
                        title={videoResults.title}
                        src={`https://www.youtube.com/embed/${videoResults[1].id.videoId}/?controls=0/autoplay=1`}
                        allowFullScreen>
                    </iframe>

                    <button  type="submit"
                             className={styles["like-button-video-one"]}
                             onClick={handleSubmit}>


                        LIKE to add to your favorites!
                    </button>


                    <iframe width="420"
                            height="315"
                            className={styles["video-two"]}
                            title={"video-two"}
                            src={`https://www.youtube.com/embed/${videoResults[2].id.videoId}/?controls=0/autoplay=1`}
                            allowFullScreen>
                    </iframe>

                    <button  type="submit"
                             className={styles["like-button-video-two"]}
                             onClick={handleSubmit}>
                        LIKE to add to your favorites!
                    </button>

                    <iframe width="420"
                            height="315"
                            className={styles["video-three"]}
                            title={"video-three"}
                            src={`https://www.youtube.com/embed/${videoResults[3].id.videoId}/?controls=0/autoplay=1`}
                            allowFullScreen>
                    </iframe>

                    <button  type="submit"
                             className={styles["like-button-video-three"]}
                             onClick={handleSubmit}>
                        LIKE to add to your favorites!
                    </button>

                    <iframe
                        width="420"
                        height="315"
                        className={styles["video-main"]}
                        title={"video-main"}
                        src={`https://www.youtube.com/embed/${videoResults[0].id.videoId}/?controls=0/autoplay=1`}
                        allowFullScreen>
                    </iframe>

                    <button
                        type="submit"
                        className={styles["like-button-video-main"]}
                        onClick={handleSubmit}>
                        LIKE to add to your favorites!
                    </button>
                </section>
            )}

            <p className={styles["welcome-page-link"]}>Don't see anything you like? click <Link
                to="/welcomepage">here</Link> to try again</p>

            {loading && <p>Loading...</p>}
            {videoResults.length === 0 && error && <p>Whoops! An error occurred whilst loading your video's...</p>}

        </>

    );
    }


export default VideoPage;