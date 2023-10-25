import React, {useContext, useEffect} from 'react';
import {AuthContext} from "../../Context/AuthContext";
import styles from "./ProfilePage.module.css";
import ProfilePageToQuestionnaireButton from "../../Components/Buttons/ProfilePage/ProfilePageToQuestionnaireButton";
import {useHistory} from "react-router-dom";



function Profile() {

    const {user} = useContext(AuthContext);
    const history = useHistory();

useEffect(() => {
    history.push(user);
    // history.push(videore)

})


    return (
        <div>
            <h4 className={styles["profile-page-heading"]}>
                Profile Page
            </h4>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <p className={styles["profile-page-welcome-paragraph"]}>Welcome to your profile {user.username}, here you can find your favorite yoga video's below and:</p>
            </div>
            <div>
                <h4 className={styles["profile-page-heading"]}>Favorites</h4>

                <iframe
                    // className={styles["video-one"]}
                    title="favoritevideo"
                    // src={`https://www.youtube.com/embed/${videoResults[1].id.videoId}/?controls=0/autoplay=1`}
                    allowFullScreen
                >
                </iframe>
            </div>
            <ProfilePageToQuestionnaireButton>
                    Ready for your daily yoga routine?
            </ProfilePageToQuestionnaireButton>
        </div>


    );
}

export default Profile;
