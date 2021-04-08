import React from 'react';

// Components
import CompulsoryLink from '../util-components/CompulsoryLink.jsx';
import Pagination from '../util-components/Pagination.jsx';
import ListGroup from '../util-components/ListGroup.jsx';
import SearchBox from '../util-components/SearchBox.jsx';

//Styles
import '../styles/Compulsory.css';

const Compulsory = props => {
    const { 
        filteredAndPaginatedCompulsory,
        type_1, 
        selectedType_1, 
        onTypeSelect_1, 
        isHidden, 
        isHidden1,
        onAddMyTypes_1,
        onDisableOnClick_1,
        onAddAll,
        onDisableAll,
        disabled,
        onReset,
        onDisableButton,
        onReturnButton,
        show,
        onRefresh,
        onRefresh2,
        onRemoveMyTypes_1,
        onDisableOnClickRemove_1,
        itemsCount,
        pageSize,
        currentPage,
        onPageChange,
        items,
        onDaysSelect,
        selectedItem,
        searchQuery,
        onChange,
        count,
        removeAllAdds,
        myTypes_1
    } = props;

    //count of added myTypes_1
    const countMyTypes_1 = myTypes_1.length;

    return ( 
        <div className = "row" > 
            <div className="main-content">
                <div className = "col">
                    <div className="listGroup-wrapper">
                        <ListGroup
                            items={items}
                            onDaysSelect={onDaysSelect}
                            selectedItem={selectedItem}
                            count={count}
                        />
                    </div>
                    <div className="namesSearchWrapper">
                        <SearchBox 
                            value={searchQuery}
                            onChange={onChange}
                        />
                    </div>
                    <div className="items-message">
                        <section className="head">
                            <p>List of actually added compulsory courses</p>
                        </section>
                        <section className="count-box">
                            <p><b>Count: {countMyTypes_1}</b></p>
                        </section>
                        <section className="body">
                            <ol className="course-items-list" type="number">
                                {myTypes_1.map(myType_1 => (
                                    <li key={myType_1.id} className="list-item">{myType_1.name}</li>
                                ))}
                            </ol> 
                        </section>
                    </div>
                </div>
                <div className = "col">
                    <ul className = "compulsory-course-list">
                        {filteredAndPaginatedCompulsory.map(course => ( 
                            <li key = {course.id} className="compulsory-course-item">
                                <h4>{course.name}</h4>
                                <p>{course.day.name}</p>
                                <p>{course.time}{course.place}</p>
                                {removeAllAdds && <button 
                                    className="add-button"
                                    disabled = {course.value === 0 ? false : true}
                                    onClick={() => {onAddMyTypes_1(course); onDisableOnClick_1(course);}}
                                >
                                    Add to your timetable
                                </button>}
                                {removeAllAdds && <button 
                                    className="remove-button"
                                    disabled = {course.value === 1 ? false : true}
                                    onClick={() => {onRemoveMyTypes_1(course); onDisableOnClickRemove_1(course);}}                                
                                >
                                    Remove from your timetable
                                </button>}
                            </li>                     
                        ))}                              
                    </ul>
                    <Pagination
                        itemsCount={itemsCount}
                        pageSize={pageSize}    
                        currentPage={currentPage}
                        onPageChange={onPageChange}             
                    /> 
                    <div className="buttonsWrapper">
                        <section className="section1">
                            <button
                                className="add-all"
                                onClick={(event) => {
                                    onAddAll(event); 
                                    onDisableAll(event);
                                    onDisableButton(event); 
                                    onReset(event); 
                                    onReturnButton(event);
                                }}
                            >
                                Add all courses
                            </button>
                            {show && <button
                                className="backToStart"
                                onClick={(event) => onRefresh(event)}
                            >
                                Return to start
                            </button>} 
                        </section> 
                        <section className="section2">
                            <button
                                className="start"
                                onClick={(event) => onRefresh2(event)}
                            >
                                Start electing again
                            </button> 
                        </section>
                    </div>  
                </div>
            </div>
        </div>                              
    );
}

export default Compulsory;