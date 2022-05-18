import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrincipalMenu from '../pages/PrincipalMenu/PrincipalMenu';
import HomePage from '../pages/HomePage/HomePage';
import './Routes.css'


class Routes extends Component{
    render(){
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/menu" component={PrincipalMenu}></Route>
        </Switch>
        </BrowserRouter>
    )
  }
}

export default Routes;