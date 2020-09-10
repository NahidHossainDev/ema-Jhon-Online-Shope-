import React from 'react';

const ReviewDetail = (props) => {
    // console.log(props)
    const {name, quantity, key, price} = props.product

    const style = {
        marginLeft: "15%",
        marginRight: '20%',
    }
    return (
        <div style = {style}>
            <h4 className="name" style={{color:"blue"}}> {name}</h4>
            <h5>Quantity: {quantity} </h5>
            <p>Price: $ {price}</p>
            <button className="btn" onClick={() => props.handler(key)}>Remove Item</button>
        </div>
    );
};

export default ReviewDetail;