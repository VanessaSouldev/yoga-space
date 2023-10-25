import styles from './SignIn.module.css';
import waters from '../../Components/assets/images/lilac-waters.jpg';
import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from "../../Context/AuthContext";
import AccountSignInButton from "../../Components/Buttons/SignInPage/AccountSignInButton";
import axios from "axios";


function SignIn() {

    const {login} = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [loading, toggleLoading] = useState(false);
    // const [error, toggleError] = useState(false);



    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const result = await axios.post(`https://frontend-educational-backend.herokuapp.com/api/auth/signin`, {
                username: username,
                password: password,
            })

            console.log(result.data.accessToken);
            login(result.data);


        } catch (e) {

        }

    }

    return (

        <>
            <header>
                <h4 className={styles["sign-in-header"]}>
                    sign in to enter your space
                </h4>
            </header>

            <section>
                <img className={styles["rectangle-center"]} src={waters} alt="lilac waters"/>
                <form onSubmit={handleSubmit}>
                    <div className={styles["input-container"]}>
                        <label htmlFor="signin-username">
                            <h5>
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
                            <h5>
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
                        <AccountSignInButton
                            clickHandler={(handleSubmit)}
                            >
                            <h6>
                                Click here to enter your yoga SPACE
                            </h6>
                        </AccountSignInButton>
                    </div>
                </form>

                {/*{loading && <p>Loading...</p>}*/}
                {/*{error === true && error && <p>Username or Password incorrect, please try again</p>}*/}

                <p>Don't have an account? <Link to="/signup">Sign up</Link> first</p>
            </section>
        </>
    );
}

export default SignIn;