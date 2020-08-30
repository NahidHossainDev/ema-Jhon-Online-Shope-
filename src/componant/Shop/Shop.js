import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product'
import Cart from '../Cart/Cart';


const Shop = () => {
  const [pro, setProduct] = useState(fakeData);
  
  const [cart, setCart] = useState([]);
  const handler = (produ) => {
    setCart([...cart, produ]);
  };
 
    const product = pro.slice(0, 10);
    return (
        <div className="shop"> 
            <div className="product-section">
                {product.map(pro => <Product showAddToCard ={true} handle = {handler} product = {pro} key={product.key}></Product> )}
            </div>
            <Cart cart={cart}></Cart>
        </div>
    );
};


export default Shop;