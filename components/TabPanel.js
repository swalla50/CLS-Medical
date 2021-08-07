import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import AirlineSeatFlatIcon from '@material-ui/icons/AirlineSeatFlat';
import PeopleIcon from '@material-ui/icons/People';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import '../styles/TabPanel.module.css';
import InteractiveList from './InteractiveList';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    marginBottom:'35px',
  },
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div tab-entire-container style={{paddingTop:'10%'}}>
    <div className={classes.root}>
      <AppBar position="static" color="default" style={{alignItems: 'center', overflowX:'hidden'}}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Linen Service" icon={<AirlineSeatFlatIcon />} {...a11yProps(0)} />
          <Tab label="Custom Delivery Options" icon={<LocalShippingIcon/>} {...a11yProps(1)} />
          <Tab label="Our Products" icon={<LocalMallIcon />} {...a11yProps(2)} />
          <Tab label="Our Clients" icon={<PeopleIcon />} {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div className='linen-message'>
          <p>
            CLS Medical will provide your facility with brand new linen purchased solely for you! 
            Our experienced and friendly delivery drivers will take care of your initial installation of linen and personally learn your account quantity needs. On a daily basis, hand-folded linen will be placed on your shelves in a neat and organized manner to ensure your linen needs be met and surpassed! 
            CLS Medical takes the time to get to know our clients, their preferences, and needs to further ensure their satisfaction with our service!
          </p>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className='delivery-message'>
          <p>
            As your linen provider, our guarantee is that you consistently have ample amounts of linen needed for your practice. On a daily basis, 
            we will delivery your requested par level of each item needed to satisfy your client load. In the field of healthcare, things can change on a dime. 
            If an extremely busy day leaves you a bit short on linen, CLS Medical is more than prepared to save the day! 
            Your office can call our management team personally and we ensure that we deliver any extra needed linen that day! 
            We offer an unmatched guarantee that any emergency deliveries will be expidited! CLS Medical allows your facility to never worry about linen again!   
          </p>
        </div>
      </TabPanel>
      <TabPanel className='product-tab' value={value} index={2}>
      <div className = 'our-products1' >
        <div className='product-message1'>
          <p>
          CLS Medical will also provide soiled linen recepticals for your facility. We also provide high-quality and very durable linen bags for your staff to easily dispose of and handle soiled linens.

          Our products are hand-folded by well-trained employees. This practice allows us to gurantee our linen to consistently be of utmost integrity and quality. On behalf of CLS Medical, we pride ourselves on our ability to guarantee that every single piece of linen provided by us will be satisfying to your facility!
          </p>
        </div>
        <div className= 'lst1'>
        <InteractiveList/>
        </div>
        </div>
        <div className = 'our-products' >
        <div className= 'lst2'>
        <InteractiveList/>
        </div>
        <div className='product-message2'>
          <p>
          CLS Medical will also provide soiled linen recepticals for your facility. We also provide high-quality and very durable linen bags for your staff to easily dispose of and handle soiled linens.

          Our products are hand-folded by well-trained employees. This practice allows us to gurantee our linen to consistently be of utmost integrity and quality. On behalf of CLS Medical, we pride ourselves on our ability to guarantee that every single piece of linen provided by us will be satisfying to your facility!
          </p>
        </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <div className = 'our-clients' >
        <div className= 'client-message'>
          <p>
            CLS Medical has been blessed with the ability to work with some of the most reputable and respectable medical facilities in the state! 
            Throughout our twenty-three years of successful business, we have had the opportunity to work with many different facets of healthcare. We are proud to say that we are highly experienced in working with:
          </p>
        </div>
          <div className = 'client-list'>
            <ul>
              <li>
                U.S. Military-Dry Cleaning and Laundry Services
              </li>
              <li>
                Plastic Surgery Centers
              </li>
              <li>
                Surgery Centers
              </li>
              <li>
                Hospitals
              </li>
              <li>
                Hospital Satellite locations
              </li>
              <li>
                Inpatient Hospice Care
              </li>
              <li>
                Endoscopy Centers
              </li>
              <li>
                OB/GYN
              </li>
              <li>
                Several different general practices
              </li>
            </ul>
        </div>
      </div>
      </TabPanel>
    </div>
    <style jsx>
      {`
        .our-products{
          display: flex;
      }
      
      .client-message{
          border: solid #707070;
          padding-bottom: 10px;
          text-align: center;
          border-right: hidden;
          border-left: hidden;
          color: black;
          border-width: 5px;
          font-size: 20px;
          box-shadow: 0 32px 20px rgb(0 0 0 / 26%);
          border-radius: 9px;
          margin-bottom: 35px;
      }
      .client-message > p{
          font-family: system-ui;
          color: #1d1d1d;
      }
      
      
      .client-list{
          padding-top: 10px;
          text-align: center;
          font-size: 25px;
      }
      
      .client-list > ul{
          list-style-type: none;
          list-style: none;
          color: black;
      
      }
      
      .linen-message{
          border: solid #707070;
          padding-bottom: 10px;
          text-align: center;
          border-right: hidden;
          border-left: hidden;
          color: black;
          border-width: 5px;
          font-size: 20px;
          box-shadow: 0 32px 20px rgb(0 0 0 / 26%);
          border-radius: 9px;
          color: #1d1d1d;
      }
      
      .linen-message > p{
          font-family: system-ui;
          color: #1d1d1d;
      }
      
      .delivery-message{
          border: solid #707070;
          padding-bottom: 10px;
          text-align: center;
          border-right: hidden;
          border-left: hidden;
          color: black;
          border-width: 5px;
          font-size: 20px;
          box-shadow: 0 32px 20px rgb(0 0 0 / 26%);
          border-radius: 9px;
      }
      .delivery-message > p{
          font-family: system-ui;
          color: #1d1d1d;
      }
      
      .product-message2{
          border: solid #707070;
          border-radius: 9px;
          padding-bottom: 10px;
          border-right: hidden;
          border-left: hidden;
          text-align: center;
          border-width: 7px;
          color: black;
          font-size: 20px;
          height: fit-content;
          width: 65%;
          box-shadow: 0 32px 20px rgb(0 0 0 / 26%);
      }
      .product-message2 > p{
          font-family: system-ui;
          color: #1d1d1d;
      }
      
      .product-message1{
          border: solid #707070;
          border-radius: 9px;
          padding-bottom: 10px;
          border-right: hidden;
          border-left: hidden;
          text-align: center;
          border-width: 7px;
          color: black;
          font-size: 20px;
          height: fit-content;
          width: 65%;
          box-shadow: 0 32px 20px rgb(0 0 0 / 26%);
      }
      .product-message1 > p{
          font-family: system-ui;
          color: #1d1d1d;
      }
      
      @media  screen and (max-width: 960px) {
          .our-products{
              display: none;
          }
          .product-message1{
              display: flex;
              font-size: 14px;
              width: 100%;
              margin-bottom: 35px;
          }
          .lst2{
              display: none;
          }
          .linen-message > p{
              font-family: system-ui;
              font-size: 14px;
              color: #1d1d1d;
          }
          .client-message > p{
              font-family: system-ui;
              font-size: 14px;
              color: #1d1d1d;
          }
          .product-message1 > p{
              font-family: system-ui;
              font-size: 14px;
              color: #1d1d1d;
          }
          .delivery-message > p{
              font-family: system-ui;
              font-size: 14px;
              color: #1d1d1d;
          }
          .client-list >ul{
              font-size:16px;
          }
      }
      
      @media  screen and (min-width: 960px) {
          .product-message1{
              display: none;
          }
          .lst1{
              display: none;
          }
          
      }
      
      .makeStyles-root-1{
          box-shadow: 0 38px 20px rgb(0 0 0 / 13%);
      }
      
      .tab-container{
          padding-inline: 15%;
          padding-bottom: 30px;
      }
      
      @media screen and (max-width:477px){
          .tab-container {
              padding-inline: 5%;
              padding-bottom: 30px;
          }
      }
      `}
      </style>
    </div>
  );
}
