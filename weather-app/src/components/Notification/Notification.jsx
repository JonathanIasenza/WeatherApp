import { Toaster, toast } from 'react-hot-toast';
import React from 'react';
import { GrCircleInformation } from 'react-icons/gr'

const Notify = (props) =>{

  const notification = () => {
  let element = props.element;
  let temperature = element.main.temp;

  if(temperature > 30){
     toast(`High Temperature in ${element.name}!`, {
      position: 'bottom-right',
      icon: '🔥',
    });
  }
  if(temperature < 5){
     toast(`Low Temperature in ${element.name}!`, {
      icon: '❄',
      position: 'bottom-right',
    });
    }
  if(temperature < 30 && temperature > 5){
    toast(`No information for ${element.name}.`, {
      icon: '🛈',
      position: 'bottom-right',
    });
    }
  }

      return(
      <div><Toaster/>
      <button className='btn btn-light' onClick={notification}><GrCircleInformation/></button></div> 
      )
}

export default Notify;