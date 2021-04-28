import React from 'react';

// styles
import '../styles/components/DropdownListGroup.css';

const DropdownListGroup = props => {
    const { 
        days, 
        selectedDay, 
        onCompulsoryDayChange
    } = props;

    return ( 
        <div className="dropdown">
            <a className="myline btn-lg btn-warning dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Choose a day
                <i className="fa fa-caret-down" aria-hidden="true"></i>
            </a>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <ul className="dropdown-list">
                    {days.map(day => (
                        <li className={day === selectedDay ? "dropdown-list-item active" : "dropdown-list-item"}>
                            <a className="dropdown-item" onClick={() => onCompulsoryDayChange(day)}>
                                {day.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>   
    )
}
 
export default DropdownListGroup;