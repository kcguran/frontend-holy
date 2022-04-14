import React, { Component } from 'react';
import Input from '../components/input';
import { login } from '../api/apiCalls';
import ButtonWithProgress from '../components/ButtonWithProgress';
import { withTranslation } from 'react-i18next';
import { withApiProgress } from '../shared/ApiProgress';

class LoginPage extends Component {

    state = {
        username: null,
        password: null,
        error: null,
    }



    onChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
            error: null
        })
    }

    onClickLogin = async event => {
        event.preventDefault();
        const { username, password } = this.state;
        const creds = {
            username,
            password
        };
        this.setState({
            error: null
        })
        try {
            await login(creds);
        } catch (apiError) {
            this.setState({
                error: apiError.response.data.message
            })
        }
    }

    render() {
        const { pendingApiCall } = this.props
        const { username, password, error } = this.state;
        const buttonEnabled = username && password;
        return (
            <div className='container'>
                <h1 className='text-center'>Login</h1>
                <form>
                    <Input label="Username" name="username" onChange={this.onChange} />
                    <Input label="password" name="password" type="password" onChange={this.onChange} />
                    {error && <div className='alert alert-danger'>{error}</div>}
                    <div className="text-center">
                        <ButtonWithProgress
                            onClick={this.onClickLogin}
                            disabled={pendingApiCall}
                            pendingApiCall={pendingApiCall}
                            text={('Login')}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

const LoginPageWithTranslation = withTranslation()(LoginPage);


export default withApiProgress(LoginPageWithTranslation, '/api/1.0/auth');