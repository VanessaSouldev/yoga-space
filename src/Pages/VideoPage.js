import styles from "./VideoPage.module.css";
import waters from "../Images/lilac-waters.jpeg";



function VideoPage() {

    return (

                <>
                    <img className={styles["video-rectangle"]} src={waters} alt="lilac waters"/>
                    <div className={styles["video-rectangle-container"]}>
                        <p className={styles.header}>
                    Here's your selection of video's to choose from today
                        </p>
                    </div>

                    <video className={styles["video-one"]} controls width="450">
                    {/*    async function fetchData() {*/}
                    {/*    try {*/}
                    {/*    const result = await <insert-request-here>;*/}
                    {/*    } catch(e) {*/}
                    {/*    console.error(e);*/}
                    {/*}*/}
                    {/*    }*/}
                    </video>
                        <br/>
                    <video className={styles["video-two"]}controls width="450">
                    </video>
                        <br/>
                    <video className={styles["video-three"]}controls width="450">
                    </video>
                    <video className={styles["video-main"]}controls width="450">
                    </video>
                </>

    );
}

export default VideoPage;