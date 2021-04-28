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
import '../styles/components/MyTimeTable.css';

const MyTimeTable = props => {
    const { 
        myTypes_1, 
        myTypes_2, 
        sortColumn,
        sortedMyTypes_1,
        sortedMyTypes_2,
        sorted_time,
        sorted_time_2,
        onRemoveArray,
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
        filteredMessageCompulsory,
        filteredMessageElective,
        filteredAllDaysMessage1,
        filteredAllDaysMessage2,
        showRecentMessage,
        showRecentMessage2,
        showDaysMessage,
        showDaysMessage2,
    } = props;

    const store = localStorage.setItem('item', JSON.stringify(myTypes_1))  
    const cartFromLocalStorage = JSON.parse(localStorage.getItem('item') || '[]')

    return (
        <div className="content-wrapper">
            <h1 className="title">List of added compulsory and timetable courses</h1>
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
                                Your recently added compulsory courses. Continue to upper menu
                            </p>
                        }     
                        {showDaysMessage && 
                            <p className="message">
                                {filteredMessageCompulsory}{filteredAllDaysMessage1}
                            </p>
                        } 
                        <ul>                                             
                            {sortedMyTypes_1.map(myType_1 => (
                                    <li className="my-compulsory-course" key={myType_1.id}>
                                        <h3>{myType_1.name}</h3>
                                        <p>{myType_1.day.name}</p>
                                        <p>{myType_1.time}{myType_1.place}</p>
                                    </li>      
                            ))}
                        </ul>
                    </ul>
                    <div className="myCompulsoryCoursesPageNumbers">
                        <PaginationMyCompulsory 
                            items={items}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onCompulsoryPageChange={onCompulsoryPageChange}
                        />
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
                        <ul>
                            {sortedMyTypes_2.map(myType_2 => (
                                <li className="my-elective-course" key={myType_2.id}>
                                    <h3>{myType_2.name}</h3>
                                    <p>{myType_2.day.name}</p>
                                    <p>{myType_2.time}{myType_2.place}</p>
                                </li>
                            ))}                            
                        </ul>                                                                                              
                    </ul>
                    <div className="myElectiveCoursesPageNumbers">
                        <PaginationMyElective 
                            items_elective={items_elective}
                            pageSize2={pageSize2}
                            currentPage2={currentPage2}
                            onElectivePageChange={onElectivePageChange}
                        />
                    </div>                 
                </div>             
            </div>  
            <div className="remove-wrapper">
                <div className="remove-wrapper">
                    <a className="remove-all" onClick={(event) => onRemoveArray(event)}>
                        Remove all courses
                    </a>        
                </div>
            </div> 
            <div className="table">
                <div className="message-table-wrapper">
                    {showRecentMessage && 
                        <p className="recentMessageCompulsory">
                            Your recently added compulsory courses
                        </p>
                    }
                    {showDaysMessage && 
                            <p className="message">
                                {filteredMessageCompulsory}
                                {filteredAllDaysMessage1}
                            </p>
                    }
                    {showRecentMessage2 && 
                        <p className="recentMessageElective">
                            Your recently added elective courses
                        </p>
                    }         
                    {showDaysMessage2 && 
                        <p className="messageElective">
                            {filteredMessageElective}{filteredAllDaysMessage2}
                        </p>
                    }  
                </div>
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