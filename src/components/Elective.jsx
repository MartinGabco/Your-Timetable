import React from 'react';

// Styles
import '../styles/Elective.css';

//Util-components
import ElectiveLink from '../util-components/ElectiveLink.jsx';

const Elective = props => {
    const { filtered, type_2, selectedType_2, onTypeSelect_2, isHiddden, onAddMyTypes_2 } = props;

    return ( 
        <div className="elective-wrapper">
            <ElectiveLink 
                type_2={type_2}
                selectedType_2={selectedType_2}
                onTypeSelect_2={onTypeSelect_2}
            />
            {!isHiddden || <ul className="elective-course-list">
                {filtered.map(course => (
                    <li key = {course.id} className="elective-course-item">
                        <h4>{course.name}</h4>
                        <p>{course.day}</p>
                        <p>{course.time}{course.place}</p>
                        <button onClick={() => onAddMyTypes_2(course)}>
                            Add to your timetable
                        </button>
                    </li>
                ))}
            </ul>}
        </div>
    );
}
 
export default Elective;