import React,
{
  Component
} from 'react';

import '../styles/global.css'

class Body extends Component {

getRadius() {
  if (this.props.radius === null) {
    return null
  } else {
    return this.props.radius
  }
}

render() {
  return (
    <div>
      <h1>{this.getRadius()}</h1>
    </div>
    );
  }
}

export default Body;
