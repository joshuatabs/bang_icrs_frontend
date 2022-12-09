import '../Rian.css';
import Sidebar from '../sidebar';
import Card, { FoodCardDetails } from '../FoodCardDetails';






const Foodlist:FoodCardDetails[] = [
  {title:'Nacho Chips', image:'/static/FingerFoods/chips.png', description:'made from corn tortillas, which are cut into triangles and then fried or baked. Corn tortillas are made of nixtamalized corn,'},
  {title:'Fries', image:'/static/FingerFoods/fries.png', description:'side dish or snack typically made from deep-fried potatoes that have been cut into various shapes, especially thin strips'},
  {title:'Chicken Nuggets', image:'/static/FingerFoods/nuggets.png', description:'consisting of small pieces of deboned chicken meat that is breaded or battered, then deep-fried or baked. fillerfillerfiller'},
  {title:'Cheese Balls', image:'/static/FingerFoods/cheeseballs.png', description:' are a mixture of soft cheeses shaped into a ball about 4 inches round, refrigerated, and covered with a mixture of nuts and other crunchy ingredients.'},
  
]

const Foodlist2:FoodCardDetails[] = [
  {title:'Onion Rings', image:'/static/FingerFoods/onionring.png', description:'are made from slices of onion, or other cooking substance and deep-fried until golden-brown and served as an appetizer.'},
  {title:'Lumpia', image:'/static/FingerFoods/lumpia.png', description:'are made of thin paper-like or crepe-like pastry skin called "lumpia wrapper" enveloping savory or sweet fillings.'},
  {title:'Popcorn', image:'/static/FingerFoods/popcorn.png', description:'consists of grains of maize or corn that have been heated until they have burst and become large and light.'},
  {title:'Chicharon', image:'/static/FingerFoods/chicharon.png', description:'are pork skin cracklings that are made from pork rind and a little bit of fat. They are boiled and seasoned then deep-fried.'},
  
]

function FingerFoodMenu(){
  
  return (
    
    <div className="RianApp">

      

      <div className='Sidebar'><Sidebar></Sidebar></div>
       
      <div className='RIANCARDS'>
          {Foodlist.map((item, i)=>
            <Card key={i} title={item.title} image={item.image} description={item.description}/>
          )}
        </div>
        <div className='RIANCARDS'>
          {Foodlist2.map((item, i)=>
            <Card key={i} title={item.title} image={item.image} description={item.description}/>
          )}
        </div>
        

    </div>
  );
}

export default FingerFoodMenu;
