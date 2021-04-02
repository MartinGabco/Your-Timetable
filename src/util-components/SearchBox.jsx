import React from 'react';

import { debounce } from 'lodash-es';

const SearchBox = props => {
    const { value, onChange } = props;

    return ( 
        <input 
            className="namesInput"
            name="query"
            value={value}
            type="text"
            placeholder="Search courses by name ..."
            onChange={e => {onChange(e.currentTarget.value)}}
        />
    );
}
 
export default SearchBox;