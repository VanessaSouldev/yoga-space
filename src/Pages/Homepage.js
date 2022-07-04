import './Homepage.css';
import waters from '../Images/lilac-waters.jpeg';
import { useHistory } from 'react-router-dom';

function Homepage() {

    const history = useHistory();

    function handleClickRegister() {
        history.push("/signup");
    }

        function handleClickSignin(e) {
        e.preventDefault()
            history.push("/signin");
    }


            return (
                <main>
                    <header>
                        <h1>
                            Yoga Space
                        </h1>
                        <h3>
                            The easy way to move
                        </h3>
                    </header>

                    <section>
                        <img className="rectangle-small" src={waters} alt="lilac waters"/>

                        <div className="container">
                            <img className="rectangle-big" src={waters} alt="lilac waters"/>

                            <div className="container-buttons">
                                <button
                                    type="button"
                                    onClick={handleClickRegister}
                                    className="register-button">
                                    <h2>
                                        Register
                                    </h2>
                                </button>

                                <button
                                    type="button"
                                    onClick={handleClickSignin}
                                    className="sign-in-button">
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
