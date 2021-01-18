import React, {useState,useEffect} from 'react';
import HeaderLogo from './HeaderLogo'
import HeaderHamburger from './HeaderHamburger'
import Content from './Content'
import Name from './Name'
// import Location from './Location'
import Dropdown from './Dropdown'


function App() {

let [windowWidth, setWindowWidth]=useState(window.innerWidth)
let [windowHeight, setWindowHeight]=useState(window.innerHeight)
let [dropdown, setDropdown]=useState(false)

function handleResize(){
    setWindowWidth(window.innerWidth)
}

useEffect(()=>{
window.addEventListener('resize', handleResize)
},[])

  return (
    <div id='mainContent'>
      <div id='header'>
        <HeaderLogo/>
        <HeaderHamburger burgerClick={value=>setDropdown(value)}  dropdown={dropdown}/>
      </div>
      <Dropdown windowWidth={windowWidth}/>
      <div id='main'>
        <Content/>
      </div>
      <div id='footer'>
        <Name windowWidth={windowWidth}/>
      </div>
    </div>
  );
}

export default App;
