import React,
{
  Component
} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.goToMainPage = this.goToMainPage.bind(this)
    this.setLbText = this.setLbText.bind(this)
    this.setKgText = this.setKgText.bind(this)

    this.state = {
      lb: "",
      kg: ""
    }
  }

  goToMainPage(e) {
    e.preventDefault()
  }

  setLbText(e) {
    this.setState({lb: e.target.value})
  }

  setKgText(e) {
    this.setState({kg: e.target.value})
  }

  render() {
    return (
      <form className="landing-form" onSubmit={this.goToMainPage}>
        <label htmlFor="weight">Weight:</label>
        {/* kg weight */}
        <div>
          <input type="number" 
            value={this.state.lb}
            onChange={this.setLbText}
            name="weight" id='lb-weight' />
        </div>
        <div>
        {/* kg weight */}
        </div>
          <input type="number" 
            value={this.state.kg}
            onChange={this.setKgText}
            name="weight" id='kg-weight' />
        <input type="submit" value="Calculate" />
      </form>
    );
  }
}

export default App;
