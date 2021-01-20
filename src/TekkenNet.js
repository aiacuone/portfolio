import React from 'react'
import ProjectLayout from './ProjectLayout'

export default function TekkenNet(props) {
    return (
        <div class='tekkennetProject'>
            <ProjectLayout content={props.content}/>
        </div>
    )
}
