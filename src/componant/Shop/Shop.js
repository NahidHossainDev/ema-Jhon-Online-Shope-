import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product'
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const Shop = () => {
  const product10 = fakeData.slice(0, 10);
  const [product, setProduct] = useState(product10)
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const data = getDatabaseCart();
    const productKeys = Object.keys(data);
    const previousCart = productKeys.map(exKey => {
      const product = fakeData.find(fakeD => fakeD.key === exKey);
      product.quantity = data[exKey];
      return product;
    });
    setCart(previousCart)
  },[])

  const handler = (prod) => {
    const toBeAddededKey = prod.key;
    const sameProduct = cart.find(p => p.key === toBeAddededKey);
    let count = 1;
    let newCart;
    if (sameProduct) {
      count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      const others = cart.filter(p => p.key !== toBeAddededKey);
      newCart = [...others, sameProduct]
    } else {
      prod.quantity = 1;
      newCart = [...cart, prod]
    } 
    setCart(newCart);
    addToDatabaseCart(prod.key, count);
  };
 
    
    return (
        <div className="shop"> 
            <div className="product-section">
                {product.map(pro => <Product showAddToCard ={true} handle = {handler} product = {pro} key={pro.key}></Product> )}
            </div>
            <Cart cart={cart}>
               <Link to='/review'><button className="btn">Go to Review</button></Link>
            </Cart>
        </div>
    );
};


export default Shop;