import React from 'react';

const CreateAccountForm = ({ handleClick }) => (
  <div>
    <h1>Create Account</h1>
    <div>
      <form>
        <div>
          <label>Name</label>
          <input type="text" id="name" required></input>
        </div>
        <div>
          <label>Email Address</label>
          <input type="text" id="email" required></input>
        </div>
        <div>
          <label>Password</label>
          <input type="text" id="password" required></input>
        </div>
      </form>
    </div>
    <div>
      <button class="btn" type="button" value="create-account"
      onClick={() => {handleClick(event)}}>
      Create Account
      </button>
    </div>
  </div>
);

export default CreateAccountForm;