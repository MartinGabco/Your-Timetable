import React from 'react';

const CompulsoryLink = props => {
    const { type_1, onTypeSelect_1, selectedType_1 } = props;

    return ( 
        <div className="compulsory-link-wrapper">
            {type_1.map(type_1 => ( 
                <a 
                    key = {type_1.id_1}
                    onClick = {() => onTypeSelect_1(type_1)}
                    className = {
                        type_1 === selectedType_1 
                            ? "link-item active" 
                            : "link-item"
                    } 
                >
                    {type_1.title_1} 
                </a>
            ))}
        </div>
    );
}
 
export default CompulsoryLink;