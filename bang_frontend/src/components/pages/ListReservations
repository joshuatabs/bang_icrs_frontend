import React, { Component } from 'react';
import ReservationService from '../services/ListService.js';

class ListReservations extends Component {
    constructor(props){
        super(props);
        this.state = {reservations: []}
    }

    componentDidMount(){
        ReservationService.getReservations().then((res) =>{
            this.setState({reservations:res.data})
        });
    
        
    }
    render() {
        return (
            <div>
                
                <h2 className = "App">Reservation List</h2>
                
                <div className = "App">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Reservation ID</th>
                                <th>Room ID</th>
                                <th>Date</th>
                                <th>Time</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.reservations.map(
                                    reservation =>
                                    <tr key = {reservation.id}>
                                            <td>{reservation.id}</td>
                                            <td>{reservation.roomId}</td>
                                            <td>{reservation.date}</td>
                                            <td>{reservation.time}</td>
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

export default ListReservations;
