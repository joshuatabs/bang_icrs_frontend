import '../css/Room.css';
import ResponsiveAppBar from '../global/navbar';

function RoomChoices() {

  function room(){
    alert('Select mode of Payment: TBA...')
  }

  <ResponsiveAppBar/>

  return (
    <div className="App">
      <ResponsiveAppBar/>
      <header className="App-header">

        <h1 className='high'> SELECT ROOM </h1>

        <div className='choices1'>
          <button onClick={room} className='btn'>Public Room</button> 
          <button onClick={room} className='btn'>Private Room</button> 
        </div>

        <div className='choices3'>
          <button onClick={room} className='btn'>Tournament Room</button> 
        </div>
        <br></br>

      </header>
    </div>
  );
}

export default RoomChoices;