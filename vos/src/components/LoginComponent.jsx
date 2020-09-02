import React, {Comment, Component} from 'react';

class LoginComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            username: 'viswam',
            password: 'viswam123'
        }
        this.loginClicked=this.loginClicked.bind(this);
    }
    loginClicked(){
        this.props.history.push('/producltList');
    }
    render(){
        return(
            <div>
            <h1>Login</h1>
            <div className="container">
                
                {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                {this.state.showSuccessMessage && <div>Login Sucessful</div>}
                
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
            </div>
        </div>
        );
    }
}
export default LoginComponent