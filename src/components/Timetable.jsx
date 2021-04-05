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
import Compulsory from './Compulsory.jsx';
import Elective from './Elective.jsx';
import MyTimeTable from './MyTimeTable.jsx';

// Util components
import Pagination from '../util-components/Pagination.jsx';

// Export functions
import { paginate } from '../util-components/paginate.js';

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
        helpVariable: true,
        pageSize: 3,
        currentPage: 1,
        selectedDay: null,
        searchQuery: '',
        messages: [],
        allDaysMessage: [],
        showRecentMessage: true,
        showDaysMessage: true,
        removeAllAdds: true
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

    handleTypeSelect_1 = type_1 => {
        this.setState({ selctedType_1: type_1, selectedType_2: null });
        this.setState({ isHidden: !this.state.isHidden });
    }

    handleTypeSelect_2 = type_2 => {
        this.setState({ selectedType_2: type_2, selectedType_1: null });
        this.setState({ isHidden: !this.state.isHidden });
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

        this.setState({ showRecentMessage: this.state.showRecentMessage = true})
        this.setState({ showDaysMessage: this.state.showDaysMessage = false})
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

    handleDisableOnClick_2 = event => {
        event.preventDefault();
        event.target.disabled = true;
    }

    handleDeleteCourse_2 = myType_2 => {
        const myTypes_2 = this.state.myTypes_2.filter(m => m.id !== myType_2.id);
        this.setState({ myTypes_2 });
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

        this.setState({ showRecentMessage: this.state.showRecentMessage = true})
        this.setState({ showDaysMessage: this.state.showDaysMessage = false})
        this.setState({ removeAllAdds: this.state.removeAllAdds = false})
        this.setState({ isRemoved: this.state.isRemoved = false})
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

    handleReset = event => {
        event.preventDefault();
        const courses_map_1 = this.state.courses.map(course => course);
        const compulsory_courses_1 = courses_map_1.filter(c => c.id <= 13);

        const unique = compulsory_courses_1.filter((item, index) => compulsory_courses_1.indexOf(item) === index);
        this.setState({ myTypes_1: unique });
    }

    handleDisableButton = event => {
        event.preventDefault();
    }

    handleRefresh = event => {
        event.preventDefault();
        this.setState({ disabled: !this.state.disabled }); 

        const removed_1 = this.state.myTypes_1;
        removed_1.length = 0;
        this.setState({ removed_1 })

        this.setState({ removeAllAdds: this.state.removeAllAdds = true})
        this.setState({ isRemoved: this.state.isRemoved = true})

        window.location.reload(false);

        event.preventDefault();
        this.setState({ show: false })
    }

    handleReturnButton = event => { 
        event.preventDefault();
        this.setState({ show: true })
    }

    handleRefresh2 = event => {
        event.preventDefault();
        this.handleTypeSelect_1();

        const removed_1 = this.state.myTypes_1;
        removed_1.length = 0;
        this.setState({ removed_1 })

        this.setState({ remove: this.state.remove = true});

        window.location.reload(false);
    }

    handleRemoveMyTypes_1 = course => {
        const mapped = this.state.myTypes_1.map(myType_1 => myType_1);
        const filtered2 = mapped.filter(m => m.id !== course.id);
        this.setState({ myTypes_1: filtered2 });
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

    handlePageChange = page => {
        this.setState({ currentPage: page });
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
        this.setState({ showRecentMessage: this.state.showRecentMessage = false})   
        this.setState({ showDaysMessage: this.state.showDaysMessage = true})     
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
            helpVariable,
            pageSize,
            currentPage,
            days,
            selectedDay,
            searchQuery,
            messages,
            showRecentMessage,
            showDaysMessage,
            removeAllAdds
        } = this.state;

        let filtered = courses;

        if (selectedType_1 && selectedType_1.id_1)
            filtered = courses.filter(courses => courses.type.id_1 === selectedType_1.id_1);
        else if (selectedType_2 && selectedType_2.id_2)
            filtered = courses.filter(courses => courses.type.id_2 === selectedType_2.id_2);

        let filteredSecond = filtered;

        if (searchQuery)
            filteredSecond = filteredSecond.filter(course =>
                course.name.toLowerCase().startsWith(searchQuery.toLowerCase()));
        else if (selectedDay && selectedDay.id)
            filteredSecond = filteredSecond.filter(course => course.day.id === selectedDay.id);

        const { length: count } = filteredSecond;

        const filteredAndPaginated = paginate(filteredSecond, currentPage, pageSize);

        const sorted_1 = _.orderBy(myTypes_1, [sortColumn.path]);
        const sorted_2 = _.orderBy(myTypes_2, [sortColumn.path]);   

        const filteredSorted_1 = selectedDay && selectedDay.id
        ? sorted_1.filter(course => course.day.id === selectedDay.id)
        : sorted_1; 

        const sorted_time = _.orderBy(filteredSorted_1, [this.state.timeSorted.path]); 

        const sorted1Count = sorted_time.length;         
        
        const sortedMyTypes_1 = paginate(sorted_time, currentPage, pageSize);

        const filteredMessage = selectedDay && selectedDay.id
        ? this.state.messages.filter(m => m.id === selectedDay.id).map(message => message.text)
        : null;

        const filteredAllDaysMessage = selectedDay && selectedDay.name
        ? this.state.allDaysMessage.filter(allDaysMessage => allDaysMessage.name === selectedDay.name).map(allDaysMessage => allDaysMessage.text)
        : null;

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
                                filteredAndPaginated = {filteredAndPaginated}
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
                                onReturnButton={this.handleReturnButton} 
                                onRefresh={this.handleRefresh}                               
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
                            />
                        </div>
                        <div class="tab-pane" id="tab2">
                            <Elective 
                                filtered={filtered}
                                type_2={type_2}
                                selectedType_2={selectedType_2}
                                onTypeSelect_2={this.handleTypeSelect_2}
                                isHidden={isHidden}  
                                onAddMyTypes_2={this.handleAddMyTypes_2}  
                                onDisableOnClick_2={this.handleDisableOnClick_2}                    
                            />
                        </div>
                        <div class="tab-pane" id="tab3">
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
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Timetable;