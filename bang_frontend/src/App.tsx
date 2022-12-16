import './App.css';
import Schedule from './components/pages/Schedule'
import {Routes, Route} from 'react-router-dom'
import Rent from './components/pages/Rent';
import Login from './components/pages/Login';
import SignUpSide from './components/pages/Signup';
import Dashboard from './components/pages/Dashboard';
import PaymentMain from './components/pages/PaymentMain';
import RoomMenu from './components/pages/RoomMenu';
import MealsMenu from './components/pages/MealsMenu';
import FoodMainMenu from './components/pages/foodmainmenu';
import FingerFoodMenu from './components/pages/FingerFoodMenu';
import DrinksMenu from './components/pages/DrinksMenu';
import RoomChoices from './components/pages/RoomChoices';
import Newlyaddedfood from './components/pages/newlyaddedfood';
import AdditemForm from './components/pages/addfood';


function App() {

  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<SignUpSide/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/paymentmain' element={<PaymentMain/>}/>
        <Route path='/roommenu' element={<RoomMenu/>}/>
        <Route path='/rent' element={<Rent/>}/>
        <Route path='/schedule' element={<Schedule/>}/>
        <Route path='/mealsmenu' element={<MealsMenu/>}/>
        <Route path='/foodmainmenu' element={<FoodMainMenu/>}/>
        <Route path='/fingerfoodmenu' element={<FingerFoodMenu/>}/>
        <Route path='/drinksmenu' element={<DrinksMenu/>}/>
        <Route path='/roomchoices' element={<RoomChoices/>}/>
        <Route path='/addfood' element={<AdditemForm/>}/>
        <Route path='/newfood' element={<Newlyaddedfood/>}/>
      </Routes>

      <header className="App-header">

      </header>
    </div>
  );
}

export default App;