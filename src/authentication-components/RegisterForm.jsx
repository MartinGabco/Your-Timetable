import React from 'react';

// Styles
import '../styles/RegisterForm.css';

const RegisterForm = () => {
    return ( 
        <form className="RegisterForm">
            <div className="form-column-name-password">
                <h2>Register here</h2>
                <div className="col-md-6 mb-8">
                    <label for="validationCustom01">First name</label>
                    <input type="text" className="form-control" id="validationCustom01" placeholder="First name" required/>
                </div>
                <div className="col-md-6 mb-8">
                    <label for="validationCustom02">Last name</label>
                    <input type="text" className="form-control" id="validationCustom02" placeholder="Last name" required/>
                </div>
            </div>
            <div className="form-column">
                <div className="col-sm mb-8">
                    <label for="validationServerUsername">Mail</label>
                    <div className="input-group">
                        <input type="text" className="form-control is-invalid" id="validationServerUsername" placeholder="Mail" aria-describedby="inputGroupPrepend3" required/>
                    </div>
                </div>
            </div>
            <div className="form-column">
                <label for="validationCustom04">Password</label>
                <input type="password" id="validationCustom04" className="form-control" aria-describedby="passwordHelpBlock"/>
                <small id="passwordHelpBlock" className="form-text text-muted">
                    <p>Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.</p> 
                    
                </small>
            </div>
            <div className="form-column">            
                <div className="form-check">
                    <input className="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" required/>
                    <label className="form-check-label" for="invalidCheck3">
                        Agree to terms and conditions
                    </label>
                    <div className="invalid-feedback">
                        You must agree before submitting.
                    </div>
                </div>
            </div>
            <button className="btn btn-primary" type="submit">Submit form</button>
        </form>
    );
}
 
export default RegisterForm;