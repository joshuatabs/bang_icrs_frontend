import '../css/Schedule.css';
import ResponsiveAppBar from '../global/navbar';

function Schedule() {

  function onClick(){
    alert('Select mode of Payment: TBA...')
  }

  return (
    <div className="App">

      <ResponsiveAppBar/>

      <header className="App-header">

        <h1> SELECT RENT DURATION </h1>

        <div className='choices1'>
          <button onClick={onClick} className='btn'>A Day</button> 
          <button onClick={onClick} className='btn'>2 Days</button>
        </div>

        <div className='choices2'>
          <button onClick={onClick} className='btn'>3 Days</button> 
          <button className='btn'>4 Days</button>
        </div>

        <div className='choices3'>
          <button onClick={onClick} className='btn'>5 Days</button> 
          <button onClick={onClick} className='btn'>6 Days</button>
        </div>

        <div>
          <button onClick={onClick} className='btn'>A Week</button> 
        </div>


        <br></br>

      </header>
    </div>
  );
}

export default Schedule;
