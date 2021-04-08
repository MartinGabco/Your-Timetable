import React from 'react';

import '../styles/ListGroup.css';

const ListGroup = props => {
    const { items, selectedDay2, onDaysSelect2 } = props;

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
                </li>                       
            ))}               
        </ul>
    );        
}
 
export default ListGroup;