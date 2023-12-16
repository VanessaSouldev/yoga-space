import React, {useState, useContext} from "react";
import {AuthContext} from "../../Context/AuthContext";
import styles from "./ProfilePage.module.css";
import Button from "../../Components/Button/Button";
import {useHistory} from "react-router-dom";
import YogaPoseSearchBar from "../../Components/ProfilePage/YogaPoseSearchBar";
import LogoutLink from "../../Components/Navigation/LogoutLink/LogoutLink";
import axios from "axios";


function Profile() {

    const {user} = useContext(AuthContext);
    const [error, toggleError] = useState(false);
    const {logout} = useContext(AuthContext);
    const history = useHistory();
    const [yogaPoseVideoResults, setYogaPoseVideoResults] = useState([]);
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    async function fetchYogaPose(yogaPose) {

        console.log(yogaPose);
        console.log(yogaPoseVideoResults);


        try {
            const result = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=3&q=yogapose, ${yogaPose}&key=${process.env.REACT_APP_API_KEY}`);
            console.log(result);
            setYogaPoseVideoResults(result.data.items);
            console.log(result.data.items);


        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }


    function handleClickToQuestionnaire() {
        history.push("/welcomepage");
    }


    return (

        <>
            <div className={styles["outer-container-profile"]}>

                <LogoutLink
                    clickhandler={logout}>
                    Sign out
                </LogoutLink>

                <div className={styles["container-favorites"]}>
                    {favorites.length === 0 && (<h6
                        className={styles["profile-page-favorites-heading"]}>
                        Add video's to your favorites by liking any video from your daily video's
                        page.</h6>)} {favorites.length > 0 && (<h6 className={styles["profile-page-favorites-heading"]}> {user.username}'s favorite yoga video's :
                    </h6>)}

                    {favorites.length > 0 && favorites.map((favorite) => {
                        console.log(favorite);
                        return (
                            <section key={favorite}>
                                <iframe
                                    className={styles["favorites-iframe"]}
                                    title={"favorite"}
                                    src={favorite}
                                    allowFullScreen>
                                </iframe>
                            </section>
                        );
                    })
                    }
                </div>

                <div className={styles["container-center"]}>
                    <header className={styles["profile-page-header"]}>
                        Profile Page
                    </header>
                    <p className={styles["profile-page-welcome-paragraph"]}>Welcome to your profile {user.username},
                        here you can find your favorite yoga video's and explore different yogaposes by entering it
                        below:</p>


                    <YogaPoseSearchBar
                        callFunction={fetchYogaPose}
                    />
                    {error && (
                        <p className={styles["wrong-yogapose-error"]}>
                            Oops! this yogapose got us in a [&](knot)
                        </p>)}


                    {/*// SEARCH BAR RESULTS*/}


                    {yogaPoseVideoResults.length > 0 && yogaPoseVideoResults.map((video) => {

                        return (

                            <section key={video.id.videoId}>
                                <iframe
                                    className={styles["yogapose-result"]}
                                    title={video.snippet.title}
                                    src={`https://www.youtube.com/embed/${video.id.videoId}/?controls=0/autoplay=1`}
                                    allowFullScreen>
                                </iframe>
                            </section>
                        );
                    })
                    }
                </div>

                {/*// Links boven 'favorite yoga video's'*/}

                <Button
                    type={"button"}
                    className={"profile-page-to-questionnaire-button"}
                    clickHandler={handleClickToQuestionnaire}
                >
                    For your daily yoga routine, press here!
                </Button>
            </div>
        </>
    );
}

export default Profile;