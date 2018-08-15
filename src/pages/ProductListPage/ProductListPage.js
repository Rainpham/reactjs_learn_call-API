import React, { Component } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import Productitem from '../../components/Productitem/Productitem';
import {connect} from 'react-redux';

import {Link} from 'react-router-dom';
import {actFechProductReques,actDeleteProductReques} from '../../actions/index';

class ProductListPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            products:[]
        }
    };
    componentDidMount(){
        this.props.fechAllProduct();
    }
    //luu y khi xoa can xoa luon trong state de tranh reques len server ton thoi gian
    onDelete = (id)=>{
        this.props.deleteProduct(id);
    }
    
    render() {
        var {products}=this.props;
        
        return (
            <div className="container">

                <div className="row">

                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                        <Link to="/product-add" className="btn btn-danger mr-b">Thêm sản phẩm</Link>
                        <ProductList>
                            {this.showProductitem(products)}
                        </ProductList>
                    </div>

                </div>

            </div>
        );
    }
    showProductitem = (products)=>{
        var result=null;
        if(products.length>0){
            result = products.map((product,index)=>{
                return (
                    <Productitem 
                        key={index}
                        product={product}
                        index={index}
                        onDelete={this.onDelete}                        
                    />
                )
            })
        }
        return result;
    }
}
const mapStateToProps = state =>{
    return {
        products : state.products
    }
}
const mapDispatchToProp = (dispatch,props)=>{
    return {
        fechAllProduct:()=>{
            dispatch(actFechProductReques());
        },
        deleteProduct:(id)=>{
            dispatch(actDeleteProductReques(id));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProp)(ProductListPage);
