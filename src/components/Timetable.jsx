import React, { Component } from 'react';
import axios from 'axios';
import config from '../config.json';

//Components
import Courses from './Courses.jsx';

class Timetable extends Component {
    state = { 
        courses: []
     }

    componentDidMount() {
        axios.get(config.apiEndpoint)
        .then(res => {
        const courses = res.data;
        this.setState({ courses });
        })
    }

    render() { 
        const { courses } = this.state;

        return ( 
            <Courses courses={courses}/>
        );
    }
}
 
export default Timetable;