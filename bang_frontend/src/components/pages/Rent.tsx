import '../css/Rent.css';
import Card, { CardDetails } from '../global/Card';
import ResponsiveAppBar from '../global/navbar';

function Rent() {

  const iCard:CardDetails[] = [
    {title:'Broadcasting PC', image:'/static/images/rentscreen/Broadcast.jpg', description:'Reserve a Broadcasting PC for streaming!'},
    {title:'Select Schedule', image:'/static/images/rentscreen/eCafe.jpg', description:'Schedule the date of reserving the whole venue!'},
    {title:'Payment Methods', image:'/static/images/rentscreen/pay.jpg', description:'Select supported payment methods to pay for your reservation!'},
  ]

  return (
    <div className="App">

      <ResponsiveAppBar/>

      <header className="App-header">

        <h1> RENT WHOLE CAFE! </h1>

        <a href='/schedule'> <button className='btn2'> RENT VENUE </button> </a>

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

export default Rent;
