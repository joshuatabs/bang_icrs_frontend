import '../css/Rian.css';
import Sidebar from '../global/sidebar';


import Card, { FoodCardDetails } from '../global/FoodCardDetails';


const Foodlist:FoodCardDetails[] = [
  {title:'Sisig', image:'/static/images/Meals/sisig.png', description:'a Filipino dish made from parts of a pigs face and belly and chicken liver which is usually seasoned with calamansi onions and chili peppers', id: 0},
  {title:'Jjampong', image:'/static/images/Meals/jjampong.png', description:'noodle soup with red, spicy seafood- or pork-based broth flavored with gochugaru. Tasty and Delicious!. Originated in South-Korea', id: 0},
  {title:'Sizzling Steak', image:'/static/images/Meals/sizzlingsteak.png', description:'a cut of steak that has been thinly sliced. The most common cuts made into sizzle steak are top round and sirloin', id: 0},
  {title:'Fried Chicken', image:'/static/images/Meals/friedchicken.png', description:'a dish consisting of chicken pieces that have been coated with seasoned flour or batter and pan-fried, deep fried, pressure fried, or air fried.', id: 0},
  
]

const Foodlist2:FoodCardDetails[] = [
  {title:'Baconsilog', image:'/static/images/Meals/baconsilog.png', description:'A combination of both eggs and strips of bacon, commonly served during breakfast it is one way to satiate one’s hunger', id: 0},
  {title:'Burger Steak', image:'/static/images/Meals/burgersteak.png', description:'made of flavorful burger patties that are smothered in a rich and luxurious mushroom gravy sauce. Yummy and Delicious!', id: 0},
  {title:'Pancit Canton', image:'/static/images/Meals/pancitcanton.png', description:'a type of Lo Mein or tossed noodles known as flour sticks. This dish is often served during birthdays and special occasions to symbolize long life.', id: 0},
  {title:'Barbecue', image:'/static/images/Meals/bbq.png', description:'composed of thinly sliced pork pieces that are marinated in a special mixture of seasonings and spices.', id: 0},
  
]

function MealsMenu(){
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
            <Card key={i} id={item.id} title={item.title} image={item.image} description={item.description}/>
          )}
        </div>
        

    </div>
  );
}

export default MealsMenu;
