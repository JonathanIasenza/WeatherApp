import React from 'react';
import './Home.css';
import { Component } from 'react';
import logo from '../../images/login-logo.png'

class HomePage extends Component{
    render(){
    return (
        <div className='home-title'>
            <h1>Weather App  {' '}
             <img src={logo} alt="" style={{width:'8%'}}/>
            </h1>
        </div>
    )
   
}
}

export default HomePage;
