import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Productitem extends Component {
    onDelete=(id)=>{
        if(confirm('ban co muon xoa')){ //eslint-disable-line
            this.props.onDelete(id);
        }    
    }
    
    render() {
        var {product,index}=this.props;
        var status = product.status ? 'còn hàng':'hết hàng';
        var statusClass = product.status ? 'warning':'default';
        return (
            <tbody>
                <tr>
                    <td>{index+1}</td>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>

                        <span className={`label label-${statusClass}`}>{status}</span>

                    </td>
                    <td>

                        <Link to={`product-edit/${product.id}`} 
                            className="btn btn-success mr-r"
                        
                        >Sửa</Link>
                        <button 
                            type="button" 
                            className="btn btn-danger"
                            onClick={()=>this.onDelete(product.id)}
                        >xóa</button>

                    </td>
                </tr>
            </tbody>
        );
    }
}

export default Productitem;
