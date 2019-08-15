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
      city: '',
      state: '',
      shippingZipCode: '',
      phoneNumber: '',
      creditCardNumber: '',
      expiryDate: '',
      cvv: '',
      billingZipCode: ''
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.postInfo = this.postInfo.bind(this);
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
    const { name, email, password, addressLine1, addressLine2, city, state, shippingZipCode, phoneNumber, creditCardNumber, expiryDate, cvv, billingZipCode } = this.state;
    axios
      .post('/api', { name, email, password, addressLine1, addressLine2, city, state, shippingZipCode, phoneNumber, creditCardNumber, expiryDate, cvv, billingZipCode })
      .then(() => {
        console.log('POST successful');
      })
      .catch(err => console.error(err));
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('this.state.input:',this.state.input);
    this.setState({
      name: event.target.value
    }, () => console.log(this.state.name));
    this.setState({
      email: event.target.value
    }, () => console.log(this.state.email));
    this.setState({
      password: event.target.value
    }, () => console.log(this.state.password));
    this.setState({
      addressLine1: event.target.value
    }, () => console.log(this.state.addressLine1));
    this.setState({
      addressLine2: event.target.value
    }, () => console.log(this.state.addressLine2));
    this.setState({
      city: event.target.value
    }, () => console.log(this.state.city));
    this.setState({
      state: event.target.value
    }, () => console.log(this.state.state));
    this.setState({
      shippingZipCode: event.target.value
    }, () => console.log(this.state.shippingZipCode));
    this.setState({
      phoneNumber: event.target.value
    }, () => console.log(this.state.phoneNumber));
    this.setState({
      creditCardNumber: event.target.value
    }, () => console.log(this.state.creditCardNumber));
    this.setState({
      expiryDate: event.target.value
    }, () => console.log(this.state.expiryDate));
    this.setState({
      cvv: event.target.value
    }, () => console.log(this.state.cvv));
    this.setState({
      billingZipCode: event.target.value
    }, () => console.log(this.state.billingZipCode));  
    this.postInfo(this.state.input);

  }

  
  render() {
    const value = this.state.value;
    let page;
    if (value === 'checkout') {
      page = <CreateAccountForm 
      handleClick={this.handleClick}
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}
      />
    } else if (value === 'create-account') {
      page = <ShippingAddressForm 
      handleClick={this.handleClick}
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}
      />
    } else if (value === 'submit-shipping') {
      page = <BillingForm 
      handleClick={this.handleClick}
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}
      />
    } else if (value === 'purchase') {
      page = <ShoppingCart 
      handleClick={this.handleClick}
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}
      />
    } else {
      page = <ShoppingCart 
      handleClick={this.handleClick}
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}
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