import styles from "./SignUp.module.css";
import waters from "../Images/lilac-waters.jpeg";
import {useHistory} from "react-router-dom";

function SignUp()   {

    const history = useHistory();

    function handleClickProfile() {
        history.push("/profile");
    }

    return (
        <main>
            <h4>At your own time in your own space</h4>
            <img className={styles["rectangle-signup"]} src={waters} alt="lilac waters"/>
            <form>
                <div className={styles["input-container"]}>
                    <label htmlFor="first-name">
                        <h5>
                            First name
                        </h5>
                        <input
                            type="text"
                            id="first-name"
                            className={styles.input}
                            placeholder="first name"
                        />
                    </label>
                    <br/>
                    <label htmlFor="last-name">
                        <h5>
                            Last name
                        </h5>
                    <input
                        type="text"
                        id="last-name"
                        className={styles.input}
                        placeholder="last name"
                    />
                </label>
                    <br/>
                    <label htmlFor="username">
                        <h5>
                            Username
                        </h5>
                    <input
                        type="text"
                        id="username"
                        className={styles.input}
                        placeholder="username"
                    />
                    </label>
                    <br/>
                    <label htmlFor="signin-email">
                        <h5>
                            Email address
                        </h5>
                        <input
                            type="email"
                            id="signin-email"
                            className={styles.input}
                            placeholder="email"
                        />
                    </label>
                    <br/>
                    <label htmlFor="signin-password">
                        <h5>
                            Choose a password
                        </h5>
                        <input
                            type="password"
                            id="signin-password"
                            className={styles.input}
                            placeholder="password"
                        />
                    </label>
                        </div>
                <button
                    type="submit"
                    onClick={handleClickProfile}
                    className={styles["signup-button"]}>
                    <h6>
                        Sign me up!
                    </h6>
                </button>
                </form>
        </main>

    );
}

export default SignUp;