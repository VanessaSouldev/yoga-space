import React, {useState, useEffect, useContext} from "react";
import {AuthContext} from "../../Context/AuthContext";
import styles from "./ProfilePage.module.css";
import ProfilePageToQuestionnaireButton from "../../Components/Buttons/ProfilePage/ProfilePageToQuestionnaireButton";
import {useHistory} from "react-router-dom";
import YogaPoseSearchBar from "../../Components/ProfilePage/YogaPoseSearchBar";
import axios from "axios";


function Profile() {

    const {user} = useContext(AuthContext);
    const history = useHistory();
    const favoriteOne = localStorage.getItem('favoriteOne');
    const favoriteTwo = localStorage.getItem('favoriteTwo');
    const favoriteThree = localStorage.getItem('favoriteThree');
    const favoriteFour = localStorage.getItem('favoriteFour');
    const [videoResultsYogaPose, setVideoResultsYogaPose] = useState([]);
    const [yogaPose, setYogaPose] =useState(['']);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const controller = new AbortController();
    let p ="";

    useEffect(() => {
        p = `yoga,yogapose`;

    }, []);

        useEffect(() => {async function fetchData() {

        toggleLoading(true);
        toggleError(false);

        try {
            const result = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=3&p=${p}&videoDuration&key=${process.env.REACT_APP_API_KEY}`
                , {
                    signal: controller.signal,
                })
            console.log(result.data);
            setVideoResultsYogaPose(result.data);
        } catch (e) {
            console.error(e);
            toggleError(true);
            toggleLoading(false);
        }
    }
        if (yogaPose) {
            fetchData();
        }
    },[yogaPose]);

        useEffect(() => {
            history.push(user);


        })


        return (
        <>
            <heading>
            <h4 className={styles["profile-page-heading"]}>
                Profile Page
            </h4>
                <p className={styles["profile-page-welcome-paragraph"]}>Welcome to your profile {user.username}, here you can find your favorite yoga video's and explore different yogaposes by entering the yogapose you'd like to explore in the search bar below:</p>

            </heading>

            <section>
                        <YogaPoseSearchBar
                           setYogaPoseHandler={setYogaPose}/>
                {error &&<span className="wrong-location-error">
                    Oops! this yogapose is rare! we can't find it...
                </span>}

            <iframe
                    className={styles["yogapose-video-one"]}
                    title={"video-one"}
                    src={`https://www.youtube.com/embed/${videoResultsYogaPose[1].id.videoId}/?controls=0/autoplay=1`}
                    allowFullScreen>

            </iframe>

            <iframe
                    className={styles["yogapose-video-two"]}
                    title={"video-two"}
                    src={`https://www.youtube.com/embed/${videoResultsYogaPose[2].id.videoId}/?controls=0/autoplay=1`}
                    allowFullScreen>

            </iframe>

            <iframe
                    className={styles["yogapose-video-three"]}
                    title={"video-three"}
                    src={`https://www.youtube.com/embed/${videoResultsYogaPose[3].id.videoId}/?controls=0/autoplay=1`}
                    allowFullScreen>

            </iframe>

            </section>

            <section>

            <h6 className={styles["profile-page-favorites-heading"]}>{user.username}'s latest favorite yoga video's:</h6>

                <iframe
                    className={styles["favorite-one"]}
                    title="favoritevideo"
                    src={favoriteOne}
                    allowFullScreen
                >
                </iframe>

                <iframe
                    className={styles["favorite-two"]}
                    title="favoritevideo"
                    src={favoriteTwo}
                    allowFullScreen
                >
                </iframe>

                <iframe
                    className={styles["favorite-three"]}
                    title="favoritevideo"
                    src={favoriteThree}
                    allowFullScreen
                >
                </iframe>

                <iframe
                    className={styles["favorite-four"]}
                    title="favoritevideo"
                    src={favoriteFour}
                    allowFullScreen
                >
                </iframe>
            </section>
            {loading && <p>Loading...</p>}
<div>
            <ProfilePageToQuestionnaireButton>
                    Ready for your daily yoga routine?
            </ProfilePageToQuestionnaireButton>
</div>
</>

    );
}

export default Profile;
