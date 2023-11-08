import './Button.css';


function Button({  clickHandler,
                    type,
                    children,
                    className
                        }) {



    return  (
        <div>

            <button
                type={type}
                onClick={clickHandler}
                className={className}>
                {children}
            </button>
        </div>

    );
}
export default Button;