import React from 'react';
import _ from 'lodash';

import '../styles/MyTimeTable.css';

const MyTimeTable = props => {
    const { myTypes_1, 
        myTypes_2, 
        onDeleteCourse_1, 
        onDeleteCourse_2, 
        onAbleOnClick, 
        onPerformSort,
        sortColumn
    } = props;

    const sorted = _.orderBy(myTypes_1, [sortColumn.path]);

    return (
        <div className="table">
            <ul className="my-compulsory-courses" onClick={() => onPerformSort('day_id')}>
                {sorted.map(myType_1 => (
                    <li className="my-compulsory-course" key={myType_1.id}>
                        <h3>{myType_1.name}</h3>
                        <p>{myType_1.day}</p>
                        <p>{myType_1.time}{myType_1.place}</p>
                        <button 
                            className="cancel-my-compulsory-course"
                            onClick={(event) => onDeleteCourse_1(myType_1)}
                        >
                            Remove course
                        </button>
                    </li>
                ))}
            </ul>
            <ul className="my-elective-courses">
                {myTypes_2.map(myType_2 => (
                    <li className="my-elective-course" key={myType_2.id}>
                        <h3>{myType_2.name}</h3>
                        <p>{myType_2.day}</p>
                        <p>{myType_2.time}{myType_2.place}</p>
                        <button 
                            className="cancel-my-elective-course"
                            onClick={() => onDeleteCourse_2(myType_2)}
                        >
                            Remove course
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
 
export default MyTimeTable;