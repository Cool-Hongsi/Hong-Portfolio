import React from 'react';
import '../css/NavBar.css';

export default class NavBar extends React.Component{
    render(){
        return(
            <div id="navbar">
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#nav-about">About</a></li>
                        <li><a href="#nav-skill">Skill</a></li>
                        <li><a href="#nav-project">Project</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}