import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "../Product/Product";

const ProductDetail = () => {
  const { key } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch("https://radiant-anchorage-37251.herokuapp.com/productDetail/" + key)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div>
      <h1>{key}- Product Detail coming sooooooooon</h1>
      <Product showAddToCard={false} product={product}></Product>
    </div>
  );
};

export default ProductDetail;
