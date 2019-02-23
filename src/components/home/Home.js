import React,
{
  Component
} from 'react';
import './Home.css';

class Home extends Component {

//JAVASCRIPT

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
  lbstokg(lbs) {
    return lbs*0.453592
  }

  goToMainPage(e) {
    e.preventDefault()
  }

  setLbText(e) {
    let lbs = e.target.value
    this.setState({lb: lbs, kg: this.lbstokg(lbs)})
  }

  setKgText(e) {
    this.setState({kg: e.target.value})
  }

//END OF JAVASCRIPT

//HTML RENDER

  render() {
    return (
      <form className="landing-form" onSubmit={this.goToMainPage}>
        <label htmlFor="weight">Weight:</label>
        {/* lbs weight */}
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

//END OF HTML RENDER

export default Home;
