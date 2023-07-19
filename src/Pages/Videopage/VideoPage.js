import styles from "./VideoPage.module.css";
import waters from "../../Images/lilac-waters.jpeg";
import {useState, useEffect} from "react";
import axios from "axios";





function VideoPage() {


        const [videoResults, setVideoResults] = useState('');
        const KEY = "AIzaSyBLWOuDnCiz7zLrXfZIhmcoBUA9V3MRbF4";


    useEffect(() => {

            async function fetchData() {
                try {
                    const result = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=4&q=yoga&key=${KEY}`, {
                        headers: {
                            // Authorization: `Bearer [YOUR_ACCESS_TOKEN]`,
                            "Content-Type": "application/json"
                        }
                    })
                    console.log(result.data)
                    setVideoResults(result.data.items)
                }
                    // try {
                    //     const result = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {params: {
                    //             part: "snippet",
                    //             q: 'yoga',
                    //             maxResults: 4,
                    //             type: "video",
                    //             videoDuration: "short",
                    //             key: KEY,
                    //         },headers:{}})
                    //     console.log(result.data);
                    //     setVideoResults(result.data)
                    // }
                catch (e) {
                    console.error(e);
                }
            }

            fetchData()


        }, []);

    useEffect(() => {

            console.log(videoResults)
            console.log(videoResults[0].id.videoId)

    }, [videoResults]


    )


        return (

                <>
                    <img className={styles["video-rectangle"]} src={waters} alt="lilac waters"/>
                    <div className={styles["video-rectangle-container"]}>
                        <p className={styles.header}>
                    Here's your selection of video's to choose from today
                        </p>
                    </div>

                    {(videoResults !== undefined) && <>

                    <iframe width="420"
                            height="315"
                            className={styles["video-one"]}
                            title={"video-one"}
                            src={`https://www.youtube.com/embed/${videoResults[1].id.videoId}`}>

                    </iframe>

                    <video className={styles["video-two"]} controls width="450">
                    </video>
                    <video className={styles["video-three"]} controls width="450">
                    </video>
                    <video className={styles["video-main"]} controls width="450">
                    </video>
                    </>}
                </>

    );
}

export default VideoPage;