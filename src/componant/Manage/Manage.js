import React from "react";
import "./Manage.css";

const Manage = () => {
    
  const handleForAddProduct = () => {
    fetch("https://radiant-anchorage-37251.herokuapp.com/addProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <h1>Manage and Inventory</h1>
      <form action="" method="post">
        <p>
          <span>Product Name:</span>
          <input type="text" />
        </p>
        <p>
          <span>Price:</span>
          <input type="text" />
        </p>
        <p>
          <span>Product Detail:</span>
          <input type="text" />
        </p>
        <p>
          <span>Product Image:</span>
          <input type="file" />
        </p>
      </form>
      <button onClick={handleForAddProduct}>Add Product</button>
    </div>
  );
};

export default Manage;
