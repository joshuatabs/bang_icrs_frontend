import axios from 'axios';
import { useEffect, useState } from 'react';
import '../css/reservations.css';
import ResponsiveAppBar from '../global/navbar';

function VeneuReservations() {

    const GET_URL = 'http://localhost:8080/venue/getVenues';
    const DELETE_URL = 'http://localhost:8080/venue/deleteVenue/'

    const [venues, setVenues] = useState([{
        venueid: '',
        date: '',
        payment: {
            type: '',
            amount: '',
            paymentid: 0,
            createDate: ''
        }
    }]);

    useEffect(() => {

        setVenues([]);
        GetVenues();

    }, []);

    const GetVenues = async () => {

        const res = await axios.get(GET_URL);

        if (res.data) {
            setVenues(res.data)
            console.log(res.data)
        }
    }

    const DeleteVenue = async (venue_id: string) => {

        const res = await axios.delete(DELETE_URL + '' + venue_id);

        if (res.data) {
            alert(res.data)
        } else {
            alert("Failed to Delete Data");
        }

    }

    return (
        <div className="App">

            <header className="App-header">

                <br></br>

                <div className='table'>

                    <table className='tbl'>

                        <tbody>

                            <tr>
                                <th>Rent ID</th>
                                <th>Reservation Type</th>
                                <th>Amount Paid</th>
                                <th>Date Added</th>
                            </tr>

                            {venues.map((venue, i) =>

                                <tr key={i}>
                                    <td>{venue.venueid}</td>
                                    <td>{venue.payment.type}</td>
                                    <td>{venue.payment.amount}</td>
                                    <td>{venue.date}</td>
                                    <td><a href='/venues'><button className='btn3' onClick={() => DeleteVenue(venue.venueid)}>DELETE</button></a></td>
                                </tr>

                            )}
                        </tbody>
                    </table>

                </div>

            </header>
        </div>
    );
}

export default VeneuReservations;
