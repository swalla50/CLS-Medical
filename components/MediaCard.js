import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import AdminList from './Adminlist';
import '../styles/MediaCard.module.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 4000,
    overflow:'inherit',
    boxShadow: 'none',
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} style={{paddingTop:'2%', paddingBottom:'2%'}}>
      <div className='cards-container1' style={{margin: '10% auto',textAlign: '-webkit-center'}}>
      <CardActionArea style={{ maxWidth:'800px',borderRadius: '2%',boxShadow:'0 32px 20px rgb(0 0 0 / 26%)' }}>
        <CardMedia
          className={classes.media}
          image='../images/linen.jpg'
          title="Contemplative Reptile"
          style = {{borderRadius: '5px 5px 0px 0px'}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{textAlign: 'center', color: '#00338e'}}>
            Who We Are
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <div className='who-messgae' style={{textAlign:'left'}}>
              CLS Medical is a company printed from family roots. Ken Tuggle founded Medical Linen Service in 1991. He was the only employee for over 10 years until he reached a higher demand for his service. He moved the company from his home basement to Canton, Georgia.<br></br><br></br>

              Soon after the Canton move, his demand grew even higher, pushing him to move again to Woodstock, Georgia. There he formed Cherokee Linen Service, which proved to be another great step in his road to success. He grew Chreokee Linen Service to an industry leader in no time and became an icon in the linen business for Atlanta. Moving forward in the timeline, his son grew a desire to become a part of the family team. Ken felt this would be a good fit considering his son had grown up around it his entire life. In 2010, Jonathan Tuggle became a part of the sales staff and drove the client list to an all-time high. He continued to grow his father's company with the intent of taking over one day. Sooner than later, in 2011, Jonathan became the owner and CEO of Cherokee Linen Service.<br></br><br></br>

              Jonathan stayed on his path with a full head of steam growing the company to record highs while moving Cherokee Linen Service further into the lead as the most reputable linen service throughout the community. Changing the name one last time, CLS Medical was formed in 2014 to establish a company footprint in the medical field. CLS Medical moved from Woodstock, Georgia to Acworth, Georgia in March of 2014 entering the start of a fresh page for the company with a new state-of-the-art facility. The company to current date continues to provide the highest of quality product to its customers while also maintaining its outstanding customer service report throughout the state of Georgia.
            </div>
          </Typography>
        </CardContent>
      </CardActionArea>
      </div>
      <div className='cards-container2' style={{textAlign: '-webkit-center'}}>
      <CardActionArea style={{maxWidth: '800px',borderRadius: '2%',boxShadow:'0 32px 20px rgb(0 0 0 / 26%)'}}>
        <CardMedia
          className={classes.media}
          image="../images/administration.jpg"
          title="Contemplative Reptile"
          style={{borderRadius:'5px 5px 0px 0px'}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{textAlign: 'center', color: '#00338e'}}>
            Our Administration
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <AdminList/>
          </Typography>
        </CardContent>
      </CardActionArea>
      </div>
      <style jsx>{`
              .cards-container1 {
                text-align: -webkit-center;
                cursor: pointer;
              }             
            `}
            </style>
    </Card>
  );
}