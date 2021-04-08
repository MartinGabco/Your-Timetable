import React, { Component } from 'react';

//Styles
import '../styles/Timetable.css';

//lodash
import _ from 'lodash';

//Server connection
import axios from 'axios';
import config from '../config.json';

//Help database connection
import { getType_1 } from '../database/types.js';
import { getType_2 } from '../database/types.js';
import { getDays } from '../database/days.js';
import { getMessages } from '../database/messages.js';
import { getAllDaysMessage } from '../database/messages.js';

//Components
import Compulsory from './Compulsory';
import Elective from './Elective';
import MyTimeTable from './MyTimeTable';

// Util components
import Pagination from '../util-components/Pagination.jsx';

// Export functions
import { paginate } from '../util-components/paginate.js';

import $ from 'jquery'

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
        searchQuery: '',
        messages: [],
        allDaysMessage: [],
        showRecentMessage: false,
        showDaysMessage: false,
        removeAllAdds: true,
        removeAllAdds2: true
    }

    componentDidMount() {
        axios.get(config.apiEndpoint)
            .then(res => {
                const courses = res.data;
                this.setState({ courses, days });
            });

        this.setState({ type_1: getType_1() });
        this.setState({ type_2: getType_2() });
        const days = [{ name: 'All days' }, ...getDays()]
        this.setState({ days: getDays() });
        this.setState({ messages: getMessages() });
        this.setState({ allDaysMessage: getAllDaysMessage() });
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

        this.setState({ showRecentMessage: this.state.showRecentMessage = true })
        this.setState({ showDaysMessage: this.state.showDaysMessage = false })
        this.setState({ removeAllAdds: this.state.removeAllAdds = false })
        this.setState({ isRemoved: this.state.isRemoved = false })
    }

    handleAddAll2 = event => {
        event.preventDefault();

        const courses_map_2 = this.state.courses.map(course => course);
        const elective_courses = courses_map_2.filter(c => c.id >= 14);

        this.setState({
            myTypes_2: [...this.state.myTypes_2, ...elective_courses]
        });

        this.setState({ removeAllAdds2: this.state.removeAllAdds2 = false })
    }

    handleRemoveArray_1 = event => {
        event.preventDefault();
        const removed_1 = this.state.myTypes_1;
        removed_1.length = 0;
        this.setState({ removed_1 })

        window.location.reload(false)
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
        this.setState({ disabled: !this.state.disabled });

        const removed_1 = this.state.myTypes_1;
        removed_1.length = 0;
        this.setState({ removed_1 })

        this.setState({ removeAllAdds: this.state.removeAllAdds = true })
        this.setState({ isRemoved: this.state.isRemoved = true })

        window.location.reload(false);

        event.preventDefault();
        this.setState({ show: false })
    }

    handleRefresh2 = event => {
        event.preventDefault();

        const removed_1 = this.state.myTypes_1;
        removed_1.length = 0;
        this.setState({ removed_1 })

        this.setState({ remove: this.state.remove = true });

        window.location.reload(false);
    }

    handleRefresh2_2 = event => {
        event.preventDefault();
        this.setState({ disabled: !this.state.disabled });

        const removed_2 = this.state.myTypes_2;
        removed_2.length = 0;
        this.setState({ removed_2 })

        this.setState({ removeAllAdds2: this.state.removeAllAdds2 = true })
        this.setState({ isRemoved: this.state.isRemoved = true })

        window.location.reload(false);

        event.preventDefault();
        this.setState({ show2: false })
    }

    handleRefresh2_2_2 = event => {
        event.preventDefault();

        const removed_2 = this.state.myTypes_2;
        removed_2.length = 0;
        this.setState({ removed_2 })

        this.setState({ remove: this.state.remove = true });

        window.location.reload(false);
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

    handleChange = query => {
        this.setState({ selectedDay: null, searchQuery: query, currentPage: 1 });
    }

    handleCompulsoryPageChange = page => {
        this.setState({ currentPage: page });
        this.setState({ hide: this.state.hide = true });
    }

    handleCompulsoryDayChange = day => {
        this.setState({ selectedDay: day, currentPage: 1 });
        this.setState({ showRecentMessage: this.state.showRecentMessage = false })
        this.setState({ showDaysMessage: this.state.showDaysMessage = true })
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
            searchQuery,
            messages,
            showRecentMessage,
            showDaysMessage,
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

        let filteredSecond = filtered;

        if (searchQuery)
            filteredSecond = filteredSecond.filter(course =>
                course.name.toLowerCase().startsWith(searchQuery.toLowerCase()));
        else if (selectedDay && selectedDay.id)
            filteredSecond = filteredSecond.filter(course => course.day.id === selectedDay.id);

        const { length: count } = filteredSecond;
        const { length: countElective } = filtered_elective;

        // General pagination
        const filteredAndPaginatedCompulsory = paginate(filteredSecond, currentPage, pageSize);
        const filteredAndPaginatedElective = paginate(filtered_elective, currentPage2, pageSize2);        

        const sorted_1 = _.orderBy(myTypes_1, [sortColumn.path]);
        const sorted_2 = _.orderBy(myTypes_2, [sortColumn.path]);

        const filteredSorted_1 = selectedDay && selectedDay.id ?
            sorted_1.filter(course => course.day.id === selectedDay.id) :
            sorted_1;

        const sorted_time = _.orderBy(filteredSorted_1, [this.state.timeSorted.path]);

        const sorted1Count = sorted_time.length;

        const sortedMyTypes_1 = paginate(sorted_time, currentPage, pageSize);

        const filteredMessage = selectedDay && selectedDay.id ?
            this.state.messages.filter(m => m.id === selectedDay.id).map(message => message.text) :
            null;

        const filteredAllDaysMessage = selectedDay && selectedDay.name ?
            this.state.allDaysMessage.filter(allDaysMessage => allDaysMessage.name === selectedDay.name).map(allDaysMessage => allDaysMessage.text) :
            null;

        //count of myTypes_1 rendered in my-compulsory-courses
        const messagesCount = sortedMyTypes_1.length;

        // count of added myTypes_1 for badge in tabbable
        const badgeCount = myTypes_1.length;

        return ( 
            <React.Fragment>
                <div class="tabbable">
                    <ul class="nav nav-tabs" id = "myTab">
                        <li class="active"> 
                            <a href="#tab1" data-toggle="tab">Compulsory courses</a>
                        </li>
                        <li>
                            <a href="#tab2" data-toggle="tab">Elective courses</a>
                        </li>
                        <li>
                            <a href="#tab3" data-toggle="tab">
                                MyTimeTable 
                                <span class="badge badge-primary badge-pill" style={{background: "#1a1aff" }}>{badgeCount}</span> 
                            </a>
                        </li>
                    </ul> 
                    <div class="tab-content">
                        <div class="tab-pane active" id="tab1" href="first">
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
                                onRefresh2={this.handleRefresh2}
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
                                onChange={this.handleChange}
                                removeAllAdds={removeAllAdds}
                                myTypes_1={myTypes_1}     
                            />
                        </div>
                        <div class="tab-pane" id="tab2" href="second">                           
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
                            />
                        </div>
                        <div class="tab-pane" id="tab3" href="third">
                            <MyTimeTable
                                myTypes_1={myTypes_1}
                                myTypes_2={myTypes_2}
                                onDeleteCourse_2={this.handleDeleteCourse_2}
                                sortColumn={sortColumn}
                                sortedMyTypes_1={sortedMyTypes_1}
                                sorted_2={sorted_2}
                                sorted_time={sorted_time}
                                onRemoveArray_1={this.handleRemoveArray_1}
                                items={sorted1Count}
                                pageSize={pageSize}
                                currentPage={currentPage}
                                onCompulsoryPageChange={this.handleCompulsoryPageChange}
                                days={days}
                                selectedItem={selectedDay}
                                onCompulsoryDayChange={this.handleCompulsoryDayChange}
                                messages={messages}
                                filteredMessage={filteredMessage}
                                filteredAllDaysMessage={filteredAllDaysMessage}     
                                showRecentMessage={showRecentMessage}
                                showDaysMessage={showDaysMessage}
                                onShowPrevious={this.handleShowPrevious}
                                messagesCount={messagesCount}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Timetable;