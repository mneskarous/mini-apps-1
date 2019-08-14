import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {

    super(props);

    this.state = {

    }

  }

  render() {
    return (
      <div>
        <form method="post" action="/api">
          <div class="field">
          <label>Data:</label>
          <input type="text" name="data" id="data" required/>
          </div>
      <div id="submit">
        <input type="submit" value="Submit"/>
      </div>
        </form>
      </div>
    )
  }

}



export default App;