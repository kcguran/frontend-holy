import React from "react";

class UserSignupPage extends React.Component{

    state = {
        username: null,
        displayName: null,
        password: null,
        passwordRepeat: null
    }

    onChange = event => {
        const value = event.target.value;
        const field = event.target.name;
        this.setState({
            [field]: value
        })
    }


    render() {
        return(
            <form>
                <h1>Sign Up</h1>
                <div>
                <label>Username</label>
                <input name="username" onChange={this.onChange} />
                </div>
                <div>
                <label>Display Name</label>
                <input name="displayName" onChange={this.onChange}/>
                </div>
                <div>
                <label>Password</label>
                <input name="password" onChange={this.onChange} type="password"/>
                </div>
                <div>
                <label>Password Repeat</label>
                <input name="passwordRepeat" onChange={this.onChange} type="password"/>
                </div>
                <button>Sign Up</button>
            </form>
        )
    };
}

export default UserSignupPage;