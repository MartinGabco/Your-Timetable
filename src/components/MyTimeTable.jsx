import React from 'react';
import _ from 'lodash';

// components
import BorderedTable from './BorderedTable.jsx';

// util components
import PaginationCompulsory from '../util-components/PaginationCompulsory';
import DropdownListGroup from '../util-components/DropdownListGroup';
import Message from '../util-components/Message';

//styles
import '../styles/MyTimeTable.css';

const MyTimeTable = props => {
    const { 
        myTypes_1, 
        myTypes_2,
        onRestartCourse,
        onDeleteCourse_2, 
        sortColumn,
        sortedMyTypes_1,
        sorted_time,
        sorted_1,
        sorted_2,
        onRemoveArray_1,
        items,
        pageSize,
        currentPage,
        onCompulsoryPageChange,
        days,
        selectedDay,
        onCompulsoryDayChange,
        messages,
        filteredMessage,
        filteredAllDaysMessage,
        showRecentMessage,
        showDaysMessage
    } = props;

    return (
        <div className="content-wrapper">
            <div className="columns-wrapper">
                <div className="my-compulsory-courses-column">
                    <div className="myCompulsoryCoursesFilter">
                        <DropdownListGroup 
                            days={days}
                            selectedItem={selectedDay}
                            onCompulsoryDayChange={onCompulsoryDayChange}
                        />
                    </div>
                    <ul className="my-compulsory-courses">
                        {showRecentMessage && <p className="recentMessage">
                            Your recently added courses. Continue to menu.
                        </p>}
                        {showDaysMessage && <Message 
                            messages={messages}
                            selectedDay={selectedDay}
                            filteredMessage={filteredMessage}
                            filteredAllDaysMessage={filteredAllDaysMessage}
                        />}
                        {sortedMyTypes_1.map(myType_1 => (
                            <li className="my-compulsory-course" key={myType_1.id}>
                                <h3>{myType_1.name}</h3>
                                <p>{myType_1.day.name}</p>
                                <p>{myType_1.time}{myType_1.place}</p>
                            </li>      
                        ))}
                    </ul>
                    <div className="myCompulsoryCoursesPageNumbers">
                        <PaginationCompulsory 
                            items={items}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onCompulsoryPageChange={onCompulsoryPageChange}
                        />
                    </div>
                    <div className="myCompulsoryCoursesRemove">
                        <a className="remove-all" onClick={(event) => onRemoveArray_1(event)}>Remove all courses</a>                 
                    </div>
                </div>
                <ul className="my-elective-courses">
                    {sorted_2.map(myType_2 => (
                        <li className="my-elective-course" key={myType_2.id}>
                            <h3>{myType_2.name}</h3>
                            <p>{myType_2.day.name}</p>
                            <p>{myType_2.time}{myType_2.place}</p>
                            <button 
                                className="cancel-my-elective-course"
                                onClick={() => onDeleteCourse_2(myType_2)}
                            >
                                Remove course
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="table">
                <BorderedTable
                    myTypes_1={myTypes_1}
                    myTypes_2={myTypes_2}
                    sortColumn={sortColumn}
                    sorted_time={sorted_time}
                />
            </div>
        </div>
    );
}
 
export default MyTimeTable;