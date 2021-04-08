import React from 'react';

const SearchBoxElective = props => {
    const { value, onChangeElective } = props;

    return ( 
        <input 
            className="namesInput"
            name="query"
            value={value}
            type="text"
            placeholder="Search courses by name ..."
            onChange={e => {onChangeElective(e.currentTarget.value)}}
        />
    );
}
 
export default SearchBoxElective;