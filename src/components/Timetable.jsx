import React, { Component } from 'react';

//Server connection
import axios from 'axios';
import config from '../config.json';

//Help database connection
import { getType_1 } from '../database/types.js';
import { getType_2 } from '../database/types.js';

//Components

class Timetable extends Component {
    state = { 
        courses: [],
        type_1: [],
        type_2: []
     }

    componentDidMount() {
        axios.get(config.apiEndpoint)
        .then(res => {
        const courses = res.data;
        this.setState({ courses });
        });

        this.setState({ type_1: getType_1()})
        this.setState({ type_2: getType_2()})
    }

    render() {
        const { courses, type_1, type_2 } = this.state;

        return (
            <div class="tabbable"> 
                <ul class="nav nav-tabs">
                    <li class="active"><a href="#tab1" data-toggle="tab">Compulsory courses</a></li>
                    <li><a href="#tab2" data-toggle="tab">Elective courses</a></li>
                </ul>

                <div class="tab-content">
                    <div class="tab-pane active" id="tab1">
                        {type_1.map(type_1 => (
                            <button 
                                key={type_1.id_1}
                            >
                                {type_1.title_1}
                            </button>
                        ))}                        
                    </div>
                    <div class="tab-pane" id="tab2">
                        {type_2.map(type_2 => (
                            <button 
                                key={type_2.id_2}
                            >
                                {type_2.title_2}
                            </button>
                        ))} 
                    </div>
                </div>
            </div>
        )
    }
}
 
export default Timetable;