import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import SimplePaymentForm from './SimplePaymentForm';

 const stripePromise = loadStripe('pk_test_51KCQwzBqILb3ajTONrq3AACJEnRIlIDgC91MDe26g3uEnkxemMfdSs2H17LqLKTOihgXkkAAwvatMWIFT1P5jQnP00yunp9TSY');

const PaymentProcess = ({payHandle,backHandles}) => {
  // const options = {
  //   // passing the client secret obtained from the server
  //   clientSecret: '{{sk_test_51KCQwzBqILb3ajTO4EwaCf8DwLQQkjCBxOAHbB4eMaV8JsvIN77s13zxw1UyBqwZNn32fUCxBVugyLzpzwoXtGFV00cETjSJZO}}',
  // };
  // options={options}
  return (
    <div>
      <Elements stripe={stripePromise} >
        <SimplePaymentForm payHandle={payHandle} backHandle={backHandles}></SimplePaymentForm>
      </Elements>   
    </div>
  );
};

export default PaymentProcess;