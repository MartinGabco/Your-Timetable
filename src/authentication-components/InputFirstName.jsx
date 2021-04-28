import React from 'react';

// Styles
import '../styles/components/RegisterForm.css';

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