import React,
{
  Component
} from 'react';
import '../styles/global.css';
import Sidebar from './Sidebar'
import Body from './Body'

class Home extends Component {
  constructor(props) {
    super(props)
    this.goToMainPage = this.goToMainPage.bind(this)
    this.setLbText = this.setLbText.bind(this)
    this.setKgText = this.setKgText.bind(this)
    this.showMain = false;

    this.state = {
      lb: "",
      kg: ""
    }
  }
  lbstokg(lbs) {
    return lbs*0.453592
  }
  kgstolbs(kgs) {
    return kgs/0.453592
}
  goToMainPage(e) {
    e.preventDefault()
    this.showMain = true;
  }

  setLbText(e) {
    let lbs = e.target.value
    this.setState({lb: lbs, kg: this.lbstokg(lbs)})
  }

  setKgText(e) {
    let kgs = e.target.value
    this.setState({kg: kgs, lb: this.kgstolbs(kgs)})
  }

//END OF JAVASCRIPT

//HTML RENDER

  render() {
    return (
      <>
      <form className="landing-form" autoComplete="off" onSubmit={this.goToMainPage}>
        <label>Weight:</label>
        {/* lbs weight */}
        <div>
          <input type="number"
            value={this.state.lb}
            onChange={this.setLbText}
            name="weight" id='lb-weight' />
        </div>
        <div>
        {/* kg weight */}
          <input type="number"
            value={this.state.kg}
            onChange={this.setKgText}
            name="weight" id='kg-weight' />
        </div>
        <input type="submit" value="Calculate" />
      </form>





      <Body/>
      <Sidebar/>
      </>






    );
  }
}

//END OF HTML RENDER

export default Home;
