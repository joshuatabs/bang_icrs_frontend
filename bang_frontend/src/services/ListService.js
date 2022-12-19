import axios from 'axios';

const LISTRESERVATION_API_BASE_URL = "http://localhost:8080/reservation/getAllReservations";
const GETUSER_API_BASE_URL = "http://localhost:8080/user/getAllUsers";
const GETROOM_API_BASE_URL = "http://localhost:8080/room/getAllRoom";
const CREATERESERVATION_API_BASE_URL = "http://localhost:8080/reservation/postReservations";
const CREATEUSER_API_BASE_URL = "http://localhost:8080/user/postUser";
const DELETERESERVATION_API_BASE_URL = "http://localhost:8080/reservation/deleteReservation";
const DELETEUSER_API_BASE_URL = "http://localhost:8080/user/deleteUser";
const GETRESERVATIONBYID_API_BASE_URL = "http://localhost:8080/reservation/getByReservationid";


class ReservationService{
    getReservations(){
        return axios.get(LISTRESERVATION_API_BASE_URL);
    }
    getRoom(){
        return axios.get(GETROOM_API_BASE_URL);
    }
    
    createReservation(reservation){
        return axios.post(CREATERESERVATION_API_BASE_URL, reservation);
    }
    deleteReservation(reservationid){
        return axios.delete(DELETERESERVATION_API_BASE_URL + '/' + reservationid);
    }
    getReservationById(reservationid){
        return axios.put(GETRESERVATIONBYID_API_BASE_URL + '/' + reservationid)
    }

    createUser(user){
        return axios.post(CREATEUSER_API_BASE_URL, user);
    }



    getUsers(){
        return axios.get(GETUSER_API_BASE_URL);
    }
    deleteUser(userid){
        return axios.delete(DELETEUSER_API_BASE_URL + '/' + userid);
    }
        
    
}

export default new ReservationService()
