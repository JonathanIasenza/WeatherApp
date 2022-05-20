import React, { Component } from 'react';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';
import './Login.css';
import { confirmAlert } from 'react-confirm-alert'; 


const baseURL = "https://api.jsonbin.io/b/628706a6449a1f3821e540b1/1";
const cookies = new Cookies();

class Login extends Component {

state={
    form:{
        username:'',
        password:''
    }
}

handleChange = async e => {
    await this.setState({
        form:{
            ...this.state.form,
            [e.target.name]: e.target.value
        }
    });
}

logIn = async () => {
    await axios.get(baseURL, {params: 
        {
            username: this.state.form.username,
            password: md5(this.state.form.password)
        }
    }
  )
  .then(response => {
      return response.data;
  })
  .then(response => {
    if(response[0].username === this.state.form.username && response[0].password === md5(this.state.form.password)){
        var res = response[0];
        cookies.set('id', res.id, {path: "/"});
        cookies.set('username', res.username, {path: "/"});
        cookies.set('nombre_completo', res.nombre_completo, {path: "/"});
        confirmAlert({
            title: 'Login success!',
              message: 'Welcome ' + res.nombre_completo + '!',
              buttons: [{
                   label: 'Continue',
                   onClick: () => continueToMenu()
              }
              ]
          });        
    }else {
        confirmAlert({
            title: 'Login failed!',
              message: 'The username of password are incorrects, please try again. ',
              buttons: [{
                label: 'Close',
              }]
          });    
        }
    const continueToMenu = () => {
        window.location.href='./menu'
    }
  })
  .catch(error => {
      console.log(error);
  })
}

componentDidMount() { 
    if(cookies.get('username') && cookies.get('id')){
        window.location.href='/menu';
    }
 }

    render(){
        return (
            <div className='login-container'>
                <div className='login-second-container'>
                    <div className='form-group'>

                        <label>User:</label>
                        <input type="text" 
                        className='form-control' 
                        name="username"
                        onChange={this.handleChange}
                        />
                        <br />

                        <label>Password:</label>
                        <br />
                        <input type="password"
                        className='form-control'
                        name='password'
                        onChange={this.handleChange}
                        />
                        <br />
                        
                        <button 
                        id="button-login" 
                        className='btn btn-dark'
                        onClick={() => this.logIn()}>
                        Login
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login; 