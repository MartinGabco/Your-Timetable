import React from 'react';

// Styles
import '../styles/Elective.css';

const Elective = props => {
    const { filtered, type_2, selectedType_2, onTypeSelect_2, isHiddden } = props;

    return ( 
        <div className="elective-wrapper">
            {type_2.map(type_2 => (
                <a
                    key={type_2.id_2}
                    onClick={() => onTypeSelect_2(type_2)}
                    className = {
                        type_2 === selectedType_2
                        ? "link-item active"
                        : "link-item"
                    }
                >
                    {type_2.title_2}
                </a>
            ))}
            {!isHiddden || <ul className="elective-course-list">
                {filtered.map(course => (
                    <li key = {course.id} className="elective-course-item">
                        <h4>{course.name}</h4>
                        <p>{course.day}</p>
                        <p>{course.time}{course.place}</p>
                    </li>
                ))}
            </ul>}
        </div>
    );
}
 
export default Elective;