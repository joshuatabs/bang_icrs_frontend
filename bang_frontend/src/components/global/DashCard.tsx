import { Button, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import '../css/DashCard.css'

export interface CardDetails {
  title: string;
  image: string;
  description: string;
  link: string;
}

export default function DashCard(props: CardDetails) {
  return (

    <a href={props.link}>
      <Card sx={{ borderRadius: '10%', maxWidth: 345, textAlign: 'left', marginBottom: '1rem', marginRight: '1rem', width: 300, height: 400, boxShadow: 'invert' }} className='card'>
        <CardMedia
          component="img"
          height="240"
          image={props.image}
          alt="image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
            {props.description}
          </Typography>
        </CardContent>
        <CardActions>
        </CardActions>
      </Card>
    </a>
  );
}