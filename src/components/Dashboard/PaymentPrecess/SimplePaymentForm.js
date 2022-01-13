import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { SignalCellularNullRounded } from "@mui/icons-material";


const SimplePaymentForm = ({payHandle,backHandle}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [payError, setPayError]= useState(null)
  const [paySuccess, setPaySuccess]= useState(null)

  const paymentSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if (error) {
      setPayError(error.message)
      setPaySuccess(null)
    } else {
      payHandle(paymentMethod.id)
      setPaySuccess(paymentMethod.id)
      setPayError(null)
    }
  };

  return (
    <div>
      {payError && <p className="text-danger">{payError}</p>}
      {paySuccess && <p className="text-success">Your payment was successfull. (wait 4sec and back to booking)<br/> Thank you.</p>}
      
      <form onSubmit={paymentSubmit} className="bg-white">
        <CardElement />
        <button className="btn header-btn d-inline" type="submit" disabled={!stripe || !elements}>
          Pay
        </button>
      </form>
      <br/>
      <button onClick={backHandle} className="btn header-btn mt-5">Back</button>
    </div>
  );
};

export default SimplePaymentForm;
