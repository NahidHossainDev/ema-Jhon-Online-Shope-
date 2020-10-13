import React, { useContext, useState } from "react";
import "./Shipment.css";
import { ContextElement } from "../../App";
import { getDatabaseCart, processOrder } from "../../utilities/databaseManager";
import AddressForm from "./AddressForm";
import PaymentMethod from "../PaymentMethod/PaymentMethod";
import SplitCheckOutForm from "../PaymentMethod/SplitCheckoutForm";
const Shipment = () => {
 
  const [loginInfo] = useContext(ContextElement);

  const [formInfo, setFormInfo] = useState(null);

  const onSubmit = (data) => {
    setFormInfo(data)
    };

    const handleForSendDataToDataBase = (paymentId) => {
      const saveCart = getDatabaseCart();
      const orderDetail = {
        ...loginInfo,
        product: saveCart,
        shipmentInfo: formInfo,
        paymentId,
        orderTime: new Date(),
      };
    fetch("https://radiant-anchorage-37251.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderDetail),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          processOrder();
          alert("your order placed successfully");
        }
      });
  };

  return (
    <div>
      {formInfo ? (
        <PaymentMethod handle={handleForSendDataToDataBase} />
      ) : (
        <AddressForm
          onSubmit={onSubmit}
          style={{ display: "inline-block" }}
        ></AddressForm>
      )}
    </div>
  );
};

export default Shipment;
