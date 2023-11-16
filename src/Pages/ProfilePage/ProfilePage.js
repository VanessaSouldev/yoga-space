import React, {useContext} from "react";
import {AuthContext} from "../../Context/AuthContext";
import styles from "./ProfilePage.module.css";
import Button from "../../Components/Button/Button";
import {useHistory, Redirect} from "react-router-dom";
import YogaPoseSearchBar from "../../Components/ProfilePage/YogaPoseSearchBar";
import LogoutLink from "../../Components/LogoutLink/LogoutLink";
// import axios from "axios";


function Profile() {

    const {user} = useContext(AuthContext);
    const {isAuth} = useContext(AuthContext);
    const {logout} = useContext(AuthContext);
    const history = useHistory();
    // const favorites = (localStorage.getItem("favorites") || "[]");


function handleClickToQuestionnaire() {
    history.push("/welcomepage");
}

    // console.log(favorites);

    return (
      <>
            <heading>

            <h4 className={styles["profile-page-heading"]}>
                Profile Page
            </h4>
                <p className={styles["profile-page-welcome-paragraph"]}>Welcome to your profile {user.username}, here you can find your favorite yoga video's and explore different yogaposes by entering it below:</p>

            </heading>

            <section>
                        <YogaPoseSearchBar
                           setYogaPoseHandler={""}/>

                        </section>

          <section className={styles["favorites-container"]}>

                <h6
                    className={styles["profile-page-favorites-heading"]}>
                        {user.username}'s favorite yoga video's:
                </h6>


          </section>

            <Button
                type={"button"}
                className={"profile-page-to-questionnaire-button"}
                clickHandler={handleClickToQuestionnaire}
            >
            For your daily yoga routine, press here!
            </Button>
          {isAuth ?
              <LogoutLink
                  clickhandler={logout}>
                  Sign out
              </LogoutLink> : <Redirect to=" /signin"/>}

</>

    );
}

export default Profile;
