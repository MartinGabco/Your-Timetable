import React from 'react';

// Styles
import '../styles/RegisterForm.css';

const InputLastName = ({ name ,value, onChange }) => {
    return (
        <div className="form-group">
            <input 
                name={name}
                value={value}
                onChange={onChange}                
                className="form-control" 
                id="validationCustom02" 
                placeholder="Last name" 
                type="text"
                autoFocus 
                required                 
            />   
        </div>
    );
}
 
export default InputLastName;