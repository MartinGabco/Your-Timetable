import React from 'react';
import { NavLink, Router } from 'react-router-dom';

//Components
import About from './components/About';
import Compulsory from './components/Compulsory';
import Elective from './components/Elective';
import MyTimeTable from './components/MyTimeTable';

const Navigation = () => {
    return (
        <div class="tabbable">  
            <nav class="nav nav-tabs">
                <li class="active">
                    <a href="#tab1" data-toggle="tab">
                        <NavLink to="/" exact>About</NavLink>
                    </a>
                </li>
                <li>
                    <a href="#tab2" data-toggle="tab">
                        <NavLink to="/compulsory" exact>Compulsory</NavLink>
                    </a>
                </li>
                <li>
                    <a href="#tab3" data-toggle="tab">
                        <NavLink to="/elective">Elective</NavLink>
                    </a>
                </li>
                <li>
                    <a href="#tab4" data-toggle="tab">
                        <NavLink to="/table">MyTimeTable</NavLink>
                    </a>
                </li>
            </nav>  
        </div>
    );
}
 
export default Navigation;