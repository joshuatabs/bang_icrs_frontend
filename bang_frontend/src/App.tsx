import './App.css';
import ResponsiveAppBar from './components/global/navbar';
import Schedule from './components/pages/Schedule'
import {Routes, Route, Link} from 'react-router-dom'
import Rent from './components/pages/Rent';

function App() {

  return (
    <div className="App">

      <ResponsiveAppBar/>

      <Routes>
        <Route path='/'/>
        <Route path='/schedule' element={<Schedule/>}/>
      </Routes>

      <header className="App-header">
        
        <Rent/>

      </header>
    </div>
  );
}

export default App;
