import '../css/Rian.css';
import Sidebar from '../global/sidebar';
import Card from '../global/FoodCardDetails';
import axios from 'axios';
import { useEffect, useState } from 'react';




export interface NewFoodCardDetails{
    title: string;
    description: string;
    price: number;
    id: number;
}


function Newlyaddedfood() {
    const [food, setFood] = useState([{
        title: "string",
        description: "test",
        price: 0,
        id: 0,
    }]);
    useEffect(() => {

        setFood([])
        getFood()
      }, []);
    const getFood = async () => {
        axios.get('http://localhost:8080/food/getAllFood').then(res => {
            setFood([])
            if(res.data){
                setFood(res.data)
            }
            console.log(res.data)
        }).catch(err => console.log(err))
    }
    return (

        <div className="RianApp">



            <div className='Sidebar'><Sidebar></Sidebar></div> 
            <div className='RIANCARDS'>
                {food.map((item, i) =>
                    <Card key={i} id={item.id} title={item.title} image={'/static/Drinks/coke.png'} description={item.description} />
                )}
            </div>
            <div className='RIANCARDS'>
                {food.map((item, i) =>
                    <Card key={i}  id={item.id} title={item.title} image={'/static/Drinks/coke.png'} description={item.description} />
                )}
            </div>
            


        </div>
    );
}

export default Newlyaddedfood;
