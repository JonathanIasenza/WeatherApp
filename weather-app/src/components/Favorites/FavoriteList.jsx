import React from "react";
import { IoMdRemoveCircleOutline } from 'react-icons/io';
import { FiAlertTriangle } from 'react-icons/fi';
import { Table, Button } from 'reactstrap';
import Notification from '../Notification/Notification';


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
                    <th>Information</th>
                </tr>
            </thead>
            <tbody>
                {favorites.map((element) => (
                    <tr key={element? element.id : ''} className="table-user">
                        <td>{element? element.name : ''}</td>
                        <td>{element.main.temp > 30 ? <div>{element.main.temp}° 
                        <FiAlertTriangle title="High temperature" color='red'/></div>
                        : element.main.temp < 5 ? <div>{element.main.temp}° 
                        <FiAlertTriangle title="Low temperature" color='#00FFFF'/></div> : 
                        <div>{element.main.temp}°</div>}</td>
                        <td><Button color="danger" 
                        onClick={() => props.removeItem(element)}><IoMdRemoveCircleOutline/></Button></td>
                        <td><Notification element={element}/></td>
                    </tr>
                  )
                )}        
            </tbody>
            </Table >
            : 
            local.length < 1 || local === null ? 
              <Table  className="table table-striped table-dark text-center">
                <thead>
                  <tr>
              <th>Add your favorites cities!</th>
              </tr>
              </thead>
              </Table>
             : 
            <Table className="table table-striped table-dark text-center">
               <thead>
                <tr id="tab">
                    <th>City</th>
                    <th>Temperature in C°</th>
                    <th>Remove from favorites</th>
                    <th>Information</th>
                </tr>
            </thead>
            <tbody>

            <>
            {local.map((element) => (
               <tr key={element? element.id : ''} className="table-user">
                <td>{element? element.name : ''}</td>
                <td>{element.main.temp > 30 ? <div>
                  {element.main.temp}° 
                        <FiAlertTriangle title="High temperature" color='red'/></div>
                        : element.main.temp < 5 ? <div>{element.main.temp}° 
                        <FiAlertTriangle title="Low temperature" color='#00FFFF'/></div> : 
                        <div>{element.main.temp}°</div>}</td>
                <td><Button color="danger" 
                 onClick={() => props.removeItem(element)}><IoMdRemoveCircleOutline/></Button></td>
                 <td><Notification element={element}/></td>
               </tr>
               ))}
            </>
            </tbody>
        </Table>
        
        }
         

  </div>
    );
}

export default FavoriteList;


