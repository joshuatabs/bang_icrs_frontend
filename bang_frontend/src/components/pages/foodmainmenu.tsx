import React from 'react';
import logo from './logo.svg';
import '../Rian.css';
import { Button, Avatar} from '@mui/material';
import ResponsiveAppBar from '../navbar';
import Card, { MainMenuCardDetails } from '../MainMenuFoodCard';
import { Route, Routes } from 'react-router-dom';
import FingerFoodMenu from './FingerFoodMenu';




const FoodMenu:MainMenuCardDetails[] = [
  {title:'Finger Foods', image:'/static/Fingerfoods/chips.png', description:'Easy to eat so that you can focus on your work, perfect for gamers!'},
  {title:'Meals', image:'/static/Meals/sisig.png', description:'Meals entirely set to make you fill up your hunger bar!'},
  {title:'Drinks', image:'/static/Drinks/coke.png', description:'Feeling thirsty while gaming? Clench your thirst with drinks!'},
]



function FoodMainMenu(){
  return (
    //food main menu
    
    
    <div className="RianApp">
        <ResponsiveAppBar></ResponsiveAppBar>

        <header className="App-header">

        <h1 style={{width:700, fontFamily: 'Montserrat', fontWeight:800, fontStyle: 'bold',}}> The best gamers require the greatest meals</h1>
        <h5 style={{fontWeight:400, fontFamily: 'Montserrat'}}>Games | Food | Experience</h5>
        <br></br>
        <a href='/fingerfoodmenu'><Button variant="contained" sx={{ borderRadius: 5,color: 'white', backgroundColor: '#7289DA',  fontFamily: 'Montserrat', fontWeight: 'bold', bottom:50, height:70, width:275}}><h1>Explore Menu</h1></Button></a>

        <div className='MAINCARDS'>
          {FoodMenu.map((item, i)=>
            <Card key={i} title={item.title} image={item.image} description={item.description}/>
          )}
        </div>

      </header>
        

    </div>
  );
}

export default FoodMainMenu;
