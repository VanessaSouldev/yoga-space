import React from 'react';
import {NavLink} from "react-router-dom";
import './Navigate.css';
// import {AuthContext} from "../../Context/AuthContext";

function Navigate() {

    // const {isAuth} = useContext(AuthContext);
    // const {logout} = useContext(AuthContext);



    return (
        <nav>
            <div className="nav-container">
                <h4 className="nav-header">Space navigation</h4>
                <ul>
                    <li><NavLink to="/" className="nav-links">Homepage</NavLink></li>
                    <li><NavLink to="/profile" className="nav-links">Profile page</NavLink></li>
                    <li><NavLink to="/welcomepage" className="nav-links">To your daily Yoga video's</NavLink></li>
                    <li><NavLink to="/signin" className="nav-links">Login page</NavLink></li>
                </ul>

            </div>
        </nav>
    );
}

export default Navigate;