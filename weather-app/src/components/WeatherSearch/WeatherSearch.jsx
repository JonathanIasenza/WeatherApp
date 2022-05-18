import React, { Component } from 'react';
import './WeatherSearch.css'

class WeatherSearch extends Component {

    render(){
        return(
            <div className='card card-body'>
                <form onSubmit={this.props.getWeather}>
                    <div className='form-group'>
                        <h3 style={{textAlign: 'center'}}>☁ See the weather in real time! ☀️</h3>
                        <input 
                        type="text" 
                        name='city' 
                        placeholder='Search a city or country by name... 🔎' 
                        className='form-control'
                        autoFocus/>
                    </div>
                    <button className='btn btn-secondary btn-block button-get'>Get Weather</button>
                </form>
            </div>
        )
    }
}

export default WeatherSearch;