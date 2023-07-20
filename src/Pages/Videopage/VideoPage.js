import styles from "./VideoPage.module.css";
import waters from "../../Images/lilac-waters.jpeg";
import {useState, useEffect, useContext} from "react";
import axios from "axios";
import {AuthContext} from "../../Context/AuthContext";






function VideoPage() {

        const {user} = useContext(AuthContext);
        const [videoResults, setVideoResults] = useState([]);
        const KEY = "AIzaSyBLWOuDnCiz7zLrXfZIhmcoBUA9V3MRbF4";


    useEffect(() => {

            async function fetchData() {
                try {
                    const result = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=4&q=yoga&key=${KEY}`, {
                        headers: {
                        // params: {
                        //         snippet:"title",
                        //         videoDuration: "short",
                        //         q: 'beginners',
                        //     }


                        }
                    })
                    console.log(result.data)
                    setVideoResults(result.data.items)
                    setVideoResults(result.data.snippet.title)
                }
    //                 // try {
    //                 //     const result = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {params: {
    //                 //             part: "snippet",
    //                 //             q: 'yoga',
    //                 //             maxResults: 4,
    //                 //             type: "video",
    //                 //             videoDuration: "short",
    //                 //             key: KEY,
    //                 //         },headers:{}})
    //                 //     console.log(result.data);
    //                 //     setVideoResults(result.data)
    //                 // }
                catch (e) {
                    console.error(e);
                }
            }

            fetchData()


        }, [])

    // useEffect(() => {
    //
    //         console.log(videoResults)
    //         console.log(videoResults[0].id.videoId)
    //
    // }, [videoResults]


    // )


        return (

                <>
                    <img className={styles["video-rectangle"]} src={waters} alt="lilac waters"/>
                    <div className={styles["video-rectangle-container"]}>
                        <p className={styles.header}>
                    Here's your personal selection of video's for today, {user.username}!
                        </p>
                    </div>

                    {videoResults && videoResults.length> 0 && (
                        <>


                    <iframe
                            className={styles["video-one"]}
                            title={videoResults.title}
                            src={`https://www.youtube.com/embed/${videoResults[1].id.videoId}/?controls=0/autoplay=1`}
                            allowFullScreen
                            >

                    </iframe>

                    <iframe width="420"
                            height="315"
                            className={styles["video-two"]}
                            title={"video-two"}
                            src={`https://www.youtube.com/embed/${videoResults[2].id.videoId}/?controls=0/autoplay=1`}
                            allowFullScreen
                    >

                    </iframe>

                    <iframe width="420"
                            height="315"
                            className={styles["video-three"]}
                            title={"video-three"}
                            src={`https://www.youtube.com/embed/${videoResults[3].id.videoId}/?controls=0/autoplay=1`}
                            allowFullScreen
                    >

                    </iframe>

                    <iframe width="420"
                            height="315"
                            className={styles["video-main"]}
                            title={"video-main"}
                            src={`https://www.youtube.com/embed/${videoResults[0].id.videoId}/?controls=0/autoplay=1`}
                            allowFullScreen
                    >

                    </iframe>±

                        </>
                    )}

                </>

    );
}

export default VideoPage;