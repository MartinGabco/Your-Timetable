import React from 'react';

// Styles
import '../styles/Elective.css';

// Util components
import PaginationElective from '../util-components/PaginationElective';
import ListGroupElective from '../util-components/ListGroupElective';
import SearchBoxElective from '../util-components/SearchBoxElective';

const Elective = props => {
    const { 
        filteredAndPaginatedElective,
        type_2, 
        selectedType_2, 
        onTypeSelect_2, 
        isHidden, 
        onAddMyTypes_2, 
        onDisableOnClick_2 ,
        disabled,
        onRemoveMyTypes_2,
        onDisableOnClickRemove_2,
        onAddAll2,
        onDisableAll2,
        onDisableButton2,
        show2,
        onReset2,
        onReturnButton2,
        onRefresh2_2,
        onRefresh2_2_2,
        removeAllAdds2,
        countElective,
        pageSize2,
        currentPage2,
        onElectivePageChange,
        items,
        selectedDay2,
        onDaysSelect2,
        searchQuery2,
        onChangeElective
    } = props;

    return ( 
        <div className = "row" > 
            <div className="main-content">
                <div className = "col">
                    <div className="listGroup-wrapper">
                        <ListGroupElective 
                            items={items}
                            selectedDay2={selectedDay2}
                            onDaysSelect2={onDaysSelect2} 
                            countElective={countElective} 
                        />
                    </div>
                    <div className="namesSearchWrapper">
                        <SearchBoxElective 
                            value={searchQuery2}
                            onChangeElective={onChangeElective}
                        />
                    </div>
                    <div className="items-message"></div>
                </div>
                <div className = "col">
                    <div className="elective-wrapper">
                        <ul className="elective-course-list">
                            {filteredAndPaginatedElective.map(course => (
                                <li key = {course.id} className="elective-course-item">
                                    <h4>{course.name}</h4>
                                    <p>{course.day.name}</p>
                                    <p>{course.time}{course.place}</p>
                                    {removeAllAdds2 && <button 
                                        className="add-button"   
                                        disabled = {course.value === 0 ? false : true}                     
                                        onClick={() => {onAddMyTypes_2(course); onDisableOnClick_2(course);}}>
                                        Add to your timetable
                                    </button>}
                                    {removeAllAdds2 && <button 
                                        className="remove-button"
                                        disabled = {course.value === 1 ? false : true}
                                        onClick={() => {onRemoveMyTypes_2(course); onDisableOnClickRemove_2(course);}}
                                    >
                                        Remove from your timetable
                                    </button>}
                                </li>
                            ))}
                        </ul>
                        <PaginationElective 
                            items={countElective}
                            pageSize2={pageSize2}    
                            currentPage2={currentPage2}
                            onElectivePageChange={onElectivePageChange}                              
                        />
                        <div className="buttonsWrapper2">
                            <section className="section1_2">
                                <button
                                    className="add-all2"
                                    onClick={(event) => {
                                        onAddAll2(event); 
                                        onDisableAll2(event);
                                        onDisableButton2(event); 
                                        onReset2(event); 
                                        onReturnButton2(event);
                                    }}                        
                                >
                                    Add all courses
                                </button>
                                {show2 && <button
                                    className="backToStart2"
                                    onClick={(event) => onRefresh2_2(event)}
                                >
                                    Return to start
                                </button>}
                            </section> 
                            <section className="section2_2">
                                <button
                                    className="start2"
                                    onClick={(event) => onRefresh2_2_2(event)}
                                >
                                    Start electing again
                                </button> 
                            </section>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Elective;