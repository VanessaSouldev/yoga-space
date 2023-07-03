import styles from './Homepage.module.css';
import waters from '../../Images/lilac-waters.jpeg';
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
                <main className={styles["outer-content-container"]}>


                    <section>
                        <div className={styles["header-container inner-content-container"]}>
                            <div className={styles["rectangles-headers-container"]}>

                                <h1>
                                    Yoga Space
                                </h1>
                                <h3>
                                    The easy way to move
                                </h3>
                                <img className={styles["rectangle-small"]} src={waters} alt="lilac waters"/>
                                <img className={styles["rectangle-big"]} src={waters} alt="lilac waters"/>
                            </div>

                        </div>
                    </section>


                    {/*<section id={styles["sign-up-or-in"]}>*/}

                    {/*    <div className={styles["inner-content-container"]}>*/}



                    {/*    <div className={styles["register-container"]}>*/}
                    {/*        <button*/}
                    {/*            type="button"*/}
                    {/*            onClick={handleClickRegister}*/}
                    {/*            className={styles["register-button"]}>*/}
                    {/*            Register*/}
                    {/*        </button>*/}
                    {/*    </div>*/}

                    {/*    <p className={styles["under-register-text"]}>For daily yoga video's</p>*/}

                    {/*    <div className={styles["sign-in-container"]}>*/}
                    {/*        <button*/}
                    {/*            type="button"*/}
                    {/*            onClick={handleClickSignin}*/}
                    {/*            className={styles["sign-in-button"]}>*/}
                    {/*            Sign in*/}
                    {/*        </button>*/}
                    {/*    </div>*/}

                    {/*    <p className={styles["under-sign-in-text"]}>To enter your yoga space</p>*/}
                    {/*    </div>*/}
                    {/*</section>*/}
                </main>

            );
}

export default Homepage;
