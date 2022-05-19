import React, { Component } from 'react';
import './WeatherInfo.css';
import { FaTemperatureHigh, FaTemperatureLow } from 'react-icons/fa';
import { RiWindyFill } from 'react-icons/ri';
import { SiWindicss } from 'react-icons/si';
import { WiHumidity } from 'react-icons/wi';
import { BiCurrentLocation } from 'react-icons/bi';
import {  AiFillStar } from 'react-icons/ai';


class WeatherInfo extends Component{
    constructor(props) {
        super(props);
      }

render(){
        var props = this.props
        var favorites = JSON.parse(localStorage.getItem('cityName')) || [];
        var favoritesMap = favorites.map((el => {return el.name}));
        var favoriteCity = favoritesMap.includes(this.props.city, 0);
    return (
        <div>
            
            {props.error ?
                <div className='error alert alert-danger'>
                    <p>{props.error}</p>
                </div> :
                <div className='card cardBody'>
                    {props.city ? <div className='card-container'>
                        <div className='title'>
                            {!favoriteCity ?
                            <div className='add'>
                            <AiFillStar className='addIcon'
                            onClick={() => props.addFavorite()} size={'2em'} style={{color: 'yellow'}}/>
                            </div>
                                : 
                            <div className='add'>
                            <AiFillStar className='removeIcon' size={'2em'} />
                            </div>
                            }
                                
                        </div>
                        <br />
                        <div className='container-icons'>
                            {props.city ? 
                            <BiCurrentLocation fontSize={'2em'} /> : ''}
                            {props.city ?
                                <h1>{'\u00A0'}Location: {props.city + ', '}
                                <b>{props.country ? props.country : ''}
                                {props.dataIcon ? <img className='weather-icon' 
                                src={props.dataIcon} alt='icon'></img> : ''}
                                </b></h1> : ''}
                        </div>
                    <br />
                        <div className='container-icons'>
                            {props.temperature > 30 ? 
                            <FaTemperatureHigh fontSize={'1.7em'} /> : 
                            <FaTemperatureLow fontSize={'1.7em'} />}
                            {props.temperature ? 
                            <h2>{'\u00A0'}Temperature: {props.temperature + ' C°, '}
                            <em className='capitalize'>{props.description ? props.description : ''}
                            </em></h2> : ''}
                        </div>
                        <br />
                        <div className='container-icons'>
                            {props.wind_speed < 2 ? 
                            <RiWindyFill fontSize={'1.7em'} /> : 
                            <SiWindicss fontSize={'1.7em'} />}
                            {props.wind_speed ? 
                            <h2>{'\u00A0'}Wind: {props.wind_speed}</h2> 
                            : ''}
                        </div>
                        <br />
                        <div className='container-icons'>
                            {props.humidity ? 
                            <WiHumidity fontSize={'2.2em'} /> : ''}
                            {props.humidity ? 
                            <h2>{'\u00A0'}Humidity: {props.humidity + '%'}</h2> 
                            : ''}
                        </div>
                    </div> : <h2>Waiting for a search...</h2>}

                </div>
            }
        </div>
    )
}
}

export default WeatherInfo;