import styles from './Homepage.module.css';
import waters from '../../Components/assets/images/lilac-waters.jpg';
import RegisterPageButton from "../../Components/Buttons/HomePage/RegisterPageButton";
import SignInPageButton from "../../Components/Buttons/HomePage/SignInPageButton";
function Homepage() {

    return (
        <>
            <section>
                <div className={styles["rectangles-headers-container"]}>
                    <div className={styles["yoga-space-container"]}>
                        <h1 className={styles["yoga"]}>
                            Yoga
                        </h1>
                        <h1 className={styles["space"]}>
                            Spac
                            <div className={styles["e"]}>e</div>
                        </h1>

                        <div className={styles["rectangle-big-container"]}>
                            <img className={styles["rectangle-big"]} src={waters} alt="lilac waters"/>
                        </div>
                    </div>
                    <div className={styles["easy-way-to-move-container"]}>
                        <h3 className={styles["easy-way-to-move"]}>
                            The easy way to move
                        </h3>
                    </div>
                    <div className={styles["rectangle-small-container"]}>
                        <img className={styles["rectangle-small"]} src={waters} alt="lilac waters"/>
                    </div>
                </div>
            </section>
            <section>
                <div className={styles["inner-content-container sign-up-or-in"]}>

                        <RegisterPageButton>
                            Register
                        </RegisterPageButton>

                        <SignInPageButton>
                            Sign in
                        </SignInPageButton>

                </div>
            </section>
            <p className={styles["under-register-text"]}>For daily yoga video's</p>
            <p className={styles["under-sign-in-text"]}>To enter your yoga space</p>
        </>

    );
}

export default Homepage;
