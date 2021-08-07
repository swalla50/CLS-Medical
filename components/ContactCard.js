import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import '../styles/ContactCard.module.css';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} id='contactslide'variant="outlined" style={{boxShadow: '0 32px 20px rgb(0 0 0 / 26%)', borderRadius: '20px', padding:'15px'}} >
      <CardContent>
        <Typography  variant='h2' component='h2' gutterBottom style={{color:'#6685bb'}}>
          Contact Us
        </Typography>
        <Divider style ={{height: '2px', color:'#6685bb'}}/>
        <Typography variant="body2" component="p" color="textSecondary">
          Address: <br></br> 7040 Battle Dr NW Suite 150 Kennesaw, GA 30152<br/><br/>
        </Typography>
        <Typography  variant='body2' component= 'p'color="textSecondary">
          Phone: <br></br> 770-355-5588<br/><br/>
        </Typography>
        <Typography variant="body2" component="p" color="textSecondary">
          Email: <br/> doscarson.cls@gmail.com<br/><br/>
        </Typography>
      </CardContent>
      <Divider style ={{height: '2px', color:'#6685bb'}}/>
      <Typography variant='body1' component="h3" style={{fontWeight:'bold', paddingTop: '5px'}}>
          Feel free to contact us with any questions!
        </Typography>
    </Card>
  );
}