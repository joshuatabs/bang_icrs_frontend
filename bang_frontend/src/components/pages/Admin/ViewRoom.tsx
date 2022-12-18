import '../../css/Room.css';
import AdminNavbar from '../../global/AdminNavbar';
import axios from 'axios';
import { useEffect, useState } from 'react';
import '../../css/Admin.css';

function ViewRoom() {

  const GET_URL = 'http://localhost:8080/venue/getVenues';
  const DELETE_URL = 'http://localhost:8080/venue/deleteVenue/';
  const UPDATE_URL = 'http://localhost:8080/payment/updatePayment?paymentID=';

  useEffect(() => {

      setVenues([]);
      GetVenues();

  }, []);

  const [venues, setVenues] = useState([{
      roomid: '',
      roomtype: '',
      floor: '',
  }]);

  const Recall = () =>{
      window.location.reload();
  }

  const GetVenues = async () => {

      const res = await axios.get(GET_URL);

      if (res.data) {
          setVenues(res.data)
          console.log(res.data)
      }
  }

  const DeleteVenue = async (room_id: string) => {

      const res = await axios.delete(DELETE_URL + '' + room_id);

      if (res.data) {
          alert(res.data)
          Recall();
      } else {
          alert("Failed to Delete Data");
      }

      Recall();

  }

  const UpdateVenue = async (roomtype: string, room_id: string) => {

      console.log(roomtype)
      console.log(room_id)

      const amount = prompt('Enter New Value');

      if (amount !== '') {

          axios
              .put(UPDATE_URL + '' + room_id, {
                roomtype,
                amount,
              })
              .then(res => {
                  if (res.data) {
                      alert("Successfully Rented!" + JSON.stringify(res.data));
                  }
              })
              .catch(err => {
                  console.log(err)
              })
      }

      Recall();
  }

  return (
      <div className="App">
              <AdminNavbar/>

          <header className="App-header">

              <br></br>

              <div className='table'>

                  <table className='tbl'>

                      <tbody>

                          <tr>
                              <th>Room ID</th>
                              <th>Room Type</th>
                              <th>Floor</th>
                              <th colSpan={2}>Manage</th>
                          </tr>

                          {venues.map((venue, i) =>

                              <tr key={i}>
                                  <td>{venue.roomid}</td>
                                  <td>{venue.roomtype}</td>
                                  <td>{venue.floor}</td>
                                  <td><button className='btn3' onClick={() => UpdateVenue(venue.roomtype, venue.floor)}>EDIT</button></td>
                                  <td><button className='btn3' onClick={() => DeleteVenue(venue.roomid)}>DELETE</button></td>
                              </tr>

                          )}
                      </tbody>
                  </table>

              </div>

          </header>
      </div>
  );
}

export default ViewRoom;
