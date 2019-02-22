import React from 'react';
import { TweenMax, Power2 } from 'gsap';
import Home from './Home';
import '../css/Landing.css';

export default class Landing extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            nextPage : false
        }

        this.LandingEffect = this.LandingEffect.bind(this);
    }

    LandingEffect(){
        TweenMax.to(".landingBtn", 1, {
            y : -100,
            opacity : 0
        });

        TweenMax.to(".landingBackground", 2, {
            y : 100,
            opacity : 0,
            ease : Power2.easeInOut,
            delay : 1
        });

        TweenMax.to(".screen", 2, {
            delay : 3,
            top : "-110%",
            ease : Power2.easeInOut
        });
        
        setTimeout(() => {
            this.setState({
                nextPage : !this.state.nextPage
            })}, 2800
        );  
    }

    render(){
        return(
            <div>
                <div id="landing">
                    <div className="screen">
                        <p className="landingBackground">
                            SUNGJUN
                        </p>
                        <button className="landingBtn" onClick={this.LandingEffect}>
                            <div className="hong">Hong</div>
                        </button>
                    </div>
                </div>
                
                {this.state.nextPage ? <Home /> : null}
            </div>
        )
    }
}