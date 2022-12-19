import '../css/Rian.css';
import Card, { FoodCardDetails } from '../global/FoodCardDetails';
import Sidebar from '../global/sidebar';


const Foodlist:FoodCardDetails[] = [
  {title:'Nacho Chips', image:'/static/images/FingerFoods/chips.png', description:'made from corn tortillas, which are cut into triangles and then fried or baked. Corn tortillas are made of nixtamalized corn,', id: 0},
  {title:'Fries', image:'/static/images/FingerFoods/fries.png', description:'side dish or snack typically made from deep-fried potatoes that have been cut into various shapes, especially thin strips', id: 0},
  {title:'Chicken Nuggets', image:'/static/images/FingerFoods/nuggets.png', description:'consisting of small pieces of deboned chicken meat that is breaded or battered, then deep-fried or baked. fillerfillerfiller', id: 0},
  {title:'Cheese Balls', image:'/static/images/FingerFoods/cheeseballs.png', description:' are a mixture of soft cheeses shaped into a ball about 4 inches round, refrigerated, and covered with a mixture of nuts and other crunchy ingredients.', id: 0},
  
]

const Foodlist2:FoodCardDetails[] = [
  {title:'Onion Rings', image:'/static/images/FingerFoods/onionring.png', description:'are made from slices of onion, or other cooking substance and deep-fried until golden-brown and served as an appetizer.', id: 0},
  {title:'Lumpia', image:'/static/images/FingerFoods/lumpia.png', description:'are made of thin paper-like or crepe-like pastry skin called "lumpia wrapper" enveloping savory or sweet fillings.', id: 0},
  {title:'Popcorn', image:'/static/images/FingerFoods/popcorn.png', description:'consists of grains of maize or corn that have been heated until they have burst and become large and light.', id: 0},
  {title:'Chicharon', image:'/static/images/FingerFoods/chicharon.png', description:'are pork skin cracklings that are made from pork rind and a little bit of fat. They are boiled and seasoned then deep-fried.' , id: 0},
  
]

function FingerFoodMenu(){
  
  return (
    
    <div className="RianApp">

      <div className='Sidebar'><Sidebar></Sidebar></div>
       
      <div className='RIANCARDS'>
          {Foodlist.map((item, i)=>
            <Card key={i} id={item.id} title={item.title} image={item.image} description={item.description}/>
          )}
        </div>
        <div className='RIANCARDS'>
          {Foodlist2.map((item, i)=>
            <Card key={i}  id={item.id} title={item.title} image={item.image} description={item.description}/>
          )}
        </div>
        
    </div>
  );
}

export default FingerFoodMenu;
