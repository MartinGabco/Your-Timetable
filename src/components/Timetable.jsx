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

    render() {
        const { courses, type_1, type_2, selectedType_1, selectedType_2, isHiddden } = this.state;

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
                            />
                        </div>
                        <div class="tab-pane" id="tab2">
                            <Elective 
                                filtered={filtered}
                                type_2={type_2}
                                selectedType_2={selectedType_2}
                                onTypeSelect_2={this.handleTypeSelect_2}
                                isHiddden={isHiddden}                        
                            />
                        </div>
                        <div class="tab-pane" id="tab3">
                            <MyTimeTable />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Timetable;