import React, { useEffect } from 'react';
import './Review.css';
import { useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewDetail from '../ReviewDetail/ReviewDetail';
import Cart from '../Cart/Cart';
import image from '../../images/giphy.gif'
import { useHistory } from 'react-router-dom';


const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrder] = useState(false);
    const history = useHistory();
    const handelForCheckOut = () => {
        history.push('/shipment')
    }
    let happyImage;
    if (orderPlaced) {
        happyImage = <img src={image} alt=""/>
    }

    
    useEffect(() => {
        const data = getDatabaseCart(); 
        const productKey = Object.keys(data)
        // console.log(productKey)  
        const cartProduct = productKey.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = data[key];
            return product;
        });
        console.log(cartProduct);
        setCart(cartProduct);
    }, []);

    const removeItem = (itemKey) => {
        const remainingItems = cart.filter(pd => itemKey !== pd.key);
        setCart(remainingItems);
        removeFromDatabaseCart(itemKey);
    }

    return (
        <div className="shop">
            <div >
                <h2>Total Item: {cart.length} </h2>
                {cart.map(p => <ReviewDetail product={p} handler={removeItem}></ReviewDetail>)}
            </div>
            {happyImage}
            <Cart cart={cart}>
                <button onClick={handelForCheckOut} className="btn">Go for Checkout</button>
            </Cart>
        </div>
    );
};

export default Review;