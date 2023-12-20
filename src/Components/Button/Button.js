import './Button.css';


function Button({
                    clickHandler, type, children, className, disabled
                }) {


    return (<div>

            <button
                type={type}
                onClick={clickHandler}
                className={className}
                disabled={disabled}>
                {children}
            </button>
        </div>

    );
}

export default Button;