import React,  {useRef,useEffect,useState} from 'react'
import './styles/name.css'
import name from './images/name.svg'
import occupation from './images/occupation.svg'
import nameTitleLong from './images/nameTitleSVG.svg'
import nameTitleShort from './images/nameTitleShort.svg'
import locationSVG from './images/location.svg'
import locationShortSVG from './images/locationSmall.svg'


export default function Name() {

let title=useRef();

let [windowWidth, setWindowWidth]=useState(window.innerWidth)


function handleResize(){
    setWindowWidth(window.innerWidth)
}

useEffect(()=>{
window.addEventListener('resize', handleResize)
},[])



// let name=document.getElementById='name'

    return (
        <div ref={title} id='name' >
            <div id='details'>
                {windowWidth>=800&&<img id='nameFooterLong' src={nameTitleLong}/>}
                {windowWidth<800&&<img id='nameFooterShort' src={nameTitleShort}/>}
            </div>
            <div id='locationContainer'>
            {windowWidth>=800&&<img id='location' src={locationSVG}/>}
            {windowWidth<800&&<img id='locationshort' src={locationShortSVG}/>}
                
            </div>
        </div>
    )
}
