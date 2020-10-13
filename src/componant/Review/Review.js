import React, { useEffect } from "react";
import "./Review.css";
import { useState } from "react";
import {
  getDatabaseCart,
  removeFromDatabaseCart,
  processOrder,
} from "../../utilities/databaseManager";
import ReviewDetail from "../ReviewDetail/ReviewDetail";
import Cart from "../Cart/Cart";
import image from "../../images/giphy.gif";
import { useHistory } from "react-router-dom";

const Review = () => {
  document.title="ema-jhon | product review"
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrder] = useState(false);
  const history = useHistory();
  const handelForCheckOut = () => {
    history.push("/shipment");
  };
  let happyImage;
  if (orderPlaced) {
    happyImage = <img src={image} alt="" />;
  }

  useEffect(() => {
    const data = getDatabaseCart();
    const productKey = Object.keys(data);

    fetch("https://radiant-anchorage-37251.herokuapp.com/findProductsByKeys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productKey),
    })
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, []);

  const removeItem = (itemKey) => {
    const remainingItems = cart.filter((pd) => itemKey !== pd.key);
    setCart(remainingItems);
    removeFromDatabaseCart(itemKey);
  };

  return (
    <div className="shop">
      <div>
        <h2>Total Item: {cart.length} </h2>
        {cart.map((p) => (
          <ReviewDetail product={p} handler={removeItem}></ReviewDetail>
        ))}
      </div>
      {happyImage}
      <Cart cart={cart}>
        <button onClick={handelForCheckOut} className="btn">
          Go for Checkout
        </button>
      </Cart>
    </div>
  );
};

export default Review;
