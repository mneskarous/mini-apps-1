import React from 'react';
import ShoppingCart from './shoppingCart';
import CreateAccountForm from './createAccountForm';
import ShippingAddressForm from './shippingAddressForm';
import BillingForm from './billingForm';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({
      value: event.target.value
    }, () => console.log(this.state.value));
  }

  render() {
    const value = this.state.value;
    let page;
    if (value === 'checkout') {
      page = <CreateAccountForm handleClick={this.handleClick}/>
    } else if (value === 'create-account') {
      page = <ShippingAddressForm handleClick={this.handleClick}/>
    } else if (value === 'submit-shipping') {
      page = <BillingForm handleClick={this.handleClick}/>
    } else if (value === 'purchase') {
      page = <ShoppingCart handleClick={this.handleClick}/>
    } else {
      page = <ShoppingCart handleClick={this.handleClick}/>
    }
        
    return (
      <div>
        {page}      
      </div>
    )
  }
}

export default App;