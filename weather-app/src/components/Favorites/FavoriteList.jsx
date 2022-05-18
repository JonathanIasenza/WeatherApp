import React from "react";
import { IoMdRemoveCircleOutline } from 'react-icons/io';
import { FiAlertTriangle } from 'react-icons/fi';
import { Table, Button } from 'reactstrap';
// import { ReactNotifications, Store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';


function FavoriteList (props){
 
   const { favorites } = props;
   var local = JSON.parse(localStorage.getItem('cityName')) || [];
    return (
      <div>
        {favorites[0] ? 
          <Table className="table table-striped table-dark text-center">
         <thead>
                <tr id="tab">
                    <th>City</th>
                    <th>Temperature in C°</th>
                    <th>Remove from favorites</th>
                </tr>
            </thead>
            <tbody>
                {favorites.map((element) => (
                  <div>
                    <button onClick={''}>Information</button>
                    <tr key={element? element.id : ''} className="table-user">
                        <td>{element? element.name : ''}</td>
                        <td>{element.main.temp > 30 ? <div>{element.main.temp}° 
                        <FiAlertTriangle title="High temperature" color='red'/></div>
                        : element.main.temp < 5 ? <div>{element.main.temp}° 
                        <FiAlertTriangle title="Low temperature" color='#00FFFF'/></div> : 
                        <div>{element.main.temp}°</div>}</td>
                        <td><Button color="danger" 
                        onClick={() => props.removeItem(element)}><IoMdRemoveCircleOutline/></Button></td>
                    </tr></div>
                  )
                )}        
            </tbody>
            </Table >
            : <Table className="table table-striped table-dark text-center">
               <thead>
                <tr id="tab">
                    <th>City</th>
                    <th>Temperature in C°</th>
                    <th>Remove from favorites</th>
                    <th>Information</th>
                </tr>
            </thead>
            <tbody>
              {local.length < 1 || local === null ? 
             <>
               <tr className="text-center">
             <td></td>
             <td>Add your favorites cities!</td>
             <td></td>
             </tr>
             </>
            :  
            <>
            {local.map((element) => (
               <tr key={element? element.id : ''} className="table-user">
                 {/* <td><><ReactNotifications /> <Home element={element}/></></td> */}
                <td>{element? element.name : ''}</td>
                <td>{element.main.temp > 30 ? <div>
                  {element.main.temp}° 
                        <FiAlertTriangle title="High temperature" color='red'/></div>
                        : element.main.temp < 5 ? <div>{element.main.temp}° 
                        <FiAlertTriangle title="Low temperature" color='#00FFFF'/></div> : 
                        <div>{element.main.temp}°</div>}</td>
                <td><Button color="danger" 
                 onClick={() => props.removeItem(element)}><IoMdRemoveCircleOutline/></Button></td>
               </tr>
               ))}
            </>
         }
                   
            </tbody>
              </Table>}
  </div>
    );
}

// function Home(props){
//          let element = props.element;
//          const handleOnClickInformation = () =>{
           
//          if(element.main.temp > 30){
//              Store.addNotification({
//                  title: 'Temperature is high!',
//                  message: 'Temperature High (more than 30°)',
//                  type: 'danger',
//                  container: 'bottom-right',
//                  insert: "bottom",
//                  animationIn: ["animate__animated", "animate__fadeIn"],
//                  animationOut: ["animate__animated", "animate__fadeOut"],
         
//                  dismiss:{
//                    duration: 5000,
//                    onScreen: true
//                  }
//                })
//          }

//          if(element.main.temp < 5){
//              Store.addNotification({
//                  title: 'Temperature is low!',
//                  message: 'Temperature low (less than 5°)',
//                  type: 'info',
//                  insert: "bottom",
//                  container: 'bottom-right',
//                  animationIn: ["animate__animated", "animate__fadeIn"],
//                  animationOut: ["animate__animated", "animate__fadeOut"],
         
//                  dismiss:{
//                    duration: 5000,
//                    onScreen: true
//                  }
//                })
//            }
//            if(element.main.temp < 30 && element.main.temp > 5){
//                  return ''
//            }
//      }

// return(
//      <div>
//        <button
//        className="btn btn-info"
//        onClick={handleOnClickInformation}>
//         Information
//        </button>
//      </div>
//      )

// }
export default FavoriteList;


