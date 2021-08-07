import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import '../styles/FAQAccordion.module.css'

const useStyles = makeStyles((theme) => ({
  root: {
      paddingTop:'2%',
      paddingBottom: '5%',
      boxShadow:'none'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function FAQAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}style={{textAlign:'-webkit-center'}}>
        <div className='accoridion-wrapper'style={{width:'75%', boxShadow: '0 32px 20px rgb(0 0 0 / 26%)'}} >
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Does CLS Medial supply the linen?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          CLS Medical is happy to provide all needed linen for your facility. We will install brand
          new linen for your location and continue our service daily by continuously dropping off 
          fresh linen and picking up your soiled. The soiled linen is taken to our state-of-the-art 
          facility and laundered through our meticulous and thorough process involving our 
          industry leading commercial equipment.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Is there any account too big or too small?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          From whole hospitals to smaller doctors offices, no account is too big or too small for CLS Medical. We are happy to serve all facets of healthcare services throughout the state no matter the size of your practice.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Some linen vendors require lengthy contract. Doews CLS Medical require such contracts?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          CLS Medical believes that total customer satisfaction is the only thing that should bind vendor and 
          client. We strive to meet and exceed all client expectations with our service! Therefore, CLS Medical and 
          your location will reach an agreement of service and cost, however no lengthy contract will be required.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>If there is an emergency and our facility needs linen immediately, can CLS Medical deliver?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Without question! CLS Medical is more than prepared to handle situations such as this. 
          We treat our clients like family, therefore your needs are our needs! If an emergency 
          delivery is needed, CLS Medical will deliver what you need that day. Your staff can 
          contact our GM or other managers personally, rather than a 1-800 number.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>What is your price guarantee?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          CLS Medical guarantees to all of our potential clients that if a competitor quotes their 
          location at a lower cost than ours, we will surpass expectations at a lower cost.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Can CLS Medical deliver to our location every day?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, CLS Medical can deliver on a daily basis, Monday through Saturday! We will 
          customize a delivery schedule with you that works in accordance with your practice.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Does CLS Medical meet all national health codes and regulations?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          CLS Medical meets and surpasses all national health codes and regulations.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      </div>
      <style jsx>
        {`
          .MuiPaper-root.MuiAccordion-root.MuiAccordion-rounded.MuiPaper-elevation1.MuiPaper-rounded {
            background: #696969;
            color: white;
            border: solid #616161;
          }
              
          .MuiAccordionDetails-root {
            background: #A0A0A0;
          }
              
          .MuiButtonBase-root.MuiIconButton-root.MuiAccordionSummary-expandIcon.MuiIconButton-edgeEnd {
            color: white;
          }
        `}
      </style>
    </div>
  );
}