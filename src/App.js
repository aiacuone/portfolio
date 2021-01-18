import React, {useState} from 'react';
import HeaderLogo from './HeaderLogo'
import HeaderHamburger from './HeaderHamburger'
import Content from './Content'
import Name from './Name'
import Location from './Location'


function App() {


  return (
    <div id='mainContent'>
      <div id='main'>
        <div id='header'>
          <HeaderLogo/>
          <HeaderHamburger/>
        </div>
        <Content/>
        <div id='footer'>
          <Name/>
          {/* <Location/> */}
        </div>
      </div>
    </div>
  );
}

export default App;
