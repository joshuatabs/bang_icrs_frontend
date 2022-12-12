import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export interface FoodCardDetails{
  title:string;
  image: string;
  description: string;
}

export function onRemove(){
  alert('Order removed!')
}

export function onOrder(){
  alert('Order added')
}

export default function FoodList(props:FoodCardDetails) {
  return (
    <Card sx={{ maxWidth: 345, marginLeft: "1rem",  top: 100, borderRadius: 5, minWidth: 345, }}>
      <CardMedia
        component="img"
        height="230"
        image = {props.image}
        alt="test"
      />
      <CardContent sx={{ color: 'white', backgroundColor: '#36393F',}}>
        <Typography gutterBottom variant="h5" component="div"  sx={{fontFamily: 'Montserrat', fontWeight: 700, }}>
        {props.title}
        </Typography>
        <Typography variant="body2" color="white" sx={{fontFamily: 'Montserrat', }}>
        {props.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ color: 'white', backgroundColor: '#36393F'}}>
        <Button variant="contained" sx={{ color: 'white', backgroundColor: '#7289DA', left: 10, fontFamily: 'Montserrat', fontWeight: 700, bottom:5 }} onClick={onOrder}>Order Now</Button>
        <Button variant="contained" sx={{ color: 'white', backgroundColor: 'red', left: 40, fontFamily: 'Montserrat', fontWeight: 700, bottom:5 }} onClick={onRemove}>Remove Order</Button>
        
      </CardActions>
    </Card>
  );
}