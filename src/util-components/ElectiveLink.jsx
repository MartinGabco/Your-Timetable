import React from 'react';

const ElectiveLink = props => {
    const { type_2, onTypeSelect_2, selectedType_2 } = props;

    return (
        <div className="elective-link-wrapper">
            {type_2.map(type_2 => (
                <a
                    key={type_2.id_2}
                    onClick={() => onTypeSelect_2(type_2)}
                    className = {
                        type_2 === selectedType_2
                            ? "link-item active"
                            : "link-item"
                    }
                >
                    {type_2.title_2}
                </a>
            ))}
        </div>
    );
}
 
export default ElectiveLink;