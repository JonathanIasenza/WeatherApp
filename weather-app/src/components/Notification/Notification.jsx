import { Store } from 'react-notifications-component';
import React, { Component } from 'react';
import FavoriteList from '../Favorites/FavoriteList';

class Notification extends Component {
    constructor(props) {
        super(props);
        this.state={
            high: [],
            low: []
        }
      }

    render(){
        let localTemp = this.props.localTemp
        let highTemperature = localTemp.filter((e => e > 30));
        let lowTemperature = localTemp.filter((e => e < 5));
        console.log('high', this.state.high)
        console.log('high', this.state.low)

            const handleOnClickInformation = () =>{
                    this.setState({
                        high: highTemperature,
                        low: lowTemperature
            });

            if(this.state.high){
                Store.addNotification({
                    title: 'Temperature is high!',
                    message: 'Temperature High (more than 30°)',
                    type: 'danger',
                    container: 'bottom-right',
                    insert: "bottom",
                    animationIn: ["animated","fadeIn"],
                    animationOut: ["animated","fadeOut"],
            
                    dismiss:{
                      duration: 5000
                    }
                  })
            }
            if(this.state.low){
                Store.addNotification({
                    title: 'Temperature is low!',
                    message: 'Temperature low (less than 5°)',
                    type: 'info',
                    container: 'bottom-right',
                    insert: "bottom",
                    animationIn: ["animated","fadeIn"],
                    animationOut: ["animated","fadeOut"],
            
                    dismiss:{
                      duration: 5000
                    }
                  })
              }
              if(!this.state.low && !this.state.high){
                    alert('No notifications yet');
              }
        }
        
         return (
           <button onClick={() => handleOnClickInformation()}>ASD</button>
         )
}
}



export default Notification;