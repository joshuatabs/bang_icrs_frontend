import axios from 'axios';
import '../css/Room.css';
import ResponsiveAppBar from '../global/navbar';

function RoomChoices() {

    const NEW_URL = 'http://localhost:8080/room/postRoom';

    const Room = async (code:string, floor:string) => {

      axios
          .post(NEW_URL,{
            code,
            floor,
          })
          .then(res => {

            if(res.data){

              console.log("Successfully Added!"+JSON.stringify(res.data));

            }

          })
          .catch(err =>{
              console.log(err)
          })

    }

  <ResponsiveAppBar/>

  return (
    <div className="App">
      <ResponsiveAppBar/>
      <header className="App-header">

        <h1 className='select'> SELECT ROOM </h1>

        <div className='choices1'>
          <button onClick={() => Room('Public Room', '1st Floor')} className='btn'>Public Room</button> 
          <button onClick={() => Room('Private Room', '2nd Floor')} className='btn'>Private Room</button> 
        </div>

        <div className='choices2'>
          <button onClick={() => Room('Tournament Room', '3rd Floor')} className='btn'>Tournament Room</button> 
        </div>
        <br></br>

      </header>
    </div>
  );
}

export default RoomChoices;