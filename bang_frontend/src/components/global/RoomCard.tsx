import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import { IconButton, Stack } from '@mui/material';

export interface CardDetails {
  title: string;
  image: string;
  description: string;
}

export default function iCard(props: CardDetails) {
  return (
    <Card sx={{
      borderRadius: '10%',
      maxWidth: 400,
      textAlign: 'left',
      marginBottom: '2rem',
      marginRight: '1rem',
      justifyContent: "center",
      alignItems: "center",
      width: 300,
      height: 430,
    }}>
      <br></br>
      <CardMedia
        component="img"
        height="250"

        image={props.image}
        alt="image"
      />
      <CardContent style={{ justifyContent: 'center' }}>
        <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
          {props.description}
        </Typography>
        <Stack alignItems="center">
          <IconButton aria-label="next" size="large" sx={{}}>
            <ArrowCircleRightRoundedIcon fontSize="inherit" /></IconButton>
        </Stack>
      </CardContent>
    </Card>
  );
}
