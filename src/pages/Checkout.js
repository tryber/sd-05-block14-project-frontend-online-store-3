import React from 'react';
import FormComprador from '../components/checkout/FormComprador';
import ReviewCart from '../components/checkout/ReviewCart';

class Checkout extends React.Component {
  render() {
    return (
      <div>
        <ReviewCart />
        <FormComprador />
      </div>
    );
  }
}

export default Checkout;
