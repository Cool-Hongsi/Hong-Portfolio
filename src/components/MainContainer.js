import React from 'react';
import NavBar from './NavBar';
import '../css/MainContainer.css';

export default class MainContainer extends React.Component{
    render(){
        return(
            <div>
                <NavBar />
                
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}