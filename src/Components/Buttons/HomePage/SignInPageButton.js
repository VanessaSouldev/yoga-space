import './SignInPageButton.css';
import {useHistory} from "react-router-dom";


function SignInPageButton({   type = "button",
                            children
                        }) {


    const history = useHistory();


    function handleClickSignIn() {
        history.push("/signin");
    }

    return  (
        <div className="sign-in-container">

            <button
                type={type}
                onClick={handleClickSignIn}
                className="sign-in-button">
                {children}
            </button>
        </div>

    );
}
export default SignInPageButton;