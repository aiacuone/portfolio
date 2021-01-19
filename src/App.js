import React, {useState,useEffect} from 'react';
import HeaderLogo from './HeaderLogo'
import HeaderHamburger from './HeaderHamburger'
import Content from './Content'
import Name from './Name'
// import Location from './Location'
import Dropdown from './Dropdown'
// import heroBackground from './images/heroBackground.jpg'


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
    <div id='mainContentContainer'>
         <div id='mainContentOverlay'/>
      <div id='header'>
        {/* <HeaderLogo/> */}
        <HeaderHamburger burgerClick={value=>setDropdown(value)}  dropdown={dropdown}/>
      </div>
      {dropdown&&<Dropdown windowWidth={windowWidth} burgerClick={value=>setDropdown(value)}/>}
      <div id='main'>
        <Content/>
        <div id='footer'>
          <Name windowWidth={windowWidth}/>
        </div>
      </div>

    </div>
  );
}

export default App;
