import React from 'react';
import {NavLink} from "react-router-dom";
import './Navigate.css';

function Navigate() {
    return (
        <nav>
            <div className="nav-container">
                <h4 className="nav-header">Space navigation</h4>
                <ul>
                    <li><NavLink to="/" className={"link-navigation"}>Homepage</NavLink></li>
                    <li><NavLink to="/profile" className={"link-navigation"}>Profile page</NavLink></li>
                    <li><NavLink to="/welcomepage" className={"link-navigation"}>To your daily Yoga video's</NavLink></li>
                    <li><NavLink to="/signin" className={"link-navigation"}>Login page</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigate;