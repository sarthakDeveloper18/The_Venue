import React from 'react';
import './resources/styles.css';
import Header from './components/Header_Footer/Header';
import Featured from './components/Featured/index';
import VenueInfo from './components/VenueInfo/index';
import Highlights from './components/Highlights/index';
import Pricing from './components/Pricing/index';
import Location from './components/Location/index';
import Footer from './components/Header_Footer/Footer';
import {Element} from 'react-scroll';

class App extends React.Component{
  render() {
    return (
      <div style={{height: '1500px'}}>
        <Element>
          <Header/>
        </Element>
        <Element name = 'FEATURED'>
          <Featured/>
        </Element>
        <Element name = 'Venue NFO'>
          <VenueInfo/>
        </Element>
        <Element name = 'Highlights'>
          <Highlights/>
        </Element>
        <Element name = 'Pricing'>
          <Pricing/>
        </Element>
        <Element name = 'Location'>
          <Location/>
        </Element>
        <Element>
          <Footer/>
        </Element>
      </div>
    );
  }
}

export default App;
