import React from 'react';

const ShippingAddressForm = ({ handleClick }) => (
  <div>
    <h1>Shipping Address</h1>
    <h3>Please enter your shipping information below:</h3>
    <div>
    <form>
        <div>
          <label>Address Line 1</label>
          <input type="text" id="addressLine1" required></input>
        </div>
        <div>
          <label>Address Line 2</label>
          <input type="text" id="addressLine2"></input>
        </div>
        <div>
          <label>City</label>
          <input type="text" id="city" required></input>
        </div>
        <div>
          <label>State</label>
          <input type="text" id="state" required></input>
        </div>
        <div>
          <label>Zip Code</label>
          <input type="text" id="shippingZipCode" required></input>
        </div>
        <div>
          <label>Phone Number</label>
          <input type="text" id="phoneNumber" required></input>
        </div>
      </form>
    </div>
    <div>
      <button class="btn" type="button" value="submit-shipping"
      onClick={() => {handleClick(event)}}>
      Submit Shipping Information
      </button>
    </div>
  </div>
);

export default ShippingAddressForm;