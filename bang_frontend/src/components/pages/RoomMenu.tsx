import '../css/Room.css';
import Card from '../global/RoomCard';
import { CardDetails } from '../global/Card';
import ResponsiveAppBar from '../global/navbar';

const RoomOptions: CardDetails[] = [
  { title: 'Private Room', image: '/static/images/Room/private.png', description: ' Get a room for yourself and away from the crowded people!' },
  { title: 'Public Room', image: '/static/images/Room/public.png', description: 'Play with other people and enjoy the vibes!' },
  { title: 'Tournament Room', image: '/static/images/Room/tournament.jpg', description: 'Compete with your friends and with other people!' },
]

function RoomMenu() {
  return (
    <div className="App">
      
      <ResponsiveAppBar/>

      <header className="App-header">
        <h1> Reserve a PC now!</h1>

        <h4>Games | Food | Experience</h4>

        <a href='/roomchoices'><button className='btn2'> Choose a Room! </button></a>

        <br></br>
        
        <div className='CARDS'>
          {RoomOptions.map((item, i) =>
            <Card key={i} title={item.title} image={item.image} description={item.description} />
          )}
        </div>
      </header>
    </div>
  );
}

export default RoomMenu;