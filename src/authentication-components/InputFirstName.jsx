import React from 'react';

// Styles
import '../css/main.css';

const InputFirstName = ({ name, value, onChange }) => {
    return (
        <div className="form-group">
            <input 
                name={name}
                value={value}
                onChange={onChange}
                className="form-control" 
                id="validationCustom01" 
                placeholder="First name" 
                type="text"
                autoFocus 
                required                 
            />   
        </div>
    );
}
 
export default InputFirstName;