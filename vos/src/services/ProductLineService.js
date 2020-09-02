import axios from 'axios';

const PRODUCT_LINE_API_BASE_URL = "http://localhost:8080/prductLine";

class ProductLineService{
    // viewProductLine(){
    //     return axios.get(PRODUCT_LINE_API_BASE_URL,'/'+'getProductLine')
    // }
    createProductLine(produtctLine){           
        return axios.post(PRODUCT_LINE_API_BASE_URL+'/'+'createProductLine',produtctLine)

    }
    getPorductLines(){
        return axios.get(PRODUCT_LINE_API_BASE_URL+'/'+'getProductLine');
    }
    viewProductLline(productLine){
        console.log("--------"+productLine);
        return axios.get(PRODUCT_LINE_API_BASE_URL+'/'+'getProdcutLineById'+'/'+productLine);
    }
    deleteProductLine(prodName){
        return axios.delete(PRODUCT_LINE_API_BASE_URL+'/'+'delProductLine'+'/'+prodName);
    }

}
export default new ProductLineService()