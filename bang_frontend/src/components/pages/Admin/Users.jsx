import '../css/reservation.css'
import React, { Component } from 'react';
import ReservationService from '../services/ListService.js';
import { Link} from "react-router-dom";
import swal from 'sweetalert';




class Users extends Component {
    constructor(props){
        super(props)

        this.state = {users: []
        }
        this.deleteUser = this.deleteUser.bind(this);
       
    }

    

    deleteUser(userid){
        ReservationService.deleteUser(userid).then(res => {
            this.setState({users: this.state.users.filter(user => user.userid !== userid)});
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
        ReservationService.getUsers().then((res) =>{
            this.setState({users:res.data})
            
        });
    
        
    }

    
    render() {
        
        return (
            <div className='App-header'>
                <h1 className = "text-center">Registered Users</h1>
                <Link className='btn btn-primary' to="/List">List Reservations</Link>
                <div className = "App-header">
                    <table className="tbl" >
                        <thead>
                            <tr>
                                <th>User ID</th>
                                <th>Username</th>
                                <th>Password</th>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.users.map(
                                    user =>
                                    <tr key = {user.userid} >
                                            <td>{user.userid}</td>
                                            <td>{user.username}</td>
                                            <td>{user.password}</td>
                                            <td>{user.firstname}</td>
                                            <td>{user.lastname}</td>
                                            <td>{user.email}</td>
                                            <td>
                                               
                                                <button onClick ={() => this.deleteUser (user.userid)} className = "btn btn-danger" style = {{marginLeft:"10px"}}> Delete</button>
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

export default Users;
