import './AccountSignInButton.css';




function AccountSignInButton({ clickHandler, type = "submit", children
                                }) {

    return (

        <>
            <button
                type={type}
                onClick={clickHandler}
                className="account-sign-in-submit-button">
                {children}
            </button>
        </>

    );

}

export default AccountSignInButton