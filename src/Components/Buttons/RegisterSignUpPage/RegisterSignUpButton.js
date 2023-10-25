import './RegisterSignUpButton.css';




function RegisterSignUpButton({  type = "submit", children
                             }) {

    return (

        <>
            <button
                type={type}
                className="register-sign-up-submit-button">
                {children}
            </button>
        </>

    );

}

export default RegisterSignUpButton