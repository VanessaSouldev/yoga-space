import React from 'react';
import './SignInButton.css';
import {useHistory} from "react-router-dom";

function SignInButton({   type = "button",
                            children
                        }) {

    const history = useHistory();

    function handleClickSignin() {
        history.push("/signin");
    }

    return  (
        <div className="sign-in-container">

            <button
                type={type}
                onClick={handleClickSignin}
                className="sign-in-button">
                {children}
            </button>
        </div>

    );
}
export default SignInButton;