import React from 'react';
import ShoppingCart from './shoppingCart';
import CreateAccountForm from './createAccountForm';
import ShippingAddressForm from './shippingAddressForm';
import BillingForm from './billingForm';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: 'checkout'
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({
      value: event.target.value
    }, console.log(this.state.value));

  }

  render() {
    return (
      <div>
        <ShippingAddressForm handleClick={this.handleClick}/>
      </div>
    )
  }
}

export default App;