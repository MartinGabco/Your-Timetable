import React from 'react';

const Courses = props => {
    const { courses } = props;

    return ( 
        <div className="wrapper">
            {courses.map(course => (
                <li className="courses-list">{course.name}</li>
            ))}
        </div>
     );
}
 
export default Courses;