import './Product.css'
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';



const Product = (props) => {
    const { img, name, price, features, seller,key } = props.product;
   
    return (
        <div className="product">
            <div className="image">
                <img src={img} alt="" />
            </div>
            <div className="product-detail">
                <h3 style={{ color: "blue" }}><Link to={"/product/"+ key}>{name}</Link></h3>
                <p>By: {seller}</p>

                <div className="btnAndFeatures">
                    <div>
                        <p style={{ fontSize: "20px" }}>$ {price}</p>
                        <p>Only 30days left</p>
                       {props.showAddToCard && <button className="btn" onClick={ () => props.handle(props.product) }>
                            <FontAwesomeIcon icon={faShoppingCart} />
                            Add to card
                        </button>}
                    </div>
                    <div className="features">
                        <h3>Features</h3>
                      
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Product;