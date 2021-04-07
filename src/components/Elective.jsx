import React from 'react';

// Styles
import '../styles/Elective.css';

const Elective = props => {
    const { 
        filtered_elective, 
        type_2, 
        selectedType_2, 
        onTypeSelect_2, 
        isHidden, 
        onAddMyTypes_2, 
        onDisableOnClick_2 ,
        disabled,
        onRemoveMyTypes_2,
        onDisableOnClickRemove_2
    } = props;

    return ( 
        <div className="elective-wrapper">
            {!isHidden || <ul className="elective-course-list">
                {filtered_elective.map(course => (
                    <li key = {course.id} className="elective-course-item">
                        <h4>{course.name}</h4>
                        <p>{course.day.name}</p>
                        <p>{course.time}{course.place}</p>
                        <button 
                            className="add-button"   
                            disabled = {course.value === 0 ? false : true}                     
                            onClick={() => {onAddMyTypes_2(course); onDisableOnClick_2(course);}}>
                            Add to your timetable
                        </button>
                        <button 
                            className="remove-button"
                            disabled = {course.value === 1 ? false : true}
                            onClick={() => {onRemoveMyTypes_2(course); onDisableOnClickRemove_2(course);}}
                        >
                            Remove from your timetable
                        </button>
                    </li>
                ))}
            </ul>}
        </div>
    );
}
 
export default Elective;