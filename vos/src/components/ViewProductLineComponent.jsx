import React,{Component} from 'react';
import ProductLineService from '../services/ProductLineService';

class ViewProductLineComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            prductLine: this.props.match.params.prductLine,
            productLine: {}
        }
        
    }
    componentDidMount(){
        console.log("--------> "+this.state.prductLine);
        ProductLineService.viewProductLline(this.state.prductLine).then(res=>{
            this.setState({productLine: res.data});
        })       
    }
    render(){
        return(

            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View ProductLine Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Produline : </label>
                            <div> { this.state.productLine.prductLine }</div>
                        </div>
                        <div className = "row">
                            <label>  Text Desc: </label>
                            <div> { this.state.productLine.textDesc }</div>
                        </div>
                        <div className = "row">
                            <label>  HTML Desc: </label>
                            <div> { this.state.productLine.textDesc }</div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
export default ViewProductLineComponent