import React from 'react';
import { NavLink, Router } from 'react-router-dom';

//Components
import Timetable from './components/Timetable.jsx';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';

// style
import './css/main.css';

const Navigation = () => {
    return ( <
        nav class = "navigation-menu" >
        <
        ul className = "navigation-list" >
        <
        li className = "navigation-item active" >
        <
        NavLink to = "/"
        exact >
        <
        a className = "navigation-link" > Home < /a> < /
        NavLink > <
        /li> <
        li className = "navigation-item" >
        <
        NavLink to = "/registerform" >
        <
        a className = "navigation-link" > Register < /a> < /
        NavLink > <
        /li>                 <
        li className = "navigation-item" >
        <
        NavLink to = "/loginform" >
        <
        a className = "navigation-link" > Login < /a> < /
        NavLink > <
        /li> < /
        ul > <
        /nav>  
    );
}

export default Navigation;