import '../css/Room.css';
import axios from 'axios';
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
        <div className='room'>
            <h1> SELECT ROOM </h1><br/>
        </div>

        <div className='choices1'>
          <button onClick={() => Room('Public Room', '1st Floor')} className='btn2'>Public Room</button>
          <button onClick={() => Room('Private Room', '2nd Floor')} className='btn2'>Private Room</button>
        </div>

        <div className='choices2'>
          <button onClick={() => Room('Tournament Room', '3rd Floor')} className='btn2'>Tournament Room</button>
        </div>
        <br></br>

      </header>
    </div>
  );
}

export default RoomChoices;