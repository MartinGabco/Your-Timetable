import React from 'react';

const InputEmailLogin = ({ name ,value, onChange }) => {
    return (
        <div className="form-group">
            <input 
                name={name}
                value={value}
                onChange={onChange}                
                className="form-control" 
                id="validationCustom01" 
                placeholder="Email" 
                type="text"
                autoFocus 
                required                 
            />   
        </div>
    );
}
 
export default InputEmailLogin;