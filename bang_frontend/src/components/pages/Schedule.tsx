import axios from 'axios';
import { useState } from 'react';
import '../css/Schedule.css';
import ResponsiveAppBar from '../global/navbar';

function Schedule() {

  const NEW_URL = 'http://localhost:8080/venue/newVenue';

  const Rent = async (amount:string) => {

    axios
        .post(NEW_URL,{
          amount,
        })
        .then(res => {

          if(res.data){

            alert("Successfully Rented!"+JSON.stringify(res.data));

          }

        })
        .catch(err =>{
            console.log(err)
        })

  }

  return (
    <div className="App">

      <ResponsiveAppBar/>

      <header className="App-header">

        <h1> SELECT RENT DURATION </h1>

        <div className='choices1'>
          <button onClick={() => Rent('4499')} className='btn'>A Day</button> 
          <button onClick={() => Rent('8799')} className='btn'>2 Days</button>
        </div>

        <div className='choices2'>
          <button onClick={() => Rent('13349')} className='btn'>3 Days</button> 
          <button onClick={() => Rent('17899')} className='btn'>4 Days</button>
        </div>

        <div className='choices3'>
          <button onClick={() => Rent('21000')} className='btn'>5 Days</button> 
          <button onClick={() => Rent('25000')} className='btn'>6 Days</button>
        </div>

        <div>
          <button onClick={() => Rent('30000')} className='btn'>A Week</button> 
        </div>


        <br></br>

      </header>
    </div>
  );
}

export default Schedule;
