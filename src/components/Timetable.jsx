import React, { Component } from 'react';
import axios from 'axios';

class Timetable extends Component {
    state = { 
        courses: []
     }

    componentDidMount() {
        axios.get(`http://localhost:3000/courses`)
        .then(res => {
        const courses = res.data;
        this.setState({ courses });
        })
    }

    render() { 
        return ( 
            <div className="wrapper">
              {this.state.courses.map(course => (
                  <li>{course.name}</li>
              ))}
            </div>
         );
    }
}
 
export default Timetable;