import React from 'react';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from './CheckoutForm';
import SplitForm from './SplitCheckoutForm';
const PaymentMethod = ({handle}) => {

    const stripePromise = loadStripe(
      "pk_test_51HZyBxLARF5aagp9PpNWCFhvpzoCOl4l97FSyq0Fwrz40O8hFP9QH4pvU4Gxxnw3uwyL8polUyfcMYQRhrTIrdoJ00KjAYEGF4"
    );
    return (
      <Elements stripe={stripePromise}>
            <CheckoutForm handle={handle}/>
            {/* <SplitForm/> */}
      </Elements>
    );
};

export default PaymentMethod;