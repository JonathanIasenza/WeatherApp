import React, { Component } from 'react';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';
import './Login.css';

const baseURL = "http://localhost:3001/usuarios";
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
    if(response.length > 0){
        var res = response[0];
        cookies.set('id', res.id, {path: "/"});
        cookies.set('username', res.username, {path: "/"});
        cookies.set('nombre_completo', res.nombre_completo, {path: "/"});
        alert(`Welcome ${res.nombre_completo}`)
        window.location.href='./menu'
        
    }else {
        alert('The username or password are wrongs.')
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