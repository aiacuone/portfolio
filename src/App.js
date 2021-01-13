import React, {useState} from 'react';
import Header from './Header'
import Hero from './Hero'
import Introduction from './Introduction'
import Interests from './Interests'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Final from './Final'

function App() {

  let [hamburgerAngle, setHamburgerAngle]=useState('normal')

  return (
    <div id='main'>
      <Header clickHamburger={value=>setHamburgerAngle(value)} hamburgerAngle={hamburgerAngle}/>
      <Hero clickHamburger={value=>setHamburgerAngle(value)} hamburgerAngle={hamburgerAngle}/>
      <Introduction clickHamburger={value=>setHamburgerAngle(value)} hamburgerAngle={hamburgerAngle}/>
      <Interests/>
      <AboutMe/>
      <Projects/>
      <Final/>
    </div>
  );
}

export default App;
