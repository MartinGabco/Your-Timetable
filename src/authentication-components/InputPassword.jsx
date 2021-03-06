import React from 'react';

// Styles
import '../styles/components/RegisterForm.css';

const InputPassword = ({ name, value, onChange }) => {
    return (
        <input 
            name={name}
            value={value}
            onChange={onChange}
            type="password" 
            id="validationTooltip05" 
            className="form-control" 
            aria-describedby="passwordHelpBlock"
            placeholder="Password" 
            required
        />
    );
}
 
export default InputPassword;