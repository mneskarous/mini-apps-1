import React from 'react';

const CreateAccountForm = (props) => (
  <div>
    <h1>Create Account</h1>
    <div>
      <form>
        <div>
          <label>Name</label>
          <input type="text" id="name" value={props.name} required
          onChange={() => {props.handleChange(event)}}></input>
        </div>
        <div>
          <label>Email Address</label>
          <input type="text" id="email" value={props.email} required 
          onChange={() => {props.handleChange(event)}}></input>
        </div>
        <div>
          <label>Password</label>
          <input type="password" id="password" value={props.password} required
          onChange={() => {props.handleChange(event)}}></input>
        </div>
      </form>
    </div>
    <div>
      <button className="btn" type="button" value="create-account"
      onClick={() => {props.handleClick(event); props.handleSubmit(event);}}>
      Create Account
      </button>
    </div>
  </div>
);

export default CreateAccountForm;