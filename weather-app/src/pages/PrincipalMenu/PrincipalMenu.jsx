import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import MenuLoggedIn from '../../components/MenuLoggedIn/MenuLoggedIn';
import '../../components/Footer/Footer.css';

class HomePage extends Component {
    render(){
        return (
            <div>
            <MenuLoggedIn/>
            <Footer style={{position:'sticky'}}/>
            </div>
        )
    }
}

export default HomePage;
