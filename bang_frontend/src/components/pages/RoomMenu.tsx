import '../css/Room.css';
import { Button } from '@mui/material';
import Card from '../global/RoomCard';
import { CardDetails } from '../global/Card';

const RoomOptions: CardDetails[] = [
  { title: 'Private Room', image: '/static/images/Room/private.png', description: ' Get a room for yourself and away from the crowded people!' },
  { title: 'Public Room', image: '/static/images/Room/public.png', description: 'Play with other people and enjoy the vibes!' },
  { title: 'Tournament Room', image: '/static/images/Room/tournament.jpg', description: 'Compete with your friends and with other people!' },
]

function RoomMenu() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ width: 600, fontFamily: 'Montserrat', fontWeight: 600, fontStyle: 'bold', }}> Reserve a PC now!</h1>
        <h5 style={{ fontWeight: 400, fontFamily: 'Montserrat' }}>Games | Food | Experience</h5>
        <br></br>
        <Button variant="contained" sx={{ borderRadius: 4, color: 'white', backgroundColor: '#7289DA', right: 10, fontFamily: 'Montserrat', fontWeight: 'bold', bottom: 50, height: 70, width: 300 }}><h1>Choose a Room!</h1></Button>
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
