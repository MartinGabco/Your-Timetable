import React from 'react';

//Styles
import '../styles/Compulsory.css';

const Compulsory = props => {
    const { filtered, type_1, selectedType_1, onTypeSelect_1, isHiddden } = props;

    return ( 
        <div className = "compulsory-wrapper" > 
            {type_1.map(type_1 => ( 
                <button 
                    key = {type_1.id_1}
                    onClick = {() => onTypeSelect_1(type_1)}
                    className = {
                        type_1 === selectedType_1 
                        ? "button-item active" 
                        : "button-item"
                    } 
                >
                    {type_1.title_1} 
                </button>
            ))} 
            {!isHiddden && <ul className = "compulsory-course-list"> 
                {filtered.map(course => ( 
                    <li key = {course.id} className="comp-course-item">
                        <h4>{course.name}</h4>
                        <p>{course.day}</p>
                        <p>{course.time}{course.place}</p>
                    </li>
                ))} 
            </ul>}      
        </div>
    );
}

export default Compulsory;