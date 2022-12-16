import '../css/Rian.css';
import Sidebar from '../global/sidebar';
import Card, { FoodCardDetails } from '../global/FoodCardDetails';

const Foodlist:FoodCardDetails[] = [
  {title:'Coca Cola', image:'/static/images/Drinks/coke.png', description:'is a cold and carbonated soft drink manufactured by the Coca-Cola Company, Good to go with your food and meals. Try not to drink too much of it though! Helps keep you alert since it has caffeine'},
  {title:'Sprite', image:'/static/images/Drinks/Sprite.png', description:'lemon and lime-flavored soft drink created by The Coca-Cola Company. an alternative to coca cola this drink is also tasty and refreshing! Helps keep you alert since it has caffeine'},
  {title:'Bottled Water', image:'/static/images/Drinks/water.png', description:'You can never go wrong with a bottle of water! comes from surface and ground sources and is treated to levels that that meet state and federal standards for consumption.'},
  {title:'Iced Tea', image:'/static/images/Drinks/icedtea.png', description:'a form of cold tea. Though it is usually served in a glass with ice, it can refer to any tea that has been chilled or cooled. It may be sweetened with sugar or syrup. '},
  
]

const Foodlist2:FoodCardDetails[] = [
  {title:'Iced Coffee', image:'/static/images/Drinks/icedcoffee.png', description:'a coffee beverage served cold. It may be prepared either by brewing coffee normally and then serving it over ice or in cold milk, or by brewing the coffee cold.'},
  {title:'Milkshake', image:'/static/images/Drinks/milkshake.png', description:'is a sweet beverage made by blending milk, ice cream, and flavorings or sweeteners such as butterscotch, caramel sauce, chocolate syrup, fruit syrup,'},
  {title:'Beer', image:'/static/images/Drinks/beer.png', description:'the most widely consumed alcoholic drink in the world. carbonated, fermented alcoholic beverage that is usually made from malted cereal grain. Always Drink Responsibly!'},
  {title:'Hot Coffee', image:'/static/images/Drinks/hotcoffee.png', description:'a drink prepared from roasted coffee beans. Darkly colored, bitter, and slightly acidic, helps you stay awake while gaming. Coffee is always the best alarm clock'},
  
]

function DrinksMenu(){
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

export default DrinksMenu;
