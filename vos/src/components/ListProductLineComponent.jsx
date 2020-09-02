import React, {Component} from 'react';
import ProductLineService from '../services/ProductLineService';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';


class ListProductLineComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            productLine: []
        }
        this.addProductLine = this.addProductLine.bind(this);
        this.viewProductLine=this.viewProductLine.bind(this);
        this.logout=this.logout.bind(this);
        this.deleteProductLine=this.deleteProductLine.bind(this);
    }
    addProductLine(){
        this.props.history.push('/add-productLine/_add');
    }
    deleteProductLine(prductLine){
        ProductLineService.deleteProductLine(prductLine).then(res=>{
            this.setState({productLine: this.state.productLine.filter(productLine => productLine.prductLine !== prductLine)});
        });
    }
    viewProductLine(prductLine){
        console.log(">>>>>>>>>>>>"+prductLine)
        this.props.history.push(`/view-productLine/${prductLine}`);
    }
    logout(){
        this.props.history.push('/logout');
    }
    componentDidMount(){
        ProductLineService.getPorductLines().then((res)=>{
            this.setState({productLine: res.data})
        });        
    }
    render(){
        return(
            <div>
                 <HeaderComponent></HeaderComponent>
                 <h2 className="text-center">Product List</h2>                 
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addProductLine}> Add ProductLine</button>
                 </div>
                 <br></br>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.logout}> Logout</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Producline </th>
                                    <th> Text Description </th>
                                    <th> HTML Description </th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.productLine.map(
                                        productLine => 
                                        <tr key = {productLine.prductLine}>
                                            <td>{productLine.prductLine}</td>
                                            <td>{productLine.textDesc}</td>
                                            <td>{productLine.textDesc}</td>
                                             <td>                                                                                             
                                                 <button style={{marginLeft: "10px"}} onClick={()=>this.viewProductLine(productLine.prductLine)} className="btn btn-info">View </button>
                                                 <button style={{marginLeft: "10px"}} onClick={()=>this.deleteProductLine(productLine.prductLine)} className="btn btn-info">Delete </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>                 
                <FooterComponent></FooterComponent>           
            </div>
        );
    }
    
}
export default ListProductLineComponent