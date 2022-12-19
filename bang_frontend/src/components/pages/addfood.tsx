import { Button, Card} from "@mui/material";
import '../css/Rian.css';
import { useRef } from "react";
import axios from "axios";



export default function AdditemForm() {
    const nameRef = useRef<HTMLInputElement|null>(null);
    const descRef = useRef<HTMLInputElement|null>(null);

    const addFood = async () => {
        axios.post('http://localhost:8080/food/postFood',
        {
          name: nameRef.current?.value + "",
          description: descRef.current?.value + "",
          price: 30.0,
        }).then(res => {
          console.log(res.data)
        }).catch(err => console.log(err))
        alert('Food added successfully!')

    }
    return (
        <div style={{
            backgroundColor: "#5f8ab8",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            
          
        }}>
        
            <Card sx={{ height: 700,minWidth: '700px', backgroundColor: '#5f8ab8', borderRadius: '25px', alignItems: 'center'}} style={{marginTop: '80px'}}>
                <div style={{ backgroundColor: "#5f8ab8", margin: "25px", paddingRight: '5px', paddingTop: '5px', borderRadius: '20px', maxWidth: '700px' }}>
                    <div style={{ padding: '15px', fontSize: '20px' }}>Food Name</div>
                    <input id="standard-basic"   ref={nameRef}></input>
                </div>

                <div style={{ backgroundColor: "#5f8ab8", margin: "25px", paddingRight: '5px', paddingTop: '5px', borderRadius: '20px' }}>
                    <div style={{ padding: '15px', fontSize: '20px' }}>Description</div>
                    <input id="standard-basic" ref={descRef}></input>
                </div>
                <Button variant="contained" sx={{backgroundColor: '#3b5673', minWidth: '200px', minHeight: '50px'}} onClick={()=>addFood()}>Add Item</Button>
            </Card>
        </div>   

            );

}