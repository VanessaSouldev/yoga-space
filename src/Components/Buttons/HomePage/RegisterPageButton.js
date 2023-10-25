import './RegisterPageButton.css';
import {useHistory} from "react-router-dom";




function RegisterPageButton({  clickHandler, type = "button",
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
export default RegisterPageButton;