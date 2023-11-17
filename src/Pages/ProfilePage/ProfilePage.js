import React, {useState, useContext, useEffect} from "react";
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
    const [yogaPose, setYogaPose] = useState([]);
    const [yogaPoseVideoResults, setYogaPoseVideoResults] = useState([]);

    let p = "";
    // const favorites = (localStorage.getItem("favorites") || "[]");

    useEffect(() => {
        p = `yogapose, ${yogaPose}`;
    })

    useEffect(() => {async function fetchYogaPose() {


        toggleError(false);


        try {
            const result = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=3&q=${p}&key=${process.env.REACT_APP_API_KEY}`)
            console.log(result)
            setYogaPoseVideoResults(result.data.items);
            console.log(result.data.items);


        } catch (e) {
            console.error(e);
            toggleError(true);
            }
        }
    if (yogaPose){
        fetchYogaPose();
    }

},[p, yogaPose]);





function handleClickToQuestionnaire() {
    history.push("/welcomepage");
}

    // console.log(favorites);

    return (

      <>
          <LogoutLink
              clickhandler={logout}>
              Sign out
          </LogoutLink>

            <heading>

            <h4 className={styles["profile-page-heading"]}>
                Profile Page
            </h4>
                <p className={styles["profile-page-welcome-paragraph"]}>Welcome to your profile {user.username}, here you can find your favorite yoga video's and explore different yogaposes by entering it below:</p>

            </heading>

                <YogaPoseSearchBar
                    setYogaPoseHandler={setYogaPose}
                />
                {error && <span className="wrong-yogapose-error">
    	            Oops! This yogapose is too difficult to explain
                </span>}



            {yogaPoseVideoResults.length && yogaPoseVideoResults.map((video) => {

                return (
                <section className={styles["iframe-yogapose-container"]} key={video.id.videoId}>
                <iframe
                className={styles["yogapose-result"]}
                title={video.snippet.title}
                src={`https://www.youtube.com/embed/${video.id.videoId}/?controls=0/autoplay=1`}
                allowFullScreen>
                </iframe>
                </section>
                )
            })
            }


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


</>

    );
}

export default Profile;
