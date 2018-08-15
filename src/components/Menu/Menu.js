import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';


const menus = [
    {
        name: "TRANG CHỦ",
        to: "/",
        exact: true
    },
    {
        name: "DANH SÁCH SẢN PHẨM",
        to: "/product-list",
        exact: false,
    }
];
const MenuLink = ({ label, to, active }) => {
    return (
        <Route
            path={to}
            exact={active}
            children={({ match }) => {
                var active = match ? 'active' : '';
                return (
                    <li className={`abc ${active}`}>
                        <Link to={to} >{label}</Link>
                    </li>
                )
            }}
        />
    )
}

class Menu extends Component {
    render() {
        return (
            <div className="navbar navbar-default">
                <a className="navbar-brand">CALL API</a>
                <ul className="nav navbar-nav">
                    {this.showMenu(menus)}
                </ul>
            </div>
        );
    }
    showMenu = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink
                        key={index}
                        to={menu.to}
                        active={menu.exact}
                        label={menu.name}
                    />)
            })
        }
        return result;
    }
}

export default Menu;
