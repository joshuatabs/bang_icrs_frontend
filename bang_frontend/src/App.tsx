import './App.css';
import ResponsiveAppBar from './components/global/navbar';
import Card, { CardDetails } from './components/global/Card';
import Schedule from './components/pages/Schedule'
import {Routes, Route} from 'react-router-dom'

function App() {

  const iCard:CardDetails[] = [
    {title:'Broadcasting PC', image:'/static/images/Broadcast.jpg', description:'Reserve a Broadcasting PC for streaming!'},
    {title:'Select Schedule', image:'/static/images/eCafe.jpg', description:'Schedule the date of reserving the whole venue!'},
    {title:'Payment Methods', image:'/static/images/pay.jpg', description:'Select supported payment methods to pay for your reservation!'},
  ]

  return (
    <div className="App">

      <ResponsiveAppBar/>

      <Routes>
        <Route path='/'/>
        <Route path='/schedule' element={<Schedule/>}/>
      </Routes>

      <header className="App-header">

        <h1> RENT WHOLE CAFE! </h1>

        <a href='/schedule'> <button className='btn2'> RENT VENUE </button> </a>

        <br></br>

        <div className='CARDS'>
          {iCard.map((item, i)=>
            <Card key={i} title={item.title} image={item.image} description={item.description}/>
          )}
        </div>

      </header>
    </div>
  );
}

export default App;
