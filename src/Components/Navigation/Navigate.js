import React from 'react';
import {NavLink} from "react-router-dom";
import './Navigate.css';

function Navigation() {
    return (
        <nav>
            <div className="nav-container">
                <h4 className="nav-header">Space navigation</h4>

                <ul>
                    <li><NavLink to="/" className={({ isActive}) => isActive ? 'active-link' : 'default-link'}>Homepage</NavLink></li>
                    <li><NavLink to="/profile" className={({ isActive}) => isActive ? 'active-link' : 'default-link'}>Profilepage</NavLink></li>
                    <li><NavLink to="/welcomepage" className={({ isActive}) => isActive ? 'active-link' : 'default-link'}>To your daily Yogavideo's</NavLink></li>
                    <li><NavLink to="/signin" className={({ isActive}) => isActive ? 'active-link' : 'default-link'}>Login page</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;