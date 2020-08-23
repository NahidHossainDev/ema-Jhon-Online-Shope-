import './Product.css'
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";



const Product = (props) => {
    const { img, name, price, features, seller } = props.product;
   
    return (
        <div className="product">
            <div className="image">
                <img src={img} alt="" />
            </div>
            <div className="product-detail">
                <h3 style={{ color: "blue" }}>{name}</h3>
                <p>By: {seller}</p>

                <div className="btn-fitu">
                    <div>
                        <p style={{ fontSize: "20px" }}>$ {price}</p>
                        <p>Only 30days left</p>
                        <button onClick={ () => props.handle(props.product) }>
                            <FontAwesomeIcon icon={faShoppingCart} />
                            Add to card
                        </button>
                    </div>
                    <div className="features">
                        <h3>Features</h3>
                        <ul style={{ padding: "0 20px" }}>
                            {features.map((f) => (
                                <li>
                                    {f.description}: {f.value}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Product;