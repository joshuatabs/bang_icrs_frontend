import axios from 'axios';
import '../css/Schedule.css';
import ResponsiveAppBar from '../global/navbar';

function Schedule() {

  const NEW_URL = 'http://localhost:8080/venue/newVenue';

  const Rent = async (amount: string, duration:string) => {

    axios
      .post(NEW_URL, {
        amount,
      })
      .then(res => {

        if (res.data) {

          alert("Successfully Rented!");

          alert("Reservation Details:"
                +"\n  Date of Reservation: "+res.data.date
                +"\n  Reservation Type: "+res.data.payment.type
                +"\n  Duration: "+duration
                +"\n  Total Amount Paid: PHP"+res.data.payment.amount);

          alert("You will be contacted for further informations about your reservation via email!"+
                "\nThank you!");

        console.log(res.data)

        }

      })
      .catch(err => {
        console.log(err)
      })

  }

  return (
    <div className="App">

      <ResponsiveAppBar />

      <header className="App-header">

        <h1> SELECT RENT DURATION </h1>

        <div className='choices1'>
          <button onClick={() => Rent('4499', '1 day')} className='btn'>1 Day</button>
          <button onClick={() => Rent('8799', '2 days')} className='btn'>2 Days</button>
        </div>

        <div className='choices2'>
          <button onClick={() => Rent('13349', '3 days')} className='btn'>3 Days</button>
          <button onClick={() => Rent('17899', '4 days')} className='btn'>4 Days</button>
        </div>

        <div className='choices3'>
          <button onClick={() => Rent('21000', '5 days')} className='btn'>5 Days</button>
          <button onClick={() => Rent('25000', '6 days')} className='btn'>6 Days</button>
        </div>

        <div>
          <button onClick={() => Rent('3000', '7 days')} className='btn'>7 Days</button>
        </div>

        <br></br>

      </header>
    </div>
  );
}

export default Schedule;
