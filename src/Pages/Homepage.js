import styles from './Homepage.module.css';
import waters from '../Images/lilac-waters.jpeg';
import { useHistory } from 'react-router-dom';

function Homepage() {

    const history = useHistory();

    function handleClickRegister() {
        history.push("/signup");
    }

        function handleClickSignin() {
            history.push("/signin");
    }


            return (
                <main>
                    <header>
                        <h1>
                            Yoga
                            <br/>
                            Space
                        </h1>
                        <h3>
                            The easy way to move
                        </h3>
                    </header>

                    <section>
                        <img className={styles["rectangle-small"]} src={waters} alt="lilac waters"/>

                        <div className={styles.container}>
                            <img className={styles["rectangle-big"]} src={waters} alt="lilac waters"/>

                            <div className={styles["container-buttons"]}>
                                <button
                                    type="button"
                                    onClick={handleClickRegister}
                                    className={styles["register-button"]}>
                                    <h2>
                                        Register
                                    </h2>
                                </button>

                                <button
                                    type="button"
                                    onClick={handleClickSignin}
                                    className={styles["sign-in-button"]}>
                                    <h2>
                                        Sign in
                                    </h2>
                                </button>
                            </div>
                        </div>
                    </section>
                </main>

            );
        }
export default Homepage;
