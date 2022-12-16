import '../../App.css';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import ResponsiveAppBar from '../global/navbar';



  function PaymentMain() {
    const navigate = useNavigate();
    
    
    return (
      <div className="App"> 

      <ResponsiveAppBar/>

        <header className="App-header">
            <h1> Select Hours </h1>
      
            <div className='choices1'>
             <Button onClick = {()=>{navigate('/Payment');}} className='btn' variant='contained' sx={{boxShadow: 10,margin: 3,color: 'black',height: 100, width: 190, backgroundColor: 'white'}}>(07:00) ₱210 </Button>
             <Button onClick = {()=>{navigate('/Payment');}} className='btn' variant='contained' sx={{boxShadow: 10,margin: 3,color: 'black',height: 100, width: 190, backgroundColor: 'white'}}>(04:00) ₱120</Button>
            </div>

           <div className='choices2'>
             <Button onClick = {()=>{navigate('/Payment');}} className='btn' variant='contained' sx={{boxShadow: 10,margin: 3,color: 'black',height: 100, width: 190, backgroundColor: 'white'}}>(03:00) ₱90</Button>
             <Button onClick = {()=>{navigate('/Payment');}} className='btn' variant='contained' sx={{boxShadow: 10,margin: 3,color: 'black',height: 100, width: 190, backgroundColor: 'white'}}>(02:00) ₱60</Button>
            </div>

           <div className='choices3'>
              <Button onClick = {()=>{navigate('/Payment');}} className='btn' variant='contained' sx={{boxShadow: 10,margin: 3,color: 'black',height: 100, width: 190, backgroundColor: 'white'}}>(01:00) ₱30</Button>
              <Button onClick = {()=>{navigate('/Payment');}} className='btn' variant='contained' sx={{boxShadow: 10,margin: 3,color: 'black',height: 100, width: 190, backgroundColor: 'white'}}>(00:30) ₱15 </Button>
            </div>
    
            <div className='choices1'> 
              <Button onClick = {()=>{navigate('/Payment');}} className='btn' variant='contained' sx={{boxShadow: 10,margin: 3,color: 'black',height: 100, width: 190, backgroundColor: 'white'}}>Open Time</Button>
            </div>
        
      
        </header>
     </div>
    );


  
};




export default PaymentMain;
