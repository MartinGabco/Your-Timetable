import React, { Component } from 'react';

//Styles
import '../styles/Timetable.css';
import '../styles/LoginForm.css';

//lodash
import _ from 'lodash';

//Server connection
import http from '../services/httpService.js';
import { apiEndpoint } from '../configurations/courses_config.json';
import * as userService from '../services/userService.js';
import { register } from '../services/userService.js';

//Help database connection
import { getType_1 } from '../database/types.js';
import { getType_2 } from '../database/types.js';
import { getDays } from '../database/days.js';
import { getCompulsoryMessages } from '../database/messages.js';
import { getElectiveMessages } from '../database/messages.js';
import { getAllCompulsoryDaysMessage } from '../database/messages.js';
import { getAllElectiveDaysMessage } from '../database/messages.js';

//Components
import Compulsory from './Compulsory';
import Elective from './Elective';
import MyTimeTable from './MyTimeTable';

// Util components
import Pagination from '../util-components/Pagination.jsx';

// Export functions
import { paginate } from '../util-components/paginate.js';

// react-router-dom
import { Link } from 'react-router-dom';

class Timetable extends Component {
    state = {
        courses: [],
        days: [],        
        type_1: [],
        type_2: [],
        selectedType_1: null,
        selectedType_2: null,
        isHidden: true,
        isHidden1: false,
        myTypes_1: [],
        myTypes_2: [],
        sortColumn: { path: 'day.id', order: 'asc' },
        timeSorted: { path: 'id', order: 'asc' },
        disabled: false,
        show: false,
        show2: false,
        helpVariable: true,
        pageSize: 3,
        pageSize2: 3,
        currentPage: 1,
        currentPage2: 1,
        selectedDay: null,
        selectedDay2: null,
        searchQuery: '',
        searchQuery2: '',
        compulsoryMessages: [],
        electiveMessages: [],
        allCompulsoryDaysMessage: [],
        allElectiveDaysMessage: [],
        showRecentMessage: false,
        showRecentMessage2: false,
        showDaysMessage: false,
        showDaysMessage2: false,
        removeAllAdds: true,
        removeAllAdds2: true
    }

    componentDidMount() {
        http.get(apiEndpoint)
            .then(res => {
                const courses = res.data;
                this.setState({ courses, days });
            });

        this.setState({ type_1: getType_1() });
        this.setState({ type_2: getType_2() });
        const days = [{ name: 'All days' }, ...getDays()]
        this.setState({ days: getDays() });
        this.setState({ compulsoryMessages: getCompulsoryMessages() });
        this.setState({ electiveMessages: getElectiveMessages() });
        this.setState({ allCompulsoryDaysMessage: getAllCompulsoryDaysMessage() });
        this.setState({ allElectiveDaysMessage: getAllElectiveDaysMessage() });
    }

    handleAddMyTypes_1 = course => {
        const newMyType_1 = {
            id: course.id,
            value: course.value,
            name: course.name,
            day: course.day,
            time: course.time,
            place: course.place,
            key: course.key,
            color: course.color
        }

        this.setState({
            myTypes_1: [...this.state.myTypes_1, newMyType_1]
        });

        this.setState({ showRecentMessage: this.state.showRecentMessage = true })
        this.setState({ showDaysMessage: this.state.showDaysMessage = false })
    }

    function(myTypes_1) {
        const sorted_1 = _.orderBy(this.state.myTypes_1, [this.state.sortColumn.path]);
        this.setState({ sorted_1: myTypes_1 });
    }

    handleAddMyTypes_2 = course => {
        const newMyType_2 = {
            id: course.id,
            value: course.value,
            name: course.name,
            day: course.day,
            time: course.time,
            place: course.place,
            key: course.key,
            color: course.color
        }

        this.setState({
            myTypes_2: [...this.state.myTypes_2, newMyType_2]
        })

        this.setState({ showRecentMessage2: this.state.showRecentMessage2 = true });
        this.setState({ showDaysMessage2: this.state.showDaysMessage2 = false});
    }

    function(myTypes_2) {
        const sorted_2 = _.orderBy(this.state.myTypes_2, [this.state.sortColumn.path]);
        this.setState({ sorted: myTypes_2 });
    }

    handleDisableOnClick_2 = course => {
        const courses = [...this.state.courses];
        const index = courses.indexOf(course);
        courses[index] = {...course };
        courses[index].value++;
        this.setState({ courses });

        this.setState({ disabled: this.state.disabled = true });
    }

    PerformSort(path) {
        this.setState({ sortColumn: { path, order: 'asc' } });
    }

    handleAddAll = event => {
        event.preventDefault();

        const courses_map_1 = this.state.courses.map(course => course);
        const compulsory_courses_1 = courses_map_1.filter(c => c.id <= 13);

        this.setState({
            myTypes_1: [...this.state.myTypes_1, ...compulsory_courses_1]
        });

        this.setState({ showRecentMessage: this.state.showRecentMessage = true });
        this.setState({ showDaysMessage: this.state.showDaysMessage = false });     
        this.setState({ removeAllAdds: this.state.removeAllAdds = false });
        this.setState({ isRemoved: this.state.isRemoved = false });
    }

    handleAddAll2 = event => {
        event.preventDefault();

        const courses_map_2 = this.state.courses.map(course => course);
        const elective_courses = courses_map_2.filter(c => c.id >= 14);

        this.setState({
            myTypes_2: [...this.state.myTypes_2, ...elective_courses]
        });

        this.setState({ removeAllAdds2: this.state.removeAllAdds2 = false })
        this.setState({ showRecentMessage2: this.state.showRecentMessage2 = true });
        this.setState({ showDaysMessage2: this.state.showDaysMessage2 = false });     
    }

    handleRemoveArray_1 = event => {
        event.preventDefault();
        const removed_1 = this.state.myTypes_1;
        removed_1.length = 0;
        this.setState({ removed_1 })
    }

    handleRemoveArray_2 = event => {
        event.preventDefault();
        const removed_2 = this.state.myTypes_2;
        removed_2.length = 0;
        this.setState({ removed_2 })
    }    

    handleDisableAll = event => {
        event.preventDefault();
        this.setState({ helpVariable: this.state.helpVariable = false });
    }

    handleDisableAll2 = event => {
        event.preventDefault();
        this.setState({ helpVariable: this.state.helpVariable = false });
    }

    handleReset = event => {
        event.preventDefault();
        const courses_map_1 = this.state.courses.map(course => course);
        const compulsory_courses_1 = courses_map_1.filter(c => c.id <= 13);

        const unique = compulsory_courses_1.filter((item, index) => compulsory_courses_1.indexOf(item) === index);
        this.setState({ myTypes_1: unique });
    }

    handleReset2 = event => {
        event.preventDefault();
        const courses_map_2 = this.state.courses.map(course => course);
        const elective_courses = courses_map_2.filter(c => c.id >= 14);

        const unique2 = elective_courses.filter((item, index) => elective_courses.indexOf(item) === index);
        this.setState({ myTypes_2: unique2 });
    }

    handleDisableButton = event => {
        event.preventDefault();
    }

    handleDisableButton2 = event => {
        event.preventDefault();
    }

    handleRefresh = event => {
        event.preventDefault();

        const removed_1 = this.state.myTypes_1;
        removed_1.length = 0;
        this.setState({ removed_1 })

        this.setState({ removeAllAdds: this.state.removeAllAdds = true })
        this.setState({ isRemoved: this.state.isRemoved = true })

        this.setState({ show: false })
    }

    handleRefresh2_2 = event => {
        event.preventDefault();
        this.setState({ disabled: !this.state.disabled });

        const removed_2 = this.state.myTypes_2;
        removed_2.length = 0;
        this.setState({ removed_2 })

        this.setState({ removeAllAdds2: this.state.removeAllAdds2 = true })
        this.setState({ isRemoved: this.state.isRemoved = true })

        event.preventDefault();
        this.setState({ show2: false })
    }

    handleRefresh2_2_2 = event => {
        event.preventDefault();

        const removed_2 = this.state.myTypes_2;
        removed_2.length = 0;
        this.setState({ removed_2 })

        this.setState({ remove: this.state.remove = true });
    }

    handleReturnButton = event => {
        event.preventDefault();
        this.setState({ show: true })
    }

    handleReturnButton2 = event => {
        event.preventDefault();
        this.setState({ show2: true })
    }

    handleRemoveMyTypes_1 = course => {
        const mapped = this.state.myTypes_1.map(myType_1 => myType_1);
        const filtered2 = mapped.filter(m => m.id !== course.id);
        this.setState({ myTypes_1: filtered2 });
    }

    handleRemoveMyTypes_2 = course => {
        const mapped_2 = this.state.myTypes_2.map(myType_2 => myType_2);
        const filtered2_elective = mapped_2.filter(m => m.id !== course.id);
        this.setState({ myTypes_2: filtered2_elective });
    }

    handleDisableOnClick_1 = course => {
        const courses = [...this.state.courses];
        const index = courses.indexOf(course);
        courses[index] = {...course };
        courses[index].value++;
        this.setState({ courses });

        this.setState({ disabled: this.state.disabled = true });
    }

    handleDisableOnClickRemove_1 = course => {
        const courses = [...this.state.courses];
        const index = courses.indexOf(course);
        courses[index] = {...course };
        courses[index].value--;
        this.setState({ courses });
    }

    handleDisableOnClickRemove_2 = course => {
        const courses = [...this.state.courses];
        const index = courses.indexOf(course);
        courses[index] = {...course };
        courses[index].value--;
        this.setState({ courses });
    }

    handlePageChange = page => {
        this.setState({ currentPage: page });
    }

    handleElectivePageChange = page => {
        this.setState({ currentPage2: page });
    }

    handleDaysSelect = day => {
        this.setState({ selectedDay: day, searchQuery: '', currentPage: 1 });
    }

    handleChangeCompulsory = query => {
        this.setState({ selectedDay: null, searchQuery: query, currentPage: 1 });
    }

    handleDaysSelect2 = day => {
        this.setState({ selectedDay2: day, searchQuery2: '', currentPage2: 1 });    
    }

    handleChangeElective = query => {
        this.setState({ selectedDay2: null, searchQuery2: query, currentPage2: 1 });
    }

    handleCompulsoryPageChange = page => {
        this.setState({ currentPage: page });
        this.setState({ hide: this.state.hide = true });
    }

    handleElectivePageChange = page => {
        this.setState({ currentPage2: page }); 
        this.setState({ hide: this.state.hide = true });           
    }

    handleCompulsoryDayChange = day => {
        this.setState({ selectedDay: day, currentPage: 1 });
        this.setState({ showRecentMessage: this.state.showRecentMessage = false })
        this.setState({ showDaysMessage: this.state.showDaysMessage = true })
    }

    handleElectiveDayChange = day => {
        this.setState ({ selectedDay2: day, currentPage2: 1 })
        this.setState({ showRecentMessage2: this.state.showRecentMessage2 = false })
        this.setState({ showDaysMessage2: this.state.showDaysMessage2 = true })
    }

    render() {
        const {
            courses,
            type_1,
            type_2,
            selectedType_1,
            selectedType_2,
            isHidden,
            isHidden1,
            myTypes_1,
            myTypes_2,
            sortColumn,
            onDisableAll,
            disabled,
            show,
            show2,
            helpVariable,
            pageSize,
            pageSize2,
            currentPage,
            currentPage2,
            days,
            selectedDay,
            selectedDay2,
            searchQuery,
            searchQuery2,
            compulsoryMessages,
            electiveMessages,
            showRecentMessage,
            showRecentMessage2,
            showDaysMessage,
            showDaysMessage2,
            removeAllAdds,
            removeAllAdds2,
            countReal
        } = this.state;

        // Extracting compulsory courses ( courses <= 13)
        const courses_map_1 = this.state.courses.map(course => course);
        const compulsory_courses = courses_map_1.filter(c => c.id <= 13);

        //Extracting elective courses (courses => 14)
        const courses_map_2 = this.state.courses.map(course => course);
        const elective_courses = courses_map_2.filter(c => c.id >= 14);

        let filtered = compulsory_courses;
        let filtered_elective = elective_courses;

        if (selectedType_1 && selectedType_1.id_1)
            filtered = courses.filter(courses => courses.type.id_1 === selectedType_1.id_1);
        else if (selectedType_2 && selectedType_2.id_2)
            filtered_elective = courses.filter(courses => courses.type.id_2 === selectedType_2.id_2);

        // Compulsory courses filtrating
        let filteredSecond = filtered;

        if (searchQuery)
            filteredSecond = filteredSecond.filter(course =>
                course.name.toLowerCase().startsWith(searchQuery.toLowerCase()));
        else if (selectedDay && selectedDay.id)
            filteredSecond = filteredSecond.filter(course => course.day.id === selectedDay.id)

        const { length: count } = filteredSecond;

        // Elective courses filtration
        let filtered_elective_second = filtered_elective;
        
        if (searchQuery2)
            filtered_elective_second = filtered_elective.filter(course =>
                course.name.toLowerCase().startsWith(searchQuery2.toLowerCase()));
        else if (selectedDay2 && selectedDay2.id)
            filtered_elective_second = filtered_elective.filter(course => course.day.id === selectedDay2.id);

        const { length: countElective } = filtered_elective_second;

        // General pagination
        const filteredAndPaginatedCompulsory = paginate(filteredSecond, currentPage, pageSize);
        const filteredAndPaginatedElective = paginate(filtered_elective_second, currentPage2, pageSize2);  

        const sorted_1 = _.orderBy(myTypes_1, [sortColumn.path]);
        const sorted_2 = _.orderBy(myTypes_2, [sortColumn.path]);

        const filteredSorted_1 = selectedDay && selectedDay.id 
            ? sorted_1.filter(course => course.day.id === selectedDay.id) 
            : sorted_1;

        const filteredSorted_2 = selectedDay2 && selectedDay2.id 
            ? sorted_2.filter(course => course.day.id === selectedDay2.id) 
            : sorted_2;

        const sorted_time = _.orderBy(filteredSorted_1, [this.state.timeSorted.path]);
        const sorted_time_2= _.orderBy(filteredSorted_2, [this.state.timeSorted.path]);

        const sorted1Count = sorted_time.length;
        const sorted2Count = sorted_time_2.length;

        const sortedMyTypes_1 = paginate(sorted_time, currentPage, pageSize);
        const sortedMyTypes_2 = paginate(sorted_time_2, currentPage2, pageSize2);

        const filteredMessageCompulsory = selectedDay && selectedDay.id 
        ? this.state.compulsoryMessages.filter(m => m.id === selectedDay.id).map(compulsoryMessage => compulsoryMessage.text) 
        : null; 

        const filteredMessageElective = selectedDay2 && selectedDay2.id 
        ? this.state.electiveMessages.filter(m => m.id === selectedDay2.id).map(electiveMessages => electiveMessages.text) 
        : null; 

        const filteredAllDaysMessage1 = selectedDay && selectedDay.name 
        ? this.state.allCompulsoryDaysMessage.filter(allCompulsoryDaysMessage => allCompulsoryDaysMessage.name === selectedDay.name).map(allCompulsoryDaysMessage => allCompulsoryDaysMessage.text) 
        : null;

        const filteredAllDaysMessage2 = selectedDay2 && selectedDay2.name 
        ? this.state.allElectiveDaysMessage.filter(allElectiveDaysMessage => allElectiveDaysMessage.name === selectedDay2.name).map(allElectiveDaysMessage => allElectiveDaysMessage.text) 
        : null;        

        //count of myTypes_1 rendered in my-compulsory-courses
        const messagesCount = sortedMyTypes_1.length;

        // count of added myTypes_1 for badge in tabbable
        const badgeCountComplusory = myTypes_1.length;

        // count of added myTypes_2 for badge in tabbable
        const badgeCountElective = myTypes_2.length;

        return ( 
            <div className="timetable-wrapper">
                <div class="tabbable">
                    <ul class="nav nav-tabs" id = "myTab">
                        <li class="active"> 
                            <a href="#tab1" data-toggle="tab">Timetable</a>
                        </li>
                        <li> 
                            <a href="#tab2" data-toggle="tab">Compulsory courses</a>
                        </li>
                        <li>
                            <a href="#tab3" data-toggle="tab">Elective courses</a>
                        </li>
                        <li>
                            <a href="#tab4" data-toggle="tab">
                                MyTimeTable 
                                <span class="badge badge-primary badge-pill" style={{background: "#1a1aff" }}>{badgeCountComplusory}</span>
                                <span class="badge badge-primary badge-pill" style={{background: "#FF5733" }}>{badgeCountElective}</span>
                            </a>
                        </li>
                    </ul> 
                    <div class="tab-content">
                        <div className="tab-pane active" id="tab1" href="first">
                            <div className="first-tab-pane-holder">
                                <h1>Welcome in Your Timetable</h1>
                                <div className="linking">
                                    <Link to="/registerform">
                                        <a className="register-link">Register here</a>
                                    </Link>
                                    <Link to="/loginform">
                                        <a className="login-link">Login here</a>                                    
                                    </Link>
                                </div>                                
                            </div>
                        </div>
                        <div class="tab-pane" id="tab2" href="second">
                            <Compulsory 
                                filteredAndPaginatedCompulsory = {filteredAndPaginatedCompulsory}
                                type_1={type_1}
                                selectedType_1={selectedType_1}
                                onTypeSelect_1={this.handleTypeSelect_1}
                                isHidden={isHidden}
                                onAddMyTypes_1={this.handleAddMyTypes_1}
                                onDisableOnClick_1={this.handleDisableOnClick_1}
                                onAddAll={this.handleAddAll}
                                onDisableAddMore={this.handleDisableAddMore}
                                onDisableAll={this.handleDisableAll}
                                disabled={disabled}
                                show={show}
                                onReset={this.handleReset}
                                onDisableButton={this.handleDisableButton}
                                onRefresh={this.handleRefresh}
                                onReturnButton={this.handleReturnButton}                                
                                onFadeOut={this.handleFadeOut}
                                isHidden1={isHidden1}
                                onRemoveMyTypes_1={this.handleRemoveMyTypes_1}
                                onDisableOnClickRemove_1={this.handleDisableOnClickRemove_1}
                                onDisabledFunction={this.handleDisabledFunction}
                                itemsCount={count}
                                count={count}
                                pageSize={pageSize}
                                currentPage={currentPage}
                                onPageChange={this.handlePageChange}
                                items={days}
                                onDaysSelect={this.handleDaysSelect}
                                selectedItem={selectedDay}
                                searchQuery={searchQuery}
                                onChangeCompulsory={this.handleChangeCompulsory}
                                removeAllAdds={removeAllAdds}
                                myTypes_1={myTypes_1}
                            />
                        </div>
                        <div class="tab-pane" id="tab3" href="third">                           
                            <Elective 
                                filteredAndPaginatedElective={filteredAndPaginatedElective}
                                type_2={type_2}
                                selectedType_2={selectedType_2}
                                onTypeSelect_2={this.handleTypeSelect_2}
                                isHidden={isHidden}
                                onAddMyTypes_2={this.handleAddMyTypes_2}
                                onDisableOnClick_2={this.handleDisableOnClick_2}
                                onRemoveMyTypes_2={this.handleRemoveMyTypes_2}
                                onDisableOnClickRemove_2={this.handleDisableOnClickRemove_2}
                                show2={show2}
                                onAddAll2={this.handleAddAll2}
                                onDisableAll2={this.handleDisableAll2}
                                onDisableButton2={this.handleDisableButton2}
                                onReset2={this.handleReset2}
                                onReturnButton2={this.handleReturnButton2}
                                onRefresh2_2={this.handleRefresh2_2}
                                onRefresh2_2_2={this.handleRefresh2_2_2}
                                removeAllAdds2={removeAllAdds2}
                                countElective={countElective}
                                pageSize2={pageSize2}
                                currentPage2={currentPage2}
                                onElectivePageChange={this.handleElectivePageChange} 
                                items={days}                            
                                selectedDay2={selectedDay2}   
                                onDaysSelect2={this.handleDaysSelect2}
                                searchQuery2={searchQuery2} 
                                onChangeElective={this.handleChangeElective}
                                myTypes_2={myTypes_2}
                            />
                        </div>
                        <div class="tab-pane" id="tab4" href="fourth">
                            <MyTimeTable
                                myTypes_1={myTypes_1}
                                myTypes_2={myTypes_2}
                                onDeleteCourse_2={this.handleDeleteCourse_2}
                                sortColumn={sortColumn}
                                sortedMyTypes_1={sortedMyTypes_1}
                                sortedMyTypes_2={sortedMyTypes_2}
                                sorted_2={sorted_2}
                                sorted_time={sorted_time}
                                sorted_time_2={sorted_time_2}
                                onRemoveArray_1={this.handleRemoveArray_1}
                                onRemoveArray_2={this.handleRemoveArray_2}
                                items={sorted1Count}
                                items_elective={sorted2Count}
                                pageSize={pageSize}
                                currentPage={currentPage}
                                onCompulsoryPageChange={this.handleCompulsoryPageChange}
                                onCompulsoryDayChange={this.handleCompulsoryDayChange}                                
                                onElectivePageChange={this.handleElectivePageChange}
                                onElectiveDayChange={this.handleElectiveDayChange}                                
                                days={days}
                                selectedItem={selectedDay}
                                compulsoryMessages={compulsoryMessages}
                                electiveMessages={electiveMessages}
                                filteredMessageCompulsory={filteredMessageCompulsory}
                                filteredMessageElective={filteredMessageElective}
                                filteredAllDaysMessage1={filteredAllDaysMessage1}  
                                filteredAllDaysMessage2={filteredAllDaysMessage2}
                                showRecentMessage={showRecentMessage}                                
                                showRecentMessage2={showRecentMessage2}
                                showDaysMessage={showDaysMessage}
                                showDaysMessage2={showDaysMessage2}
                                onShowPrevious={this.handleShowPrevious}
                                messagesCount={messagesCount}
                                pageSize2={pageSize2}
                                currentPage2={currentPage2}
                                selectedDay2={selectedDay2}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Timetable;