import React from 'react';

const InputLastNameLogin = ({ name ,value, onChange }) => {
    return (
        <div className="form-group">
            <input 
                name={name}
                value={value}
                onChange={onChange}                
                className="form-control" 
                id="validationCustom05" 
                placeholder="Last name" 
                type="text"
                autoFocus 
                required                 
            />   
        </div>
    );
}
 
export default InputLastNameLogin;