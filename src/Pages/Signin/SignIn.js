import styles from './SignIn.module.css';
import waters from '../../assets/images/lilac-waters.jpg';
import React, {useContext, useState} from 'react';
import {AuthContext} from "../../Context/AuthContext";
import Button from "../../Components/Button/Button";
import axios from "axios";
import LinkParagraph from "../../Components/Navigation/LinkParagraph/LinkParagraph";


function SignIn() {

    const {login} = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, toggleLoading] = useState(false);
    const [error, toggleError] = useState(false);



    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const result = await axios.post(`https://frontend-educational-backend.herokuapp.com/api/auth/signin`, {
                username: username,
                password: password,
            })

            console.log(result.data.accessToken);
            login(result.data);
            toggleLoading(true)


        } catch (e) {
            toggleError(true)

        }

    }

    return (

        <>
            <header>
                <h4 className={styles["sign-in-header"]}>
                    sign in to enter your space
                </h4>
            </header>
            <footer className={styles["physical-benefits"]}>
                Physical benefits of yoga
                <ul className={styles["physical-benefits-list"]}>
                    <li>increased flexibility.</li>
                    <li>increased muscle strength and tone.</li>
                    <li>improved respiration, energy and vitality.</li>
                    <li>maintaining a balanced metabolism.</li>
                    <li>weight reduction.</li>
                    <li>cardio and circulatory health.</li>
                    <li>improved athletic performance.</li>
                    <li>protection from injury.</li>
                </ul>
            </footer>

            <section>
                <img className={styles["rectangle-center"]} src={waters} alt="lilac waters"/>
                <form onSubmit={handleSubmit}>
                    <div className={styles["input-container"]}>
                        <label htmlFor="signin-username">
                            <h5 className={styles["login-input"]}>
                                Username:
                            </h5>
                            <input
                                type="user"
                                id="signin-username"
                                onChange={(e) => setUsername(e.target.value)}
                                value={username}
                                className={styles.username}
                                placeholder="Enter your username"
                            />
                        </label>
                        <label htmlFor="signin-password">
                            <h5 className={styles["login-input"]}>
                                Password:
                            </h5>
                            <input
                                type="password"

                                id="signin-password"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                className={styles.password}
                            />

                        </label>
                        <Button
                            clickHandler={handleSubmit}
                            className={"account-sign-in-submit-button"}
                            >
                            <h6>
                                Click here to enter your yoga SPACE
                            </h6>
                        </Button>
                    </div>
                </form>

                {loading && <p>Loading...</p>}
                {error === true && error && <h2 className={styles["error-message-sign-in"]}>Username or Password incorrect, please try again</h2>}

                <p className={styles["register-link-paragraph"]}>
                    Don't have an account?
                    <LinkParagraph
                        path="/signup">
                        Sign up
                    </LinkParagraph>
                    first
                </p>
            </section>
        </>
    );
}

export default SignIn;