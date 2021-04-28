import React from 'react';
import { NavLink, Router } from 'react-router-dom';

// style
import './Navigation.css';

const Navigation = () => {
    return (  
        <nav class="navigation-menu">
            <ul className="navigation-list">
                <li className="navigation-item active">
                    <NavLink to="/" exact>
                        <a className="navigation-link">Home</a>
                    </NavLink>
                </li>
                <li className="navigation-item">
                    <NavLink to="/registerform">
                        <a className="navigation-link">Register</a>
                    </NavLink>
                </li>                
                <li className="navigation-item">
                    <NavLink to="/loginform">
                        <a className="navigation-link">Login</a>
                    </NavLink>
                </li>
            </ul>
        </nav>  
    );
}
 
export default Navigation;