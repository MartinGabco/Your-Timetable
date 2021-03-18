import React from 'react';

//Styles
import '../styles/Compulsory.css';

//Util Components
import CompulsoryLink from '../util-components/CompulsoryLink.jsx';

const Compulsory = props => {
    const { filtered, type_1, selectedType_1, onTypeSelect_1, isHiddden } = props;

    return ( 
        <div className = "compulsory-wrapper" > 
            <CompulsoryLink 
                type_1={type_1}
                selectedType_1={selectedType_1} 
                onTypeSelect_1={onTypeSelect_1}          
            />
            {!isHiddden && <ul className = "compulsory-course-list">
                {filtered.map(course => ( 
                    <li key = {course.id} className="compulsory-course-item">
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