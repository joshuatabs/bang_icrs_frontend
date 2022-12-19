import '../../css/Room.css';
import AdminNavbar from '../../global/AdminNavbar';
import axios from 'axios';
import { useEffect, useState } from 'react';
import '../../css/Admin.css';

function ViewRoom() {

  const GET_URL = 'http://localhost:8080/room/getAllRoom';
  const DELETE_URL = 'http://localhost:8080/room/deleteRoom/';
  const UPDATE_URL = 'http://localhost:8080/room/putRoom?roomid=';

  useEffect(() => {

      setRooms([]);
      GetRooms();

  }, []);

  const [room, setRooms] = useState([{
      roomid: '',
      code: '',
      floor: '',
  }]);

  const Recall = () =>{
      window.location.reload();
  }

  const GetRooms = async () => {

      const res = await axios.get(GET_URL);

      if (res.data) {
          setRooms(res.data)
          console.log(res.data)
      }
  }

  const DeleteRoom = async (room_id: string) => {

      const res = await axios.delete(DELETE_URL + '' + room_id);

      if (res.data) {
          alert(res.data)
          Recall();
      } else {
          alert("Failed to Delete Data");
      }

      Recall();

  }

  const UpdateRoom = async (room_id: string) => {

      console.log(code)
      console.log(room_id)

      const floor = prompt('Enter New Floor');
      const code = prompt('Enter New Code');

      if (floor !== '') {

          axios
              .put(UPDATE_URL + '' + room_id, {
                code,
                floor,
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

                          {room.map((room, i) =>

                              <tr key={i}>
                                  <td>{room.roomid}</td>
                                  <td>{room.code}</td>
                                  <td>{room.floor}</td>
                                  <td><button className='btn3' onClick={() => UpdateRoom(room.roomid)}>EDIT</button></td>
                                  <td><button className='btn3' onClick={() => DeleteRoom(room.roomid)}>DELETE</button></td>
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
