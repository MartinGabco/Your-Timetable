import React, { Component } from 'react';

// Styles
import '../styles/components/LoginForm.css';

import http from '../services/httpService.js';

// Authentication components - Login form
import InputEmailLogin from '../authentication-components/login-components/InputEmailLogin';
import InputPasswordLogin from '../authentication-components/login-components/InputPasswordLogin';
import { baseUrl } from '../configurations/authconfig.json';

class LoginForm extends Component {

    // Login form
    handleChange = ({ currentTarget: input }) => {
        const data = {...this.state.data };
        data[input.name] = input.value;
        this.setState({ data });
    }

    handleSubmit = async() => {
        const { data } = this.state;

        const authOrder = {
            email: data.email,
            password: data.password,
            returnSecureToken: data.returnSecureToken             
        };
        
        const { data: jwt } = await http.axios(baseUrl, authOrder)
            .then(response => console.log(response))
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        const { data } = this.state;

        return ( 
            <div className="login-wrapper">
                <form className="LoginForm" onSubmit={this.handleSubmit}>
                    <div className="form-column-name-password">
                        <h2>Log in here</h2>
                        <div className="col-sm mb-8">
                            <label htmlFor="validationServerUsername01">Mail</label>
                            <div className="input-group">
                                <InputEmailLogin 
                                    value={data.email}    
                                    onChange={this.handleChange}                                                               
                                    name="email"                               
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-column">
                        <label htmlFor="validationTooltip01">Pasword</label>
                        <InputPasswordLogin 
                            value={data.password}    
                            onChange={this.handleChange}                                                               
                            name="password"                                                                                            
                        />
                    </div>
                    <button className="btn btn-light" type="submit">Log in!</button>
                </form>
            </div>
        )
    }
}

export default LoginForm;