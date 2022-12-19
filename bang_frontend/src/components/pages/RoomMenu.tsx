import '../css/room.css';
import ResponsiveAppBar from '../global/navbar';
import Card, { CardDetails } from '../global/Card';

export default function RoomMenu() {

  const RoomCard:CardDetails[] = [
    { title: 'Private Room', image: '/static/images/Room/private.png', description: ' Get a room for yourself and away from the crowded people!' },
    { title: 'Public Room', image: '/static/images/Room/public.png', description: 'Play with other people and enjoy the vibes!' },
    { title: 'Tournament Room', image: '/static/images/Room/tournament.jpg', description: 'Compete with your friends and with other people!' },
  ]

  return (
    <div className="App">
      
      <ResponsiveAppBar/>

      <header className="App-header">
        <h1> RESERVE A PC NOW!</h1>

        <a href='/roomchoices'><button className='btn2'> Choose a Room! </button></a>

        <br></br>
        
        <div className='CARDS'>
          {RoomCard.map((item, i) =>
            <Card key={i} title={item.title} image={item.image} description={item.description} />
          )}
        </div>
      </header>
    </div>
  );
}
