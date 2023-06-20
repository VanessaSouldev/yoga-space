import styles from "./VideoPage.module.css";
import waters from "../Images/lilac-waters.jpeg";
import {useContext, useState, useEffect} from "react";
import axios from "axios";
import {AuthContext} from "../Context/AuthContext";




function VideoPage() {


        const state = {
            videosMetaInfo: [],
            selectedVideoId: null
        };
        const {user} = useContext(AuthContext);
        const [videoResults, setVideoResults] = useState('');
        const KEY = "AIzaSyBLWOuDnCiz7zLrXfZIhmcoBUA9V3MRbF4";


    useEffect(() => {

            async function fetchData() {
                try {
                    const result = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&q=yoga&key=${KEY}`,{
                        headers:{
                            // Authorization: `Bearer [YOUR_ACCESS_TOKEN]`,
                            "Content-Type": "application/json"
                        }
                    })
                    console.log(result)
                }
                // try {
                //     const result = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
                //         part: "snippet",
                //         q: 'yoga',
                //         maxResults: 4,
                //         videoDuration: "short",
                //         key: KEY,
                //     })
                //     console.log(result.data);
                //     setVideoResults(result.data)
                // }
                catch(e) {
                    console.error(e);
                }
            };

            fetchData();


        }, []);

        return (



                <>
                    <img className={styles["video-rectangle"]} src={waters} alt="lilac waters"/>
                    <div className={styles["video-rectangle-container"]}>
                        <p className={styles.header}>
                    Here's your selection of video's to choose from today
                        </p>
                    </div>

                    <video className={styles["video-one"]} controls width="450">
                {/*        async function fetchData() {*/}
                {/*        try {*/}
                {/*        const result = await <insert-request-here>;*/}
                {/*        console.log(result.data);*/}
                {/*        } catch(e) {*/}
                {/*        console.error(e);*/}
                {/*    }*/}
                {/*} */}
                    </video>

                    <video className={styles["video-two"]} controls width="450">
                    </video>
                    <video className={styles["video-three"]} controls width="450">
                    </video>
                    <video className={styles["video-main"]} controls width="450">
                    </video>
                </>

    );
}

export default VideoPage;