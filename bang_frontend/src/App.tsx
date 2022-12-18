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
import { Payment } from '@mui/icons-material';
import VeneuReservations from './components/pages/VenueReservations';
import ViewRoom from './components/pages/Admin/ViewRoom';
import AddRoom from './components/pages/Admin/AddRoom';
import AdminLogin from './components/pages/Admin/AdminLogin';


function App() {

  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<SignUpSide/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/paymentmain' element={<PaymentMain/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/roommenu' element={<RoomMenu/>}/>
        <Route path='/rent' element={<Rent/>}/>
        <Route path='/schedule' element={<Schedule/>}/>
        <Route path='/venues' element={<VeneuReservations/>}/>
        <Route path='/mealsmenu' element={<MealsMenu/>}/>
        <Route path='/foodmainmenu' element={<FoodMainMenu/>}/>
        <Route path='/fingerfoodmenu' element={<FingerFoodMenu/>}/>
        <Route path='/drinksmenu' element={<DrinksMenu/>}/>
        <Route path='/roomchoices' element={<RoomChoices/>}/>
        <Route path='/addfood' element={<AdditemForm/>}/>
        <Route path='/newfood' element={<Newlyaddedfood/>}/>
        <Route path='/viewroom' element={<ViewRoom/>}/>
        <Route path='/addroom' element={<AddRoom/>}/>
        <Route path='/adminlogin' element={<AdminLogin/>}/>
      </Routes>

      <header className="App-header">

      </header>
    </div>
  );
}

export default App;