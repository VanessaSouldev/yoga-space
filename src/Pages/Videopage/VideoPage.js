import styles from "./VideoPage.module.css";
import waters from "../../assets/images/lilac-waters.jpg";
import React, {useState, useEffect, useContext} from "react";
import axios from "axios";
import {AuthContext} from "../../Context/AuthContext";
import {NavLink, Redirect, useHistory} from "react-router-dom";
import LogoutLink from "../../Components/Navigation/LogoutLink/LogoutLink";
import LinkParagraph from "../../Components/Navigation/LinkParagraph/LinkParagraph";


function VideoPage() {

    const {user} = useContext(AuthContext);
    const {isAuth} = useContext(AuthContext);
    const {logout} = useContext(AuthContext);
    const history = useHistory();
    const [videoResults, setVideoResults] = useState([]);
    const [videoResultMain, setVideoResultMain] = useState();
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [favoriteAddedMessage, setFavoriteAddedMessage] = useState(false);
    const [favorites] = useState([]);
    const controller = new AbortController();
    let q = "";


    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);


    useEffect(() => {

        q = `yoga,${user.time}, ${user.focus}, ${user.intensity}`;

        async function fetchData() {


            toggleError(false);
            toggleLoading(true);


            try {
                const result = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=4&q=${q}&videoDuration=${user.time}&key=${process.env.REACT_APP_API_KEY}`, {
                    signal: controller.signal,
                });
                setVideoResults(result.data.items.slice(0, 3));
                setVideoResultMain(result.data.items);

            } catch (e) {
                console.error(e);
                if (axios.isCancel(e)) {
                    console.error('Request is canceled...');
                    history.push('/welcomepage');

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
        };

    }, [q, user]);

    function handleSubmit(video) {
        setFavoriteAddedMessage(true);
        let oldData = JSON.parse(localStorage.getItem("favorites") || "[]");
        let newData = [...oldData];

        switch (video) {
            case videoResults[0].id.videoId:
                setFavoriteAddedMessage(video);
                if (!newData.includes(`https://www.youtube.com/embed/${videoResults[0].id.videoId}/?controls=0/autoplay=1`)) {
                    newData.push(`https://www.youtube.com/embed/${videoResults[0].id.videoId}/?controls=0/autoplay=1`);
                    localStorage.setItem('favorites', JSON.stringify(newData));
                }
                break;
            case videoResults[1].id.videoId:
                setFavoriteAddedMessage(video);
                if (!newData.includes(`https://www.youtube.com/embed/${videoResults[1].id.videoId}/?controls=0/autoplay=1`)) {
                    newData.push(`https://www.youtube.com/embed/${videoResults[1].id.videoId}/?controls=0/autoplay=1`);
                    localStorage.setItem('favorites', JSON.stringify(newData));
                }
                break;
            case videoResults[2].id.videoId:
                setFavoriteAddedMessage(video);
                if (!newData.includes(`https://www.youtube.com/embed/${videoResults[2].id.videoId}/?controls=0/autoplay=1`)) {
                    newData.push(`https://www.youtube.com/embed/${videoResults[2].id.videoId}/?controls=0/autoplay=1`);
                    localStorage.setItem('favorites', JSON.stringify(newData));
                }
                break;
            case videoResultMain[3].id.videoId:
                setFavoriteAddedMessage(videoResultMain[3].id.videoId);
                if (!newData.includes(`https://www.youtube.com/embed/${videoResultMain[3].id.videoId}/?controls=0/autoplay=1`)) {
                    newData.push(`https://www.youtube.com/embed/${videoResultMain[3].id.videoId}/?controls=0/autoplay=1`);
                    localStorage.setItem('favorites', JSON.stringify(newData));
                }
                break;
            default:
        }
    }

    return (


        <>

            <img className={styles["videopage-rectangle"]} src={waters} alt="lilac waters"/>
            <div className={styles["videopage-rectangle-container"]}>
                <p className={styles.header}>
                    Here's your personal selection of video's for today, {user.username}!
                </p>

                <p className={styles["favorites-text-profile-page"]}>You can find your favorites on your
                    <LinkParagraph
                        path="/profile">
                        Profile page
                    </LinkParagraph>
                    !</p>

            </div>

            {videoResults.length > 0 && videoResults.map((video) => {
                return (<section className={styles["iframe-container-videos-small"]} key={video.id.videoId}>
                    <iframe
                        className={styles["videos-small"]}
                        title={video.snippet.title}
                        src={`https://www.youtube.com/embed/${video.id.videoId}/?controls=0/autoplay=1`}
                        allowFullScreen>
                    </iframe>

                    <button type="submit"
                            className={styles["like-button-videos-small"]}
                            onClick={() => handleSubmit(video.id.videoId)}>
                        LIKE to add to your favorites!
                    </button>


                    {favoriteAddedMessage === video.id.videoId &&
                        <h2 className={styles["added-to-favorites-message-small"]}>This video has been added to your
                            Favorites</h2>}
                </section>);
            })}
            {videoResultMain && videoResultMain[3] && (

                <section className={styles["iframe-main-container"]}>
                    <iframe
                        className={styles["video-main"]}
                        title={videoResultMain[3].snippet.title}
                        src={`https://www.youtube.com/embed/${videoResultMain[3].id.videoId}/?controls=0/autoplay=1`}
                        allowFullScreen>
                    </iframe>

                    <button
                        type="submit"
                        className={styles["like-button-video-main"]}
                        onClick={() => handleSubmit(videoResultMain[3].id.videoId)}>
                        LIKE to add to your favorites!
                    </button>

                    {favoriteAddedMessage === videoResultMain[3].id.videoId &&
                        <h2 className={styles["added-to-favorites-message-main"]}>This video has been added to your
                            Favorites</h2>}
                </section>)}
            <p className={styles['welcome-page-link-paragraph']}>
                Don't see anything you like, click
                <LinkParagraph
                    path={'/welcomepage'}>
                    here
                </LinkParagraph>
                to try again!
            </p>
            {loading && <p>Loading...</p>}
            {error && <h2 className={styles["error-yoga-videos"]}>Whoops! An error occurred whilst loading your video's,
                please <NavLink to="/welcomepage" className={styles["error-back-to-welcome-page-link"]}>try
                    again...</NavLink></h2>}
            {isAuth ? <LogoutLink
                clickhandler={logout}>
                Sign out
            </LogoutLink> : <Redirect to=" /signin"/>}
        </>

    );
}


export default VideoPage;