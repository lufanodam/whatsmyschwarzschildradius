import React,
{
  Component
} from 'react';

import '../styles/global.css'

class Body extends Component {

RadiusCalculation(MassInKg) {
    return (2*6.67408e-11*MassInKg/(299792458)^2)
  }



render() {
  return (
    <div>
      <h1> I AM THE BODY</h1>
    </div>
    );
  }
}

export default Body;
