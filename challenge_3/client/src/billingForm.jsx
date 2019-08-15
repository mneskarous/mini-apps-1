import React from 'react';

const BillingForm = (props) => (
  <div>
    <h1>Create Account</h1>
    <h3>Please enter your billing information below:</h3>
    <div>
    <form>
      <div>
        <label>Credit Card Number</label>
        <input type="text" id="creditCardNumber" value={props.creditCardNumber} required
        onChange={() => {props.handleChange(event)}}></input>
      </div>
      <div>
        <label>Expiration Date</label>
        <input type="text" id="expiryDate" value={props.expiryDate} required
        onChange={() => {props.handleChange(event)}}></input>
      </div>
      <div>
        <label>cvv</label>
        <input type="text" id="cvv" required value={props.cvv}
        onChange={() => {props.handleChange(event)}}></input>
      </div>
      <div>
        <label>Billing Zip Code</label>
        <input type="text" id="billingZipCode" value={props.billingZipCode} required
        onChange={() => {props.handleChange(event)}}></input>
      </div>
    </form>
    </div>
    <div>
      <button className="btn" type="button" value="purchase"
      onClick={() => {props.handleClick(event); props.handleSubmit(event);}}>
      Purchase!
      </button>
    </div>
  </div>
);

export default BillingForm;