import React, {Component} from 'react';

class LogoutComponent extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return( <>
            <h1>You are logged out</h1>
            <div className="container">
                Thank You for Using Our Application.
            </div>
        </>);

    }
}
export default LogoutComponent