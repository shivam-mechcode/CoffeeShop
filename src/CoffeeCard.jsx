import React from 'react'
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import ShareIcon from '@mui/icons-material/Share';
import Typography from '@mui/material/Typography';
import { Avatar, CardMedia, IconButton } from '@mui/material';



const CoffeeCard = (props) => {
    const{avatarUrl, title, subtitle, description, imageUrl} = props
  return (
    <Card >
        <CardHeader
        avatar={
          <Avatar src={avatarUrl}/>
        }
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader={subtitle}
        />
        <CardMedia style={{height:"150px"}} image={imageUrl} />
            
      <CardContent>
        <Typography variant="body2" style={{ lineHeight: '1.5em' , height: '3em' ,overflow: 'hidden'}}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy Now</Button>
        <Button size="small">Offers</Button>
      </CardActions>
    </Card>
  );
  
}

export default CoffeeCard