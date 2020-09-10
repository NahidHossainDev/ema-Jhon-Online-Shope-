import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ContextElement } from '../../App';

const Header = () => {
    const [loginUser, setLoginUser] = useContext(ContextElement);
    return (
        <div className="header">
            <div className="image">
                <img src={logo} alt="" />
            </div>
            <nav>
                <div className="menu">
                    <Link to="/shop">Shop</Link>
                    <Link to="/review">Review</Link>
                    <Link to="/manage">Manage Inventory</Link>
                     <button onClick={() => setLoginUser({})}>Sign Out</button>
                    <input type="text" placeholder='Type here to search......' name="" id="" />
                   
                </div>
            </nav> 
        </div>
    );
};

export default Header;