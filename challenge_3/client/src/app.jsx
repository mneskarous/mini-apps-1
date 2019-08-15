import React from 'react';
import axios from 'axios';
import ShoppingCart from './shoppingCart';
import CreateAccountForm from './createAccountForm';
import ShippingAddressForm from './shippingAddressForm';
import BillingForm from './billingForm';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: '',
      input: '',
      name: '',
      email: '',
      password: '',
      addressLine1: '',
      addressLine2: '',
      
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({
      value: event.target.value
    }, () => console.log(this.state.value));
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    }, () => console.log(this.state.input))
  }

  postInfo() {
    console.log();
    axios
      .post('/api')
  }

  render() {
    const value = this.state.value;
    let page;
    if (value === 'checkout') {
      page = <CreateAccountForm 
      handleClick={this.handleClick}
      handleChange={this.handleChange}
      />
    } else if (value === 'create-account') {
      page = <ShippingAddressForm 
      handleClick={this.handleClick}
      handleChange={this.handleChange}
      />
    } else if (value === 'submit-shipping') {
      page = <BillingForm 
      handleClick={this.handleClick}
      handleChange={this.handleChange}
      />
    } else if (value === 'purchase') {
      page = <ShoppingCart 
      handleClick={this.handleClick}
      handleChange={this.handleChange}
      />
    } else {
      page = <ShoppingCart 
      handleClick={this.handleClick}
      handleChange={this.handleChange}
      />
    }
        
    return (
      <div>
        {page}      
      </div>
    )
  }
}

export default App;