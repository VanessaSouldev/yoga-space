// import React, {useState, useContext} from "react";
// import {AuthContext} from "../../Context/AuthContext";
// import styles from "./ProfilePage.module.css";
// import Button from "../../Components/Button/Button";
// import {useHistory} from "react-router-dom";
// import YogaPoseSearchBar from "../../Components/ProfilePage/YogaPoseSearchBar";
// // import axios from "axios";
//
//
// function Profile() {
//
//     const {user} = useContext(AuthContext);
//     const history = useHistory();
//     let favorites = (("favorites") || "[]");
//     // const [videoResultsYogaPose, setVideoResultsYogaPose] = useState([]);
//     const [yogaPose, setYogaPose] = useState(['']);
//     // const [error, toggleError] = useState(false);
//     // const controller = new AbortController();
//     // let p = "";
//
//
//     // useEffect(() => {
//     //     p = `yoga,${user.yogaPose}`;
//
//
//     //     async function fetchDataYogaPose() {
//     //
//     //         toggleError(false);
//     //
//     //         try {
//     //             const result = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=3&p=${p}&key=${process.env.REACT_APP_API_KEY}`
//     //                 , {
//     //                     signal: controller.signal,
//     //                 })
//     //             console.log(result.data);
//     //             setVideoResultsYogaPose(result.data.items);
//     //         } catch (e) {
//     //             console.error(e);
//     //             if (axios.isCancel(e)) {
//     //                 console.error('Request is canceled...');
//     //             } else {
//     //                 toggleError(true);
//     //             }
//     //         } finally {
//     //
//     //         }
//     //     }
//     //
//     //     fetchDataYogaPose();
//     //
//     //     return function cleanup() {
//     //         controller.abort();
//     //     }
//     // }, [p, user])
//     //
//     // useEffect(() => {
//     //     user.yogaPose = yogaPose;
//     //
//     //
//     // }, [user, yogaPose]);
//     //
//     //
//     // useEffect(() => {
//     //     history.push(user);
//     //
//     //
//     // })
//     //
//     // function handleSubmitYogaPoseSearch(video) {
//     //
//     //
//     //     switch(video){
//     //         case videoResultsYogaPose[0].id.videoId:
//     //             break;
//     //         case videoResultsYogaPose[1].id.videoId:
//     //             break;
//     //         case videoResultsYogaPose[2].id.videoId:
//     //             break;
//     //
//     //     }
//     //     console.log(videoResultsYogaPose);
//     //
//     // }
//
//
//     function handleClickToQuestionnaire() {
//         history.push("/welcomepage");
//     }
//
//
//
//     return (
//         <>
//             <heading>
//
//                 <h4 className={styles["profile-page-heading"]}>
//                     Profile Page
//                 </h4>
//                 <p className={styles["profile-page-welcome-paragraph"]}>Welcome to your profile {user.username}, here you can find your favorite yoga video's and explore different yogaposes by entering the yogapose you'd like to explore in the search bar below:</p>
//
//             </heading>
//
//             <section>
//                 <YogaPoseSearchBar
//                     setYogaPoseHandler={setYogaPose}/>
//
//                 {/*{error &&<span className={styles["error-message-yogapose-search"]}>*/}
//                 {/*    Oops! this yogapose is rare! we can't find it...*/}
//                 {/*</span>}*/}
//
//                 {/*{videoResultsYogaPose.length > 0 && videoResultsYogaPose.map((video) => {*/}
//                 {/*    {*/}
//                 {/*        console.log(video)*/}
//                 {/*    }*/}
//                 {/*    return (*/}
//                 {/*        <section className={styles["yogapose-videos-container"]}*/}
//                 {/*                 key={video.id.videoId}>*/}
//                 {/*            <iframe*/}
//                 {/*                className={styles["yogapose-video-one"]}*/}
//                 {/*                title={video.snippet.title}*/}
//                 {/*                src={`https://www.youtube.com/embed/${videoResultsYogaPose[0].id.videoId}/?controls=0/autoplay=1`}*/}
//                 {/*                allowFullScreen>*/}
//                 {/*            </iframe>*/}
//             </section>
//             )
//             {/*{favorites.length > 0 && favorites.map((video) => {*/}
//
//             {/*    console.log(video)*/}
//             {/*        */}
//             {/*        return (*/}
//             {/*            <>*/}
//             <section className={styles["favorites-container"]}>
//                 <h6
//                     className={styles["profile-page-favorites-heading"]}>
//                     {user.username}'s latest favorite yoga video's:
//                 </h6>
//
//
//                 {/*    <iframe*/}
//                 {/*        className={styles["favorites"]}*/}
//                 {/*        title={favorites.snippet.title}*/}
//                 {/*        src={favorites}*/}
//                 {/*        allowFullScreen>*/}
//                 {/*    </iframe>*/}
//                 {/*</section>*/}
//
//                 <Button
//                     type={"button"}
//                     className={"profile-page-to-questionnaire-button"}
//                     clickHandler={handleClickToQuestionnaire}
//                 >
//                     Ready for your daily yoga routine?
//                 </Button>
//
//
//
//
//                 );
//                 }
//
//                 export default Profile;
