import React from 'react';
import '../css/About.css';
import Face from '../css/image/Face.png';

export default class About extends React.Component{
    render(){
        return(
            <div>
                <div id="about">
                    <div className="first-bar">
                    
                    </div>
                    <div className="content">
                        <div className="face">
                            <img src={Face} alt="Face"/>
                        </div>
                        <div className="introduction">
                            <span className="feature">Coding, Singing, Sports, Game</span><br/><hr/>
                            <span className="feature-text">
                                Hi! My name is Sungjun Hong. I graduated Seneca college in December 2018 (Computer Programmer).
                                I understand how collaboration is important based on my experience.
                                I promise I would get used to work anywhere quickly since 
                                I tend to keep stimulating myself to be better constantly as well as have nice personality.
                                My goal is that becoming a professional web developer with my strong passion.
                                Welcome to my portfolio !
                            </span>
                        </div>
                    </div>
                    <div className="second-bar">
                    
                    </div>
                </div>
                
                {/* <Contact /> */}
            </div>
            
        )
    }
}