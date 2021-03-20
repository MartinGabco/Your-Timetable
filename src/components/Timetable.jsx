import React, { Component } from 'react';

//Styles
import '../styles/Timetable.css';

//Server connection
import axios from 'axios';
import config from '../config.json';

//Help database connection
import { getType_1 } from '../database/types.js';
import { getType_2 } from '../database/types.js';

//Components
import Compulsory from './Compulsory.jsx';
import Elective from './Elective.jsx';
import MyTimeTable from './MyTimeTable.jsx';

class Timetable extends Component {
    state = {
        courses: [],
        type_1: [],
        type_2: [],
        selectedType_1: null,
        selectedType_2: null,
        isHiddden: true,
        myTypes_1: [],
        myTypes_2: []
    }

    componentDidMount() {
        axios.get(config.apiEndpoint)
            .then(res => {
                const courses = res.data;
                this.setState({ courses });
            });

        this.setState({ type_1: getType_1() })
        this.setState({ type_2: getType_2() })
    }

    handleTypeSelect_1 = type_1 => {
        this.setState({ selectedType_1: type_1, selectedType_2: null })
        this.setState({ isHiddden: !this.state.isHiddden })
    }

    handleTypeSelect_2 = type_2 => {
        this.setState({ selectedType_2: type_2, selectedType_1: null })
        this.setState({ isHiddden: !this.state.isHiddden })
    }

    handleAddMyTypes_1 = course => {
        const newMyType_1 = {
            id: course.id,
            name: course.name,
            day: course.day,
            time: course.time,
            place: course.place
        }

        this.setState({
            myTypes_1: [...this.state.myTypes_1, newMyType_1]
        })
    }

    handleAddMyTypes_2 = course => {
        const newMyType_2 = {
            id: course.id,
            name: course.name,
            day: course.day,
            time: course.time,
            place: course.place
        }

        this.setState({
            myTypes_2: [...this.state.myTypes_2, newMyType_2]
        })
    }

    handleDisableOnClick_1 = event => {
        event.preventDefault();
        event.target.disabled = true;
    }

    handleDisableOnClick_2 = event => {
        event.preventDefault();
        event.target.disabled = true;
    }

    render() {
        const { courses, type_1, type_2, selectedType_1, selectedType_2, isHiddden, myTypes_1, myTypes_2 } = this.state;

        let filtered = courses;

        if (selectedType_1 && selectedType_1.id_1)
            filtered = courses.filter(courses => courses.type.id_1 === selectedType_1.id_1);
        else if (selectedType_2 && selectedType_2.id_2)
            filtered = courses.filter(courses => courses.type.id_2 === selectedType_2.id_2);

        return (
            <React.Fragment>
                <div class="tabbable"> 
                    <ul class="nav nav-tabs">
                        <li class="active"><a href="#tab1" data-toggle="tab">Compulsory courses</a></li>
                        <li><a href="#tab2" data-toggle="tab">Elective courses</a></li>
                        <li><a href="#tab3" data-toggle="tab">MyTimeTable</a></li>
                    </ul>
                    <div class="tab-content">
                        <div class="tab-pane active" id="tab1">
                            <Compulsory 
                                filtered={filtered}
                                type_1={type_1}
                                selectedType_1={selectedType_1}
                                onTypeSelect_1={this.handleTypeSelect_1}
                                isHiddden={isHiddden}
                                onAddMyTypes_1={this.handleAddMyTypes_1}
                                onDisableOnClick_1={this.handleDisableOnClick_1}
                            />
                        </div>
                        <div class="tab-pane" id="tab2">
                            <Elective 
                                filtered={filtered}
                                type_2={type_2}
                                selectedType_2={selectedType_2}
                                onTypeSelect_2={this.handleTypeSelect_2}
                                isHiddden={isHiddden}  
                                onAddMyTypes_2={this.handleAddMyTypes_2}  
                                onDisableOnClick_2={this.handleDisableOnClick_2}                    
                            />
                        </div>
                        <div class="tab-pane" id="tab3">
                            <MyTimeTable 
                                myTypes_1={myTypes_1}
                                myTypes_2={myTypes_2}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Timetable;