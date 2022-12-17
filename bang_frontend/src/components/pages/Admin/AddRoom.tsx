import '../../css/Room.css';
import ResponsiveAppBar from '../../global/AdminNavbar';

export default function AddRoom() {

  function room(){
    alert('Select mode of Payment: TBA...')
  }

  <ResponsiveAppBar/>

  return (
    <div className="App">
      <ResponsiveAppBar/>
      <header className="App-header">

        <br></br>
        <h1 > ADD A ROOM </h1>

        <div className='choices1'>
          <button onClick={room} className='btn'>Public Room</button> 
          <button onClick={room} className='btn'>Private Room</button> 
        </div>


        <div className='choices3'>
          <button onClick={room} className='btn'>Tournament Room</button> 
        </div>

      </header>
    </div>
  );
}