import { Button } from '@mui/material';
import { AiFillCreditCard } from "react-icons/ai";
import { HiCash } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

function Payment(){
  const navigate = useNavigate();
  return (
    <div className="App"> 
    <header className="App-header">
        <h1> Select Payment </h1>

        <div className='choices1'>

          <Button  className='btn' ><AiFillCreditCard size='4rem'/>Card</Button>
          <Button  className='btn' >Cash</Button>
          <Button  className='btn' ><HiCash size='4rem'/>Gcash</Button>
          </div>



        <div className='choices1'>
         <Button className='btn' >Purchase</Button>
         <Button onClick = {()=>{navigate('/Create');}} className='btn' >Cancel</Button>
         </div>



      </header>
    </div>
  );
}
export default Payment;
