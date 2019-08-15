import React from 'react';

const ShoppingCart = ({ handleClick }) => (
  <div>
    <h1>Shopping Cart</h1>
    <div>
      <div>Item: Candy Bars</div>
      <div>Quantity: 1000</div>
      <div>
        <button class="btn" type="button" value="checkout"
        onClick={() => {handleClick(event)}}>
        Check Out -->
        </button>
      </div>
    </div>
  </div>
);

export default ShoppingCart;