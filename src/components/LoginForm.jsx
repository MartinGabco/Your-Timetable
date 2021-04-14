import React,{Component} from 'react';

// Styles
import '../styles/LoginForm.css';

// Authentication components - Login form
import InputFirstNameLogin from '../authentication-components/login-components/InputFirstNameLogin';
import InputLastNameLogin from '../authentication-components/login-components/InputLastNameLogin';
import InputPasswordLogin from '../authentication-components/login-components/InputPasswordLogin';

class LoginForm extends Component {
    state = {
        data: {
            firstNameLogin: '',
            lastNameLogin: '',
            passwordLogin: ''
        }    
    }

    // Login form
    handleChange = ({ currentTarget: input }) => {
        const data = {...this.state.data};
        data[input.name]=input.value;
        this.setState({ data });
    }

    handleSubmit = event => {
        console.log('Funguje LoginForm!');
    }

    render() {
        const { data } = this.state;

        return (
            <div className="login-wrapper">
                <form className="LoginForm" onSubmit={this.handleSubmit}>
                    <div className="form-column-name-password">
                        <h2>Log in here</h2>
                        <div className="col-md-6 mb-8">
                            <label htmlFor="validationCustom04">First name</label>
                            <InputFirstNameLogin  
                                value={data.firstNameLogin}    
                                onChange={this.handleChange}                                          
                                name="firstNameLogin"
                            />
                        </div>
                        <div className="col-md-6 mb-8">
                            <label htmlFor="validationCustom05">Last name</label>
                            <InputLastNameLogin
                                value={data.lastNameLogin}    
                                onChange={this.handleChange}                             
                                name="lastNameLogin"                                                
                            />
                        </div>
                    </div>
                    <div className="form-column">
                        <label htmlFor="validationTooltip01">Pasword</label>
                        <InputPasswordLogin 
                            value={data.passwordLogin}    
                            onChange={this.handleChange}                                                               
                            name="passwordLogin"                                                                                            
                        />
                    </div>
                    <button className="btn btn-light" type="submit">Log in!</button>
                </form>
            </div>
        )
    }
}
 
export default LoginForm;