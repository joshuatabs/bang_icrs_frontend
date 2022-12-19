import '../css/create.css';
import { Component } from 'react';
import ListService from '../services/ListService';
import { Link } from "react-router-dom";
import swal from 'sweetalert';
import ResponsiveAppBar from "./ResponsiveAppBar";




class CreateReservation extends Component {
    
    constructor(props){
    super(props)

    this.state = {
        date:'',
        time:''
    }
    
    this.changeDateHandler = this.changeDateHandler.bind(this);
    this.changeTimeHandler = this.changeTimeHandler.bind(this);
    this.saveReservation = this.saveReservation.bind(this);

    }

     saveReservation = (e) =>{
        e.preventDefault();
        let reservation = {date: this.state.date, time: this.state.time};
        console.log('reservation => ' + JSON.stringify(reservation));
        ListService.createReservation(reservation)
        
        {
            swal({
                title:"Date and Time Added!",
                text: JSON.stringify(reservation),
                
                button:"OK"
            })
            
        }
        
        
     }

    changeDateHandler = (event) =>{
        this.setState({date: event.target.value});
    }
    changeTimeHandler = (event) =>{
        this.setState({time: event.target.value});
    }

    
    render() {
        return (
            <div >
                    <div className="App">
                    <ResponsiveAppBar />
                    <br></br>
                        <div className='App-header'>
                            <div className="card col-md-5 offset-md-0 offset-md-0">
                            <h1 className="text-center"> Reserve a PC</h1>
                                <div className="card-body">
                                
                                    <form>
                                        <div className="form-group">
                                            <label>Date:</label>
                                            <input
                                            
                                                type ='date'
                                                placeholder='Date' 
                                                name="date" 
                                                className='form-control'
                                                value={this.state.date} 
                                                onChange={this.changeDateHandler}
                                                
                                                
                                                />
                                        </div>
                                        <div className="form-group">
                                            <label>Time:</label>
                                            <input 
                                                type ='time'
                                                placeholder='Time' 
                                                name="time" 
                                                className='form-control'
                                                value={this.state.time} 
                                                onChange={this.changeTimeHandler}/>
                                        </div>
                                            <button className='btn btn-success' onClick = {this.saveReservation} > Save</button>
                                            <Link className='btn btn-danger' to="/Dashboard" > Cancel</Link>
                                            <Link className='btn btn-success' to ="/room-reservation" > Next</Link>
                                            
                                    </form>
                                </div>
                            </div>

                        </div>
                        
                    
                     </div>
            </div>
        );
    }
}

export default CreateReservation
