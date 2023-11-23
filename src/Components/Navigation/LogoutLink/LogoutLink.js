import './LogoutLink.css';
import {NavLink} from "react-router-dom";


function LogoutLink({
                        clickhandler,
                        children,
                    }) {


    return (
        <div className="logout-link">
            <NavLink
                onClick={clickhandler}
                to="/signin"
                className="nav-logout">
                {children}
            </NavLink>
        </div>

    );
}


export default LogoutLink;