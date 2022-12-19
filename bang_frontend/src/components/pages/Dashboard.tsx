import ResponsiveAppBar from '../global/navbar';
import Card, { CardDetails } from '../global/DashCard';

export default function Dashboard() {

  const iCard:CardDetails[] = [
    {title:'Reserve PC', image:'/static/images/Dashboard/pc_room.jpg', description:'Reserve your PC now and choose where you want to play.', link:'/roommenu'},
    {title:'Tournament Mode', image:'/static/images/Dashboard/tournament.jpg', description:'Rent the whole Venue for your tournament needs. Ready Set Play!', link:'/rent'},
    {title:'Bang! Cafe', image:'/static/images/Dashboard/dark_cafe.jpg', description:'Feeling Hungry? Grab a bite and explore the Cafe menu.', link:'/foodmainmenu'},
  ]

  return (
    <div className="App">
      <ResponsiveAppBar/>
      <header className="App-header">
        <h1> WELCOME TO BANG! </h1>
        <br></br>
        <div className='CARDS'> 
          {iCard.map((item, i)=>
            <Card key={i} title={item.title} image={item.image} description={item.description} link={item.link}/>
          )}
        </div>
      </header>
    </div>
  );
}
