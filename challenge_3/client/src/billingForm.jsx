import React from 'react';

const BillingForm = (props) => (
  <div>
    <h1>Create Account</h1>
    <h3>Please enter your billing information below:</h3>
    <div>
    <form>
      <div>
        <label>Credit Card Number</label>
        <input type="text" id="creditCardNumber" required></input>
      </div>
      <div>
        <label>Expiration Date</label>
        <input type="text" id="expiryDate" required></input>
      </div>
      <div>
        <label>CVV</label>
        <input type="text" id="cvv" required></input>
      </div>
      <div>
        <label>Billing Zip Code</label>
        <input type="text" id="billingZipCode" required></input>
      </div>
    </form>
    </div>
    <div>
      <button className="btn" type="button" value="purchase"
      onClick={() => {props.handleClick(event)}}>
      Purchase!
      </button>
    </div>
  </div>
);

export default BillingForm;