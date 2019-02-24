import React,
{
  Component
} from 'react';

import Sidebar from './Sidebar'
import Body from './Body'
import Header from './Header'
import '../styles/global.css'

class Home extends Component {

render() {
  return (

    <>
    <Body/>
    <Header/>
    <Sidebar/>
    </>

    );
  }
}

export default Home;
