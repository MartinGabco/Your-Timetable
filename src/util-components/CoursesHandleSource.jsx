import React, { Component } from 'react';
import _ from 'lodash';

class CoursesHandleSource extends Component {
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
    
    // handling events

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

    handleRemoveArray = event => {
        event.preventDefault();
        const removed_1 = this.state.myTypes_1;
        removed_1.length = 0;
        this.setState({ removed_1 })

        window.location.reload(false);
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

}

export default CoursesHandleSource;