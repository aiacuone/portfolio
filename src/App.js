import React, {useState,useEffect} from 'react';
import HeaderLogo from './HeaderLogo'
import HeaderHamburger from './HeaderHamburger'
import Content from './Content'
import Name from './Name'
import Dropdown from './Dropdown'
import NameHeader from './NameHeader'
import LocationHeader from './LocationHeader'
import HeaderHome from './HeaderHome'


function App() {

let [windowWidth, setWindowWidth]=useState(window.innerWidth)
let [windowHeight, setWindowHeight]=useState(window.innerHeight)
let [dropdown, setDropdown]=useState(false)
let [content, setContent]=useState('home')

function handleResize(){
    setWindowWidth(window.innerWidth)
    setWindowHeight(window.innerHeight)
}

useEffect(()=>{
window.addEventListener('resize', handleResize)
},[])

  return (
    <div id='mainContentContainer'>
      <div id='mainContentOverlay'/>
      <div id='header'>
        <NameHeader windowWidth={windowWidth}/>
        {/* <HeaderHamburger 
        burgerClick={value=>setDropdown(value)}  
        dropdown={dropdown}/> */}
        <HeaderHome
        contentChange={value=>setContent(value)}/>
        <LocationHeader windowWidth={windowWidth}/>
      </div>
      {/* {dropdown&&<Dropdown
       windowWidth={windowWidth} 
       burgerClick={value=>setDropdown(value)} 
       contentChange={value=>setContent(value)} />} */}
       
      <div id='main'>
        <Content 
        contentChange={value=>setContent(value)} 
        content={content} 
        windowHeight={windowHeight} 
        windowWidth={windowWidth}/>
      </div>
    </div>
  );
}

export default App;
