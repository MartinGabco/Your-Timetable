import React from 'react';

import '../styles/ListGroup.css';

const ListGroup = props => {
    const { items, selectedDay2, onDaysSelect2, countElective } = props;

    return ( 
        <ul className="list-group">
            {items.map(item => (
                <li 
                    key={item.id}
                    style={{ cursor: "pointer" }}
                    onClick={() => onDaysSelect2(item)}   
                    className={
                        item === selectedDay2
                        ? "list-group-item active d-flex justify-content-between align-items-center"
                        : "list-group-item d-flex justify-content-between align-items-center"
                        } 
                >
                    {item.name}
                    <span className="badge badge-primary badge-pill">{(item === selectedDay2) ? countElective : null}</span>
                </li>                       
            ))}               
        </ul>
    );        
}
 
export default ListGroup;