import React, { Component } from 'react';

// styles
import '../styles/LoginForm.css';

//Server connection
import http from '../services/httpService.js';
import { apiEndpoint } from '../configurations/config.json';
import * as userService from '../services/userService.js';
import { register } from '../services/userService.js';

// Authentication components - Register form
import InputFirstName from '../authentication-components/InputFirstName';
import InputLastName from '../authentication-components/InputLastName';
import InputEmail from '../authentication-components/InputEmail';
import InputPassword from '../authentication-components/InputPassword';

class RegisterForm extends Component {
    state = { 
        account: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }    
    }

    //Register form
    handleChange = ({ currentTarget: input }) => {
        const account = {...this.state.account};
        account[input.name]=input.value;
        this.setState({ account });
    }

    handleSubmit = async () => {
        await userService.register(this.state.account)
    }

    render() { 
        const { account } = this.state;

        return ( 
            <div className="register-wrapper">
                <form className="RegisterForm" onSubmit={this.handleSubmit}>
                    <div className="form-column-name-password">
                        <h2>Register here</h2>
                        <div className="col-md-6 mb-8">
                            <label htmlFor="validationCustom01">First name</label>
                            <InputFirstName
                                value={account.firstName}
                                onChange={this.handleChange}
                                name="firstName"
                            />
                        </div>
                        <div className="col-md-6 mb-8">
                            <label htmlFor="validationCustom02">Last name</label>
                            <InputLastName
                                value={account.lastName}
                                onChange={this.handleChange}
                                name="lastName"                                                
                            />
                        </div>
                    </div>
                    <div className="form-column">
                        <div className="col-sm mb-8">
                            <label htmlFor="validationServerUsername">Mail</label>
                                <div className="input-group">
                                    <InputEmail 
                                        value={account.email}
                                        onChange={this.handleChange}
                                        name="email"                                                               
                                    />
                                </div>
                        </div>
                    </div>
                    <div className="form-column">
                        <label for="validationTooltip05">Pasword</label>
                            <InputPassword
                                value={account.password}
                                onChange={this.handleChange}
                                name="password"                                                    
                            />
                        <small id="passwordHelpBlock" className="form-text text-muted">
                            <p>Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.</p> 
                        </small>
                    </div>
                    <div className="form-column">            
                        <div className="form-check">
                            <input 
                                className="form-check-input is-invalid" 
                                type="checkbox" 
                                value=""
                                id="invalidCheck3" 
                                required
                            />
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
            </div> 
        );
    }
}
 
export default RegisterForm;