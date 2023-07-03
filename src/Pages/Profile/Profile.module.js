import styles from '../Profile/Profile.module.css';
import waters from '../../Images/lilac-waters.jpeg';
import { useHistory } from 'react-router-dom';
import {useContext, useEffect} from "react";
import {AuthContext} from "../../Context/AuthContext";
import axios from "axios";



function Profile() {

    const {user} = useContext(AuthContext);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const result = await axios.post(`https://frontend-educational-backend.herokuapp.com/api/auth/signin`, {
                username: username,
            })

            console.log(result.data.accessToken);
            login(result.data);


        } catch (e) {
            console.error(e);
        }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            history.push("/yogaquestionnaire")


        } catch (e) {
            console.error(e);
        }

    }
    function handleClickRegister() {
        history.push("/signup");
    }

    function handleClickSignin() {
        history.push("/signin");
    }
//
    useEffect(() => {

        // async function fetchData() {
        //     try {
        //         const result = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&q=yoga&key=${KEY}`,{
        //             headers:{
        //                 // Authorization: `Bearer [YOUR_ACCESS_TOKEN]`,
        //                 "Content-Type": "application/json"
        //             }
        //         })
        //         console.log(result)
        //     }
        //
        //     catch(e) {
        //         console.error(e);
        //     }
        // };

    //     fetchData();
//     //
//     //
//     // }, []);
//
    return (
        <>
            <main>
                <div>
                    <article>1</article>
                    <article>2</article>
                    <article>3</article>
                </div>
               <img className={styles.headerbox} src={waters} alt="lilac waters"/>
                <div className={styles["rectangle-container"]}>
                   <section className={styles.header}>
                         Welcome Back {user.username}
                   </section>
                </div>
                </main>

            );
            }

            export default Homepage;

