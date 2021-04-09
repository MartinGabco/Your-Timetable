import React from 'react';
import _ from 'lodash';

// components
import BorderedTable from './BorderedTable.jsx';

// util components
import PaginationMyCompulsory from '../util-components/PaginationMyCompulsory';
import PaginationMyElective from '../util-components/PaginationMyElective';
import DropdownListGroup from '../util-components/DropdownListGroup';
import DropdownListGroupElective from '../util-components/DropdownListGroupElective';

//styles
import '../styles/MyTimeTable.css';

const MyTimeTable = props => {
    const { 
        myTypes_1, 
        myTypes_2, 
        onDeleteCourse_1,
        onRestartCourse,
        onDeleteCourse_2, 
        sortColumn,
        sortedMyTypes_1,
        sortedMyTypes_2,
        sorted_time,
        sorted_time_2,
        sorted_1,
        sorted_2,
        onRemoveArray_1,
        onRemoveArray_2,
        items,
        items_elective,
        pageSize,
        currentPage,
        pageSize2,
        currentPage2,      
        onCompulsoryPageChange,
        onCompulsoryDayChange,        
        onElectivePageChange,
        onElectiveDayChange,
        days,
        selectedDay,
        selectedDay2,
        compulsoryMessages,
        electiveMessages,
        filteredMessageCompulsory,
        filteredMessageElective,
        filteredAllDaysMessage1,
        filteredAllDaysMessage2,
        showRecentMessage,
        showRecentMessage2,
        showDaysMessage,
        showDaysMessage2,
        messagesCount
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
                        {showRecentMessage && 
                            <p className="recentMessageCompulsory">
                                Your recently added compulsory courses. Continue to upper menu.
                            </p>
                        }     
                        {showDaysMessage && 
                            <p className="message">
                                {filteredMessageCompulsory}{filteredAllDaysMessage1}
                            </p>
                        }                      
                        {sortedMyTypes_1.map(myType_1 => (
                            <li className="my-compulsory-course" key={myType_1.id}>
                                <h3>{myType_1.name}</h3>
                                <p>{myType_1.day.name}</p>
                                <p>{myType_1.time}{myType_1.place}</p>
                            </li>      
                        ))}
                    </ul>
                    <div className="myCompulsoryCoursesPageNumbers">
                        <PaginationMyCompulsory 
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
                <div className="my-elective-courses-column">                
                    <div className="myElectiveCoursesFilter">
                        <DropdownListGroupElective 
                            days={days}
                            selectedDay2={selectedDay2}
                            onElectiveDayChange={onElectiveDayChange}
                        />
                    </div>  
                    <ul className="my-elective-courses">
                        {showRecentMessage2 && 
                            <p className="recentMessageElective">
                                Your recently added elective courses. Continue to upper menu.
                            </p>
                        }         
                        {showDaysMessage2 && 
                            <p className="messageElective">
                                {filteredMessageElective} {filteredAllDaysMessage2}
                            </p>
                        }                                                                                                
                        {sortedMyTypes_2.map(myType_2 => (
                            <li className="my-elective-course" key={myType_2.id}>
                                <h3>{myType_2.name}</h3>
                                <p>{myType_2.day.name}</p>
                                <p>{myType_2.time}{myType_2.place}</p>
                            </li>
                        ))}
                    </ul>
                    <div className="myElectiveCoursesPageNumbers">
                        <PaginationMyElective 
                            items_elective={items_elective}
                            pageSize2={pageSize2}
                            currentPage2={currentPage2}
                            onElectivePageChange={onElectivePageChange}
                        />
                    </div>   
                    <div className="myElectiveCoursesRemove">
                        <a className="remove-all-elective" onClick={(event) => onRemoveArray_2(event)}>Remove all courses</a>                 
                    </div>                 
                </div>
            </div>
            <div className="table">
                {showRecentMessage && 
                    <p className="recentMessageCompulsory">
                        Your recently added compulsory courses. Continue to upper menu.
                    </p>
                }
                {showDaysMessage && 
                    <p className="message">
                        {filteredMessageCompulsory}{filteredAllDaysMessage1}
                    </p>
                }
                {showRecentMessage2 && 
                    <p className="recentMessageElective">
                        Your recently added elective courses. Continue to upper menu.
                    </p>
                }         
                {showDaysMessage2 && 
                    <p className="messageElective">
                        {filteredMessageElective}{filteredAllDaysMessage2}
                    </p>
                }                 
                <BorderedTable
                    myTypes_1={myTypes_1}
                    myTypes_2={myTypes_2}
                    sortColumn={sortColumn}
                    sorted_time={sorted_time}
                    sorted_time_2={sorted_time_2}
                />
            </div>
        </div>
    );
}
 
export default MyTimeTable;