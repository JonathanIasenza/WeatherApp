import React, { Component } from 'react';
import './Footer.css';
import { AiFillGithub , AiFillLinkedin } from 'react-icons/ai';

class Footer extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    render(){
        return(
            <div className="footer" style={this.props.style}>
            <div className="footer-container" style={this.props.style}>
                <div className="footer-body">
                Jona Iasenza, {(new Date().getFullYear())} ©
                </div>
                <p className="title-p">Frontend Dev.</p>
                <a className="icons" id="github-icon" href="https://github.com/JonathanIasenza/"><AiFillGithub/></a>
                <a className="icons" id="linkedin-icon" href="https://www.linkedin.com/in/jonathan-sebastian-iasenza-3711211a7/"><AiFillLinkedin/> </a>
            </div>
            </div>
        )
    }
}

export default Footer;