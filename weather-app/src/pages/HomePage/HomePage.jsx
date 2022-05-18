import React, { Component } from 'react';
import Home from '../../components/Home/Home';
import Login from '../../components/Login/Login';
import Footer from '../../components/Footer/Footer';


class HomePage extends Component {
    render(){
        return (
            <div>
            <Home/>
            <Login/>
            <Footer style={{position:'fixed'}}/>
            </div>
        )
    }
}

export default HomePage;
