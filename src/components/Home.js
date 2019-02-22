import React from 'react';
import MainContainer from './MainContainer';
import About from './About';
import Skill from './Skill';
import Project from './Project';
import '../css/Home.css';

export default class Home extends React.Component{
    render(){
        return(
            <MainContainer>
                
                <div id="home">
                    <div className="home-data">
                        Junior <br/>
                        Web Developer
                    </div>
                </div>

                <div id="nav-about">

                </div>

                <About />

                <div className="insertPic">
                    
                </div>

                <div id="nav-skill">

                </div>

                <Skill />

                <div id="nav-project">

                </div>

                <Project />
                
                <div className="copyright">
                    Copyright © Sungjun Hong 2019
                </div>

            </MainContainer>
        )
    }
}