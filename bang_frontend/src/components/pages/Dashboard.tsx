import ResponsiveAppBar from '../Components/TopNav';
import Card, { CardDetails } from '../Components/TheCard';
import { Button } from '@mui/material';

export default function Dashboard() {

  const iCard:CardDetails[] = [
    {title:'Rent a PC', image:'images/pc_room.jpg', description:'Reserve your PC now and choose where you want to play.'},
    {title:'Bang! Cafe', image:'images/dark_cafe.jpg', description:'Feeling Hungry? Grab a bite and explore the Cafe menu.'},
    {title:'Tournament Mode', image:'images/tournament.jpg', description:'Rent the whole Venue for your tournament needs. Ready Set Play!'},
  ]

  return (
    <div className="App">
      <ResponsiveAppBar/>
      <header className="App-header">
        <h1> WELCOME TO BANG! </h1>
        <h3> Reserve a PC Now! </h3>
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
