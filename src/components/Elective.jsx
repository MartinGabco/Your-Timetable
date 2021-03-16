import React from 'react';

const Elective = props => {
    const { filtered, type_2, selectedType_2, onTypeSelect_2, isHiddden } = props;

    return ( 
        <div className="elective-wrapper">
            {type_2.map(type_2 => (
                <button 
                    key={type_2.id_2}
                    onClick={() => onTypeSelect_2(type_2)}
                    className = {
                        type_2 === selectedType_2
                        ? "button-item active"
                        : "button-item"
                    }
                >
                    {type_2.title_2}
                </button>
            ))}
            {!isHiddden || <ul className="elective-course-list">
                {filtered.map(course => (
                    <li key={course.id}>
                        <p>{course.name}</p>
                    </li>
                ))}
            </ul>}
        </div>
    );
}
 
export default Elective;