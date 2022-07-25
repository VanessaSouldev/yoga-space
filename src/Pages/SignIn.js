import styles from './SignIn.module.css';
import waters from '../Images/lilac-waters.jpeg';
import { useHistory } from "react-router-dom";


function SignIn() {

    const history = useHistory();

    function handleClickProfile() {
        history.push("/profile");
    }

    return(

        <main>
        <header>
            <h4>
                sign in to enter your space
            </h4>
        </header>

        <section>
            <img className={styles["rectangle-center"]} src={waters} alt="lilac waters"/>
            <form>
                <div className={styles["input-container"]}>
                    <label htmlFor="signin-email">
                        <h5>
                            E-mail:
                        </h5>
                        <input
                            type="email"
                            id="signin-email"
                            className={styles.email}
                            placeholder="Enter your email-address"
                        />
                    </label>
                    <label htmlFor="signin-password">
                        <h5>
                            Password:
                        </h5>
                        <input
                            type="password"
                            id="signin-password"
                            className={styles.password}
                        />
                    </label>
                </div></form>
            <button
                type="submit"
                onClick={handleClickProfile}
                className={styles["submit-button"]}>
                <h6>
                    Click here to enter your yoga SPACE
                </h6>
            </button>

        </section>
        </main>
    );

}

export default SignIn;
