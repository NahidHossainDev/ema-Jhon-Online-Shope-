import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="image">
                <img src={logo} alt="" />
            </div>
            <nav>
                <div className="menu">
                    <a href="/shop">Shop</a>
                    <a href="/review">Review</a>
                    <a href="/manage">Manage Inventory</a>
                    <input type="text" placeholder='Type here to search......' name="" id="" />
                </div>
                
            </nav>
           
        </div>
    );
};

export default Header;