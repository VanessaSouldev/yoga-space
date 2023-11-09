import styles from "./VideoPage.module.css";
import waters from "../../assets/images/lilac-waters.jpg";
import React, {useState, useEffect, useContext} from "react";
import axios from "axios";
import {AuthContext} from "../../Context/AuthContext";
import {Link} from "react-router-dom";


function VideoPage() {

    const {user} = useContext(AuthContext);
    const [videoResults, setVideoResults] = useState([]);
    const [error, toggleError] = useState(false);
    const [favoriteAddedMessage, setFavoriteAddedMessage] = useState(false);
    const controller = new AbortController();
    let q = "";
    
    console.log(user)

    useEffect(() => {
        q = `yoga,${user.time}, ${user.focus}, ${user.intensity}`;

        async function fetchData() {


            toggleError(false);


            try {
                const result = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=4&q=${q}&videoDuration=${user.time}&key=${process.env.REACT_APP_API_KEY}`
                    , {
                        signal: controller.signal,
                    })
                console.log(result)
                setVideoResults(result.data.items.slice(0,3))
            } catch (e) {
                console.error(e);
                if (axios.isCancel(e)) {
                                    console.error('Request is canceled...');
                                } else {
                                    console.error(e);
                                    toggleError(true);
                                }
                            } finally {
                                // toggleLoading(false);

            }
        }

        fetchData();

        return function cleanup() {
                    controller.abort();
                }

    }, [q, user])

   function handleSubmit(video) {
       setFavoriteAddedMessage(true);
       
       // DIT HEBBEN WE WEGGEHAALD
       // localStorage.setItem('favorites', `https://www.youtube.com/embed/${videoResults.id.videoId}/?controls=0/autoplay=1`)
       // localStorage.setItem('favoriteTwo', `https://www.youtube.com/embed/${videoResults[2].id.videoId}/?controls=0/autoplay=1`)
       // localStorage.setItem('favoriteThree', `https://www.youtube.com/embed/${videoResults[3].id.videoId}/?controls=0/autoplay=1`)
       // localStorage.setItem('favoriteFour', `https://www.youtube.com/embed/${videoResults[0].id.videoId}/?controls=0/autoplay=1`);
       //
       // DIT HEBBEN WE ERIN GEZET
           switch(video){
               case videoResults[0].id.videoId:
                   setFavoriteAddedMessage(video);
                   localStorage.setItem('favorites', `https://www.youtube.com/embed/${videoResults[0].id.videoId}/?controls=0/autoplay=1`)
                   break;
               case videoResults[1].id.videoId:
                   setFavoriteAddedMessage(video);
                   localStorage.setItem('favorites', `https://www.youtube.com/embed/${videoResults[1].id.videoId}/?controls=0/autoplay=1`)
                   break;
               case videoResults[2].id.videoId:
                   setFavoriteAddedMessage(video);
                   localStorage.setItem('favorites', `https://www.youtube.com/embed/${videoResults[2].id.videoId}/?controls=0/autoplay=1`)
                   break;
               case videoResults[3].id.videoId:
                   setFavoriteAddedMessage(video);
                   localStorage.setItem('favorites', `https://www.youtube.com/embed/${videoResults[3].id.videoId}/?controls=0/autoplay=1`)
                   break;
           
       }
   
       // if (localStorage.setItem) {
       //     setFavoriteAddedMessage(true);
       // } else {
       //
       // }
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

            {/* DEZE FUNCTIE IS AANGEPAST NAAR EEN MAP() >> PER VIDEO KRIJG JE NU OOK EEN favoriteAddedMessage   */}
            {videoResults.length > 0 && videoResults.map((video) => {
                return (
                <section className={styles["iframe-container"]} key={video.id.videoId}>
                    <iframe
                    className={styles["video-one"]}
                    title={video.snippet.title}
                    src={`https://www.youtube.com/embed/${video.id.videoId}/?controls=0/autoplay=1`}
                    allowFullScreen>
                    </iframe>

                    <button  type="submit"
                             className={styles["like-button-video-one"]}
                             // HIER HEBBEN WE EEN CALLBACK FUNCTIE VAN GEMAAKT >> FUNCTIE WORDT PAS UITGEVOERD OP EEN KLIK EN NIET DIRECT AL
                             onClick={() => handleSubmit(video.id.videoId)}>
                        LIKE to add to your favorites!
                    </button>
                    
                    {favoriteAddedMessage === video.id.videoId && <p>This video has been added to your Favorites</p>}
                </section>
                )
            })
            
            }
                    {/* DIT HEBBEN WE WEGGEHAALD */}
                    {/*<iframe width="420"*/}
                    {/*        height="315"*/}
                    {/*        className={styles["video-two"]}*/}
                    {/*        title={"video-two"}*/}
                    {/*        src={`https://www.youtube.com/embed/${videoResults[2].id.videoId}/?controls=0/autoplay=1`}*/}
                    {/*        allowFullScreen>*/}
                    {/*</iframe>*/}
                    
                    {/*<button  type="submit"*/}
                    {/*         className={styles["like-button-video-two"]}*/}
                    {/*         onClick={handleSubmit}>*/}
                    {/*    LIKE to add to your favorites!*/}
                    {/*</button>*/}
                    
                    {/*<iframe width="420"*/}
                    {/*        height="315"*/}
                    {/*        className={styles["video-three"]}*/}
                    {/*        title={"video-three"}*/}
                    {/*        src={`https://www.youtube.com/embed/${videoResults[3].id.videoId}/?controls=0/autoplay=1`}*/}
                    {/*        allowFullScreen>*/}
                    {/*</iframe>*/}
                    
                    {/*<button  type="submit"*/}
                    {/*         className={styles["like-button-video-three"]}*/}
                    {/*         onClick={handleSubmit}>*/}
                    {/*    LIKE to add to your favorites!*/}
                    {/*</button>*/}
            {videoResults.length > 0 && videoResults.map((video) => {
                return (

                    <section className={styles["iframe-container"]} key={video.id.videoId}>
                    <iframe
                        width="420"
                        height="315"
                        className={styles["video-main"]}
                        title={"video-main"}
                        src={`https://www.youtube.com/embed/${video[3].id.videoId}/?controls=0/autoplay=1`}
                        allowFullScreen>
                    </iframe>
                    
                    <button
                        type="submit"
                        className={styles["like-button-video-main"]}
                        onClick={() => handleSubmit(video[3].id.videoId)}>
                        LIKE to add to your favorites!
                    </button>
                        {favoriteAddedMessage === video.id.videoId && <p>This video has been added to your Favorites</p>}
                    </section>
                )
            })

            }

            <p className={styles["welcome-page-link"]}>Don't see anything you like? click <Link
                to="/welcomepage">here</Link> to try again</p>

            {/*{loading && <p>Loading...</p>}*/}
            {videoResults.length === 0 && error && <p>Whoops! An error occurred whilst loading your video's...</p>}
            {/*{favoriteAddedMessage && <p>This video has been added to your Favorites</p>}*/}

        </>

    );
    }


export default VideoPage;