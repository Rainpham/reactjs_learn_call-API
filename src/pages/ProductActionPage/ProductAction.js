import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actAddproductReques, editProductReques,upDateProductReques } from '../../actions/index';



class ProductAction extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtname: '',
            txtprice: '',
            ckbstatus: ''
        }
    };
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    };
    onSave = (e) => {
        var { id, txtname, txtprice, ckbstatus } = this.state;
        var { history } = this.props;
        var product = {
            id: id,
            name: txtname,
            price: txtprice,
            status: ckbstatus
        };
        e.preventDefault();
        if (id) {
            this.props.onUpdateProduct(product)
        } else {
            this.props.onAddproduct(product);
           
        }
        history.goBack();
    }

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.onEditProduct(id);
        };
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.editProduct) {
            var { editProduct } = nextProps;
            this.setState({
                id: editProduct.id,
                txtname: editProduct.name,
                txtprice: editProduct.price,
                ckbstatus: editProduct.status
            })
        }
        console.log(nextProps.editProduct);
    }
    render() {
        var { txtname, txtprice, ckbstatus } = this.state;
        return (
            <div className="container">

                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

                    <form onSubmit={this.onSave}>
                        <div className="form-group">
                            <label >Tên sản phẩm</label>
                            <input type="text"
                                className="form-control"
                                name="txtname"
                                onChange={this.onChange}
                                value={txtname}
                            />
                        </div>

                        <div className="form-group">
                            <label >Giá</label>
                            <input type="number"
                                className="form-control"
                                name="txtprice"
                                onChange={this.onChange}
                                value={txtprice}
                            />
                        </div>

                        <div className="form-group">
                            <label >Trạng Thái</label>
                        </div>

                        <div className="checkbox">
                            <label>
                                <input
                                    type="checkbox"
                                    name="ckbstatus"
                                    onChange={this.onChange}
                                    value={ckbstatus}
                                    checked={ckbstatus}
                                />
                                Còn hàng
                        </label>
                        </div>

                        <button type="submit" className="btn btn-primary">Lưu Lại</button>
                        <Link to='/product-list' className="btn btn btn-danger mr-l">Hủy Bỏ</Link>
                    </form>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        editProduct: state.EditProduct
    }
}
const mapDispatchToProp = (dispatch, props) => {
    return {
        onAddproduct: (product) => {
            dispatch(actAddproductReques(product));
        },
        onEditProduct: (id) => {
            dispatch(editProductReques(id));
        },
        onUpdateProduct:(product)=>{
            dispatch(upDateProductReques(product));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProp)(ProductAction);
