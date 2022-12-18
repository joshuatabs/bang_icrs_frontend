import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export interface CardDetails{
    title: string;
    image: string;
    description: string;
}

export default function AboutCard(props:CardDetails) {
  return (
    <Card variant="elevation" sx={{ maxWidth: 220, textAlign: 'left', marginBottom:'1rem', marginRight: '1rem', width: 200, height: 300}}>
      <CardMedia
        component="img"
        height="150"
        image={props.image}
        alt="image"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" sx={{textAlign: 'center'}}>
          {props.title}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{textAlign: 'center'}}>
         {props.description}
        </Typography>
      </CardContent>
    </Card> 
  );
}