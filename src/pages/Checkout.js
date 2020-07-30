import React from 'react';
import FormComprador from '../components/FormComprador';
import ReviewCart from '../components/ReviewCart';

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
