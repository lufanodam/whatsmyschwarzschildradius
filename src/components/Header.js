import React,
{
  Component
} from 'react';
import '../styles/global.css';

class Header extends Component {
  constructor(props) {
    super(props)
    this.goToMainPage = this.showBody.bind(this)
    this.setLbText = this.setLbText.bind(this)
    this.setKgText = this.setKgText.bind(this)
    this.showBody = this.showBody.bind(this)

    this.state = {
      lb: "",
      kg: "",
      showBody: false
    }
  }

  lbstokg(lbs) {
    return lbs * 0.453592
  }

  kgstolbs(kgs) {
    return kgs / 0.453592
  }

  calculateRadius(MassInKg) {
    return (2 * 6.67408*Math.pow(10,-11)) * MassInKg )/ Math.pow(299792458,2)
  }
  showBody(e) {
    e.preventDefault()
    this.setState({ showBody: true })
    this.props.onCalc(this.calculateRadius(this.state.kg))
  }

  setLbText(e) {
    let lbs = e.target.value
    this.setState({ lb: lbs, kg: this.lbstokg(lbs) })
  }

  setKgText(e) {
    let kgs = e.target.value
    this.setState({ kg: kgs, lb: this.kgstolbs(kgs) })
  }

  //END OF JAVASCRIPT

  //HTML RENDER

  render() {
    return (
      <>
        <form className="landing-form" autoComplete="off" onSubmit={this.showBody}>
          <h3>Weight:</h3>
          {/* lbs weight */}
          <div>
            <input type="number"
              value={this.state.lb}
              onChange={this.setLbText}
              name="lb-weight" id='lb-weight' />
            <label htmlFor='lb-weight'>lbs</label>
          </div>
          <div>
            {/* kg weight */}
            <input type="number"
              value={this.state.kg}
              onChange={this.setKgText}
              name="kg-weight" id='kg-weight' />
            <label htmlFor='kg-weight'>kgs</label>
          </div>
          <input type="submit" value="Calculate" />
        </form>



      </>






    );
  }
}

//END OF HTML RENDER

export default Header;
