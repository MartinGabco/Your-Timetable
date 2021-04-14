import React from 'react';

const InputFirstNameLogin = ({ name, value, onChange }) => {
    return (
        <div className="form-group">
            <input
                name={name}
                value={value}
                onChange={onChange}
                className="form-control" 
                id="validationCustom04" 
                placeholder="First name" 
                type="text"
                autoFocus 
                required                 
            />   
        </div>
    );
}
 
export default InputFirstNameLogin;