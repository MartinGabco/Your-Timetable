import React from 'react';

import '../styles/ListGroup.css';

const ListGroup = props => {
    const { items, onDaysSelect, selectedItem, count } = props;

    return ( 
        <ul className="list-group">
            {items.map(item => (
                <li 
                key={item.id}
                style={{ cursor: "pointer" }}
                onClick={() => onDaysSelect(item)}
                className={
                    item === selectedItem 
                    ? "list-group-item active d-flex justify-content-between align-items-center"
                    : "list-group-item d-flex justify-content-between align-items-center"}     
                >
                    {item.name}
                    <span className="badge badge-primary badge-pill">{(item === selectedItem) ? count : null}</span>
                </li>                       
            ))}               
        </ul>
    );        
}
 
export default ListGroup;