import React from 'react';
import './RegisterButton.css';
import {useHistory} from "react-router-dom";



function RegisterButton({   type = "button",
                            children
                        }) {

    const history = useHistory();

    function handleClickRegister() {
        history.push("/signup");

    }

    return  (
        <div className="register-container">

            <button
                type={type}
                onClick={handleClickRegister}
                className="register-button">
                {children}
            </button>
        </div>

    );
}
export default RegisterButton;