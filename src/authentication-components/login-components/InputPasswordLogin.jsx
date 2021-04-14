import React from 'react';

const InputPasswordLogin = ({ name, value, onChange }) => {
    return (
        <input 
            name={name}
            value={value}
            onChange={onChange}
            type="password" 
            id="validationTooltip01" 
            className="form-control" 
            aria-describedby="passwordHelpBlock"
            placeholder="Password" 
            required
        />
    );
}
 
export default InputPasswordLogin;