import React,
{
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className = "App" >
      <body>
      <h3>Weight</h3>

      <form>
      <label>
      <input type="text" name="name" />
      </label>
          <input type="submit" value="Submit" />
      </form>



      </body>
      </div>
    );
  }
}

export default App;
