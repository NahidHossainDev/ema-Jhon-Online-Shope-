import React, { useState, useContext } from "react";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import {
  addToDatabaseCart,
  getDatabaseCart,
} from "../../utilities/databaseManager";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ContextElement } from "../../App";

const Shop = () => {
  document.title = "ema-jhon | Shop";

  const [loginUser, setLoginUser, search, setSearch] = useContext(ContextElement);
  const [products, setProduct] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://radiant-anchorage-37251.herokuapp.com/products?search="+search)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [search]);

  useEffect(() => {
    const data = getDatabaseCart();
    const productKeys = Object.keys(data);
    fetch("https://radiant-anchorage-37251.herokuapp.com/findProductsByKeys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productKeys),
    })
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, []);

  const handler = (prod) => {
    const toBeAddededKey = prod.key;
    const sameProduct = cart.find((p) => p.key === toBeAddededKey);
    let count = 1;
    let newCart;
    if (sameProduct) {
      count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      const others = cart.filter((p) => p.key !== toBeAddededKey);
      newCart = [...others, sameProduct];
    } else {
      prod.quantity = 1;
      newCart = [...cart, prod];
    }
    setCart(newCart);
    addToDatabaseCart(prod.key, count);
  };

  return (
    <div className="shop">
      <div className="product-section">
        {products.map((pro) => (
          <Product
            showAddToCard={true}
            handle={handler}
            product={pro}
            key={pro.key}
          ></Product>
        ))}
      </div>
      <Cart cart={cart}>
        <Link to="/review">
          <button className="btn">Go to Review</button>
        </Link>
      </Cart>
    </div>
  );
};

export default Shop;
