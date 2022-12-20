import './App.css';
import Schedule from './components/pages/Schedule'
import { Routes, Route } from 'react-router-dom'
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
import ManageRoom from './components/pages/Admin/ManageRoom';
import AdminLogin from './components/pages/Admin/AdminLogin';
import AboutUs from './components/pages/AboutUs';
import { useMemo, useState } from 'react';
import LandingPage from './components/pages/LandingPage';
import AdminMenu from './components/pages/Admin/AdminMenu';
import Footer from './components/pages/Footer';
import { UserContext } from './UserContext';

function App() {

  const [user, setUser] = useState([{}]);

  return (
    <div className="App">

      <UserContext.Provider value={[{user, setUser}]}>

        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUpSide />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/paymentmain' element={<PaymentMain />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/roommenu' element={<RoomMenu />} />
          <Route path='/rent' element={<Rent />} />
          <Route path='/schedule' element={<Schedule />} />
          <Route path='/venues' element={<VeneuReservations />} />
          <Route path='/mealsmenu' element={<MealsMenu />} />
          <Route path='/foodmainmenu' element={<FoodMainMenu />} />
          <Route path='/fingerfoodmenu' element={<FingerFoodMenu />} />
          <Route path='/drinksmenu' element={<DrinksMenu />} />
          <Route path='/roomchoices' element={<RoomChoices />} />
          <Route path='/addfood' element={<AdditemForm />} />
          <Route path='/newfood' element={<Newlyaddedfood />} />
          <Route path='/manageroom' element={<ManageRoom />} />
          <Route path='/adminlogin' element={<AdminLogin />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/adminmenu' element={<AdminMenu />} />
        </Routes>

      </UserContext.Provider>

      <footer className='footer'>

        <Footer/>

      </footer>

    </div>
    
  );
}

export default App;