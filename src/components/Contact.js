import React from 'react';
import '../css/Contact.css';

export default class Contact extends React.Component{
    render(){
        return(
            <div id="contact">
                <div className="contact-icon">
                    <div className="email">
                        <a href="mailto:hongsi140626@gmail.com" rel="noopener noreferrer" target="_blank">
                            <i className="fas fa-envelope"></i>
                        </a>
                    </div>
                    <div className="linkedin">
                        <a href="https://www.linkedin.com/in/sungjun-hong-929496165/" rel="noopener noreferrer" target="_blank">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                    <div className="github">
                        <a href="https://github.com/Cool-Hongsi" rel="noopener noreferrer" target="_blank">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                    <div className="fcc">
                        <a href="https://www.freecodecamp.org/hongsi140626" rel="noopener noreferrer" target="_blank">
                            <i className="fab fa-free-code-camp"></i>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}