import React,{Comment, Component} from 'react';
import ProductLineService from '../services/ProductLineService'
class CreateProductLineComponent extends Component{
    constructor(props){
        super(props)  
        this.state={
            id: this.props.match.params.id,
            prductLine:'',
            textDesc:'',
            htmlDesc:''
        }      
        this.changeProductLineHandler=this.changeProductLineHandler.bind(this);
        this.changeTextDescHandler=this.changeTextDescHandler.bind(this);
        this.changeHtmlDescHandler=this.changeHtmlDescHandler.bind(this);
        this.saveOrUpdateProductLine=this.saveOrUpdateProductLine.bind(this);
    }
    saveOrUpdateProductLine = (e) => {
        e.preventDefault();
        let productLine = {prductLine: this.state.prductLine, textDesc: this.state.textDesc, htmlDesc: this.state.htmlDesc};
        console.log('productLine => ' + JSON.stringify(productLine));

        ProductLineService.createProductLine(productLine).then(res =>{
            this.props.history.push('/createProductLine');
        });

    //    if(this.state.id==='_add'){
    //        ProductLineService.createProductLine(productLine).then(res =>{
    //         this.props.history.push('/prductLine');
    //         });
    //     }
    }

    changeProductLineHandler=(event)=>{
        this.setState({prductLine: event.target.value})
    }
    changeTextDescHandler = (event)=>{
        this.setState({textDesc: event.target.value})
    }
    changeHtmlDescHandler=(event)=>{
        this.setState({htmlDesc: event.target.value})
    }
    // getTitle(){
    //     if(this.state.id === '_add'){
    //         return <h3 className="text-center">Add Employee</h3>
    //     }
    // }
    // cancel(){
    //     this.props.history.push('/employees');
    // }
    // getTitle(){
    //     if(this.state.id === '_add'){
    //         return <h3 className="text-center">Add ProductLine</h3>
    //     }
    // }
    render(){
        return(<div>
              <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {/* // {
                                //     this.getTitle()
                                // } */}
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Product Line: </label>
                                            <input placeholder="Product Line" name="prductLine" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeProductLineHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Text Description: </label>
                                            <input placeholder="Text Description" name="textDesc" className="form-control" 
                                                value={this.state.lastName} onChange={this.changeTextDescHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Html Description: </label>
                                            <input placeholder="Html Description" name="htmlDesc" className="form-control" 
                                                value={this.state.emailId} onChange={this.changeHtmlDescHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateProductLine}>Save</button>
                                       
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
        </div>)
    };
}
export default CreateProductLineComponent;
