import React, { Component } from 'react';
import './MenuLoggedIn.css';
import Cookies from 'universal-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherSearch from '../WeatherSearch/WeatherSearch';
import WeatherInfo from  '../WeatherInfo/WeatherInfo';
import FavoriteList from '../Favorites/FavoriteList';
import logo from '../../images/logo.png';
import { confirmAlert } from 'react-confirm-alert'; 
import './react-confirm-alert.css'

const cookies = new Cookies();

class MenuLoggedIn extends Component {
    state = {
            temperature: '',
            description: '',
            humidity: '',
            city: '',
            country: '',
            wind_speed: '',
            error: null,
            dataIcon: '',
            favorites: [],
            favoriteIcon: true
}


getWeather = async e => {
      e.preventDefault();
      const { city } = e.target.elements;
      const cityValue = city.value;

      const api_key = '55ce1546046cfaa4de51646141144169';
      const api_url = `http://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${api_key}&units=metric`;
      const response = await fetch(api_url);
      const data = await response.json();

      const responseIcon = await fetch(`${api_url}weather?q=Guwahati&units=metric&appid=${api_key}`);
      const dataIcon = await responseIcon.json();
      const iconName = dataIcon.weather? dataIcon.weather[0].icon : '';
      const iconApi = await fetch(`http://openweathermap.org/img/w/${iconName}.png`);

        localStorage.setItem('citylist', JSON.stringify([data]));
        if(!localStorage.getItem('cityName')){
            localStorage.setItem('cityName', '[]');
        }

        if(cityValue && response.status === 200){
        
        this.setState({ 
                temperature: data.main.temp,
                description: data.weather[0].description,
                humidity: data.main.humidity,
                city: data.name,
                country: data.sys.country,
                wind_speed: data.wind.speed,
                error: null,
                dataIcon: iconApi.url,
            });

        } else if(cityValue === ''){
        this.setState({error: 'Please enter a city name...'})
        } else if(response.status === 404){
            this.setState({error: "Sorry the city that you entered doesn't exists on this API 😥"})
        }
        
}

addFavorite = () => {
    let citylist = JSON.parse(localStorage.getItem('citylist'));
    let cityName = JSON.parse(localStorage.getItem('cityName'));
    
    function addToFavs(cityId){
    let city = citylist.find(function(city){
        return city.id === cityId;
    });
    if(cityName.length === 0){
        cityName.push(city);
    }else{
        let res = cityName.find(element => element.id === cityId);
        if(res === undefined){
            cityName.push(city);
        }
    }
    localStorage.setItem('cityName', JSON.stringify(cityName));
}

addToFavs(citylist[0].id);
this.setState({
    favorites: cityName,
    favoriteIcon: false
});
}

removeItem = (e) => {
    let cityName = JSON.parse(localStorage.getItem('cityName'));
    let cityTemp = this.state.favorites;
    var option = true;
    let city = cityTemp.map((e => {
    return e.name
    }));

    if(option){
        const deleteFromTable = () =>{
        var contador = 0;
        var list = cityName.map((es => {           
            if(es.name === city){
            list.splice(contador, 1)
           }
           return contador++;
        }));
        

        const filtered = cityName.filter(cityName => cityName.id !== e.id);
        localStorage.setItem('cityName', JSON.stringify(filtered));

        this.setState(({
          favorites: filtered,
          favoriteIcon: true
        }));
      }
      
      option = confirmAlert({
        title: 'Confirm to delete',
          message: 'Are you sure that you want to delete the city ' + e.name + '?',
              buttons: [
          {
            autoFocus: true, 
            label: 'Yes',
            onClick: () => deleteFromTable(),
          },
          {
            label: 'No',
          }
        ],
      });
    }
    }


logOut = () => {
    cookies.remove('id', {path: '/'});
    cookies.remove('username', {path: '/'});
    cookies.remove('nombre_completo', {path: '/'});
    window.location.href='/';
}

componentDidMount() { 
    if(!cookies.get('username') && !cookies.get('id')){
        window.location.href='/';
    }
 }

    render(){
        cookies.get('id')
        cookies.get('username')
        cookies.get('nombre_completo')
        
        return(
            <div className='principal-menu-container'>
                <div className='container-title'>
                <h1>
                Principal Menu <img src={logo} alt="" style={{width:'10%'}} />
                </h1>
                </div>
                <br />
                <div className='button-logout'>
                <button 
                className='btn btn-dark' 
                onClick={() => this.logOut()}>
                Logout
                </button>
                </div>
                <div className='col-md-9 weather-card'>
                
                <WeatherSearch
                getWeather={this.getWeather}/>
                
                <WeatherInfo 
                {...this.state} 
                addFavorite={this.addFavorite}
                favorites={this.state.favorites}
                removeItem={this.removeItem}
                />
                
                <FavoriteList 
                favorites={this.state.favorites}
                removeItem={this.removeItem}
                />
            </div>
            </div>
        )
    }
}

export default MenuLoggedIn;