import '../css/Rian.css';
import { Button} from '@mui/material';
import ResponsiveAppBar from '../global/navbar';
import Card, { MainMenuCardDetails } from '../global/MainMenuFoodCard';





const FoodMenu:MainMenuCardDetails[] = [
  {title:'Finger Foods', image:'/static/images/Fingerfoods/chips.png', description:'Easy to eat so that you can focus on your work, perfect for gamers!'},
  {title:'Meals', image:'/static/images/Meals/sisig.png', description:'Meals entirely set to make you fill up your hunger bar!'},
  {title:'Drinks', image:'/static/images/Drinks/coke.png', description:'Feeling thirsty while gaming? Clench your thirst with drinks!'},
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
        <a href='/fingerfoodmenu'><Button variant="contained" sx={{ borderRadius: 5,color: 'white', backgroundColor: 'transparent', border:4,   fontFamily: 'MontserratRoobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"', fontWeight: 'bold', bottom:50, height:70, width:275}}><h1>Explore Menu</h1></Button></a>

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
