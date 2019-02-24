import React,
{
  Component
} from 'react';

import Sidebar from './Sidebar'
import Body from './Body'
import Header from './Header'
import '../styles/global.css'

class Home extends Component {
  constructor(props) {
    super(props)
    this.onCalc = this.onCalc.bind(this)

    this.state = {
      landingState: true,
      radius: 0
    }
  }

  onCalc(radius) {
    this.setState({radius: radius, landingState: false})
  }

  render() {
    return (

      <>
        <Body />
        {this.state.landingState && <Header onCalc={this.onCalc} />}
        <Sidebar />
      </>

    );
  }
}

export default Home;
