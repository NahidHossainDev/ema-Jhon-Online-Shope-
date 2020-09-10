import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;

    // const prodPrice = cart.reduce((total, prd) => total + prd.price, 0 );
    let prodPrice = 0;
    cart.map((p) => {
        // const quantity = parseInt(p.quantity);
        console.log(p);
        return prodPrice = prodPrice + (p.price * p.quantity) ;
    });

    let shipping = 0;
    if (prodPrice > 15) {
        shipping = 10;
    } else if (prodPrice > 25) {
        shipping = 5;
    }else if (prodPrice > 50) {
        shipping = 0;
    }

    let bTax = 0;
    bTax = prodPrice + shipping;

    let eTax = 0;
    eTax = (prodPrice + shipping) / 10;

    let total = 0;
    total = (prodPrice + eTax + shipping);

    const formattingNum = (num) => {
        const numm = num.toFixed(2);
        return Number(numm);
    }
    const itemOnderd = cart.reduce((sum,ite)  => sum + ite.quantity,0);
    
    return (
        <div className="card">
            <div>
                <h3>Order Summery</h3>
                <p>Item Ordered: {itemOnderd}</p>
                <div className="price">
                    <p>Products Price: {formattingNum(prodPrice)} </p>
                    <p>Shipping & Handling: {formattingNum(shipping)} </p>
                    <p>Total Before Tax: {formattingNum(bTax)} </p>
                    <p>Estimated Tax: {formattingNum(eTax)} </p>
                    <h5>Total Price: {formattingNum(total)} </h5>
                    {
                        props.children
                    }
                </div>
            </div>
           
        </div>
    );
};

export default Cart;