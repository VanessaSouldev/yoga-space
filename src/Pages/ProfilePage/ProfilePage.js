import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from "../../Context/AuthContext";
import styles from "./ProfilePage.module.css";
import ProfilePageToQuestionnaireButton from "../../Components/Buttons/ProfilePage/ProfilePageToQuestionnaireButton";
import {useHistory} from "react-router-dom";
import YogaPoseSearchInput from "../../Components/YogaPoseSearchInput";




function Profile() {

    const {user} = useContext(AuthContext);
    const history = useHistory();
    // const [videoResultsYogaPose, setVideoResultsYogaPose] = useState([]);
    const [yogaPose, setYogaPose] =useState(['']);
    // const KEY = "AIzaSyBLWOuDnCiz7zLrXfZIhmcoBUA9V3MRbF4";
    // let p = "";
    //
    // useEffect(() => {
    //     p = `yoga,${user.yogapose}`;

//         async function handleInput(e) {
//             e.preventDefault(e)
//
//             try {
//                 ;
//
//
//             } catch (e) {
//                 console.error(e)
//
//             }
//         }
//
//         useEffect(() => {
//             user.yogapose = yogaPose;
//
//
//         }, [user, yogaPose]);
//
//
        useEffect(() => {
    history.push(user);


})


    return (
        <>
            <heading>
            <h4 className={styles["profile-page-heading"]}>
                Profile Page
            </h4>
                <p className={styles["profile-page-welcome-paragraph"]}>Welcome to your profile {user.username}, here you can find your favorite yoga video's and explore different yogaposes by entering the yogapose you'd like to explore in the search engine below:</p>

            </heading>

            <section>


                        <YogaPoseSearchInput
                            type="text"
                            id="yogaPose"
                            name="yogaPose"
                            value={yogaPose}
                            onChange={(enable) => setYogaPose('')}
                            labelText="Yogapose Search">
                        </YogaPoseSearchInput>

            <iframe
                    className={styles["yogapose-video-one"]}
                    title={"video-one"}
                    src={``}
                    allowFullScreen>

            </iframe>

            <iframe
                    className={styles["yogapose-video-two"]}
                    title={"video-two"}
                    // src={`https://www.youtube.com/embed/${videoResults[3].id.videoId}/?controls=0/autoplay=1`}
                    allowFullScreen>

            </iframe>

            <iframe
                    className={styles["yogapose-video-three"]}
                    title={"video-three"}
                    // src={`https://www.youtube.com/embed/${videoResults[3].id.videoId}/?controls=0/autoplay=1`}
                    allowFullScreen>

            </iframe>

            </section>

            <section>

            <h6 className={styles["profile-page-favorites-heading"]}>{user.username}'s favorite yoga video's:</h6>

                <iframe
                    className={styles["favorite-one"]}
                    title="favoritevideo"
                    src={localStorage.getItem('')}
                    allowFullScreen
                >
                </iframe>
            </section>
<div>
            <ProfilePageToQuestionnaireButton>
                    Ready for your daily yoga routine?
            </ProfilePageToQuestionnaireButton>
</div>
</>

    );
}

export default Profile;
