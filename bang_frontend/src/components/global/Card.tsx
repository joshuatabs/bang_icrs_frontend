import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export interface CardDetails{
    title:string;
    image: string;
    description: string;
}

export default function iCard(props:CardDetails) {
  return (
    <Card sx={{ borderRadius:'10%', maxWidth: 345, textAlign: 'left', marginBottom:'1rem', marginRight: '1rem', width: 300, height: 400, boxShadow:'invert'}}>
      <CardMedia
        component="img"
        height="240"
        image={props.image}
        alt="image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{textAlign: 'center'}}>
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{textAlign: 'center'}}>
         {props.description}
        </Typography> 
      </CardContent>
    </Card>
  );
}
