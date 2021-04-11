import React from 'react';

// Styles
import '../styles/RegisterForm.css';

const InputEmail = ({ name, value, onChange }) => {
    return (
        <input    
            name={name}
            value={value}
            onChange={onChange}
            type="text" 
            name="email"
            className="form-control is-invalid" 
            id="validationServerUsername" 
            placeholder="Mail" 
            aria-describedby="inputGroupPrepend3" 
            required
        />
    );
}
 
export default InputEmail;