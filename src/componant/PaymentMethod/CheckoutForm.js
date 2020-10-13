import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const CheckoutForm = ({handle}) => {
    const stripe = useStripe();
    const elements = useElements();

    const [paymentError, setPaymentError] = useState(null)
    const [paymentSuccess, setPaymentSuccess] = useState(null);

    const handleSubmit = async (event) => {
      // Block native form submission.
      event.preventDefault();

      if (!stripe || !elements) {
        // Stripe.js has not loaded yet. Make sure to disable
        // form submission until Stripe.js has loaded.
        return;
      }

      // Get a reference to a mounted CardElement. Elements knows how
      // to find your CardElement because there can only ever be one of
      // each type of element.
      const cardElement = elements.getElement(CardElement);

      // Use your card Element with other Stripe.js APIs
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      });

        if (error) {
          setPaymentSuccess(false)
          setPaymentError(error.message);
          
      } else {
            console.log("[PaymentMethod]", paymentMethod);
             setPaymentSuccess(true);
            setPaymentError(null);
            handle(paymentMethod.id)
      }
    };

    return (
      <div style={{ display: "inline-block", minWidth: "600px" }}>
        <h2>Please pay for your product</h2>
        <form onSubmit={handleSubmit}>
          <CardElement />
          <button type="submit" disabled={!stripe}>
            Pay
          </button>
        </form>
        {paymentError && <p style={{ color: "red" }}>{paymentError}</p>}
        {paymentSuccess && (
          <p style={{ color: "green" }}>Your payment successfully done</p>
        )}
      </div>
    );
};

export default CheckoutForm;