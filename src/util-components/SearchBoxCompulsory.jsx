import React from 'react';

const SearchBoxCompulsory = props => {
    const { value, onChangeCompulsory } = props;

    return ( 
        <input 
            className="namesInput"
            name="query"
            value={value}
            type="text"
            placeholder="Search courses by name ..."
            onChange={e => {onChangeCompulsory(e.currentTarget.value)}}
        />
    );
}
 
export default SearchBoxCompulsory;