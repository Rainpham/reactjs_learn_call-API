import React, { Component } from 'react';


class ProductList extends Component {
    render() {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">Danh sách sản phẩm</h3>
                </div>
                <div className="panel-body">

                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>MSP</th>
                                <th>TÊN</th>
                                <th>GIÁ</th>
                                <th>TRẠNG THÁI</th>
                                <th>HÀNH ĐỘNG</th>
                            </tr>
                        </thead>
                        {/* productitem */}
                        {this.props.children}
                    </table>

                </div>
            </div>
        );
    }
}

export default ProductList;
