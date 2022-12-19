import '../css/list.css'
import { Component } from 'react';
import ReservationService from '../services/ListService.js';
import AdminResponsiveAppBar from './components/AdminResponsiveAppBar';
import swal from 'sweetalert';






export default class ListReservations extends Component {
    constructor(props){
        super(props)

        this.state = {reservations: []
        }

        this.deleteReservation = this.deleteReservation.bind(this);
       
    }
    
   
    deleteReservation(reservationid){
        ReservationService.deleteReservation(reservationid).then(res => {
            this.setState({reservations: this.state.reservations.filter(reservation => reservation.reservationid !== reservationid)});
            {
                swal({
                    title:"Success",
                    text: res.data,
                    icon:"success",
                    button:"OK!"
                })
                
            }
        });
    }
    
    
  
    
    componentDidMount(){
        ReservationService.getReservations().then((res) =>{
            this.setState({reservations:res.data})
            console.log(res.data)
        });
    
        
    }
    
    
    render() {
        
        return (
            <div className='App-header'>
                
                
                <AdminResponsiveAppBar/>
                <div className = "App">
                <h1 className = "text">Reservations Data</h1>
                    <table className="tbl" >
                        <thead>
                            
                            <tr>
                                <th>Reservation ID</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.reservations.map(
                                    reservation =>
                                    <tr key = {reservation.reservationid}>
                                            <td>{reservation.reservationid}</td>
                                            <td>{reservation.date}</td>
                                            <td>{reservation.time}</td>

                                        <td>
                                             <button onClick ={() => this.deleteReservation (reservation.reservationid)} className = "btn btn-danger" > Delete</button>
                                             
                                         </td>
                                        
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>
                
            </div>
        );
    }
    
}
