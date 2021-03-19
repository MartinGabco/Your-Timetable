import React from 'react';

import '../styles/MyTimeTable.css';

const MyTimeTable = props => {
    const { myTypes_1, myTypes_2 } = props;

    return (
        <div className="table">
            <ul className="my-compulsory-courses">
                {myTypes_1.map(myType_1 => (
                    <li className="my-compulsory-course" key={myType_1.id}>
                        <h3>{myType_1.name}</h3>
                        <p>{myType_1.day}</p>
                        <p>{myType_1.time}{myType_1.place}</p>
                    </li>
                ))}
            </ul>
            <ul className="my-elective-courses">
                {myTypes_2.map(myType_2 => (
                    <li className="my-elective-course" key={myType_2.id}>
                        <h3>{myType_2.name}</h3>
                        <p>{myType_2.day}</p>
                        <p>{myType_2.time}{myType_2.place}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
 
export default MyTimeTable;