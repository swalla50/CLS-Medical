import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function VIPCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} id='slide' style={{maxWidth:'100%'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image='./images/rockfar.png'
          title="Contemplative Reptile"
          height='300px'
          style={{borderRadius:'50%', objectFit:'contain'}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{textAlign:'left', fontSize:'30px', color:'white'}}>
            5% back guaranteed to your preferred charity each month!
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{textAlign:'left', fontSize:'18px', color:'white'}}>
          It's our mission to raise awareness and funding for as many charitable associations as possible. Alone is no way to fight the fight.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}