import React from 'react';
import { Fragment } from 'react';
import '../styles/App.module.css';
import ScrollableTabsButtonForce from '../components/TabPanel';
import Overlappingimg from '../components/overlappingimg';



function Services() {
    return (
        <Fragment>
          <title>CLS Medical Services</title>
          <meta
           name='descirption' 
           content='CLS Medical will provide your facility with brand new linen purchased solely for you! Our experienced and friendly delivery drivers will take care of your initial installation of linen and personally learn your account quantity needs. On a daily basis, hand-folded linen will be placed on your shelves in a neat and organized manner to ensure your linen needs be met and surpassed! CLS Medical takes the time to get to know our clients, their preferences, and needs to further ensure their satisfaction with our service!' 
           />

            <div className='service-page'>
            <div className='hero-video'>
                <h1 className= "services">
                    <video src= './videos/wavingflag.mp4' autoPlay loop muted playsInline>
                    </video>
                    We SERVICE <br></br> all types of care facilities.
                </h1>
            </div>
            <div className= 'tab-container'>
                <Overlappingimg/>
                <ScrollableTabsButtonForce/>
            </div>
            </div>
            <style jsx>
                {`
                   .services
                    {
                     display: flex;
                     height: 90vh;
                     text-align: center;
                     font-weight: bold;
                     align-items: center;
                     justify-content: center;
                     font-size: 3rem;
                   }
                   
                   .services {
                     position: relative;
                     background-position: center;
                     background-size: cover;
                     height: 250px;
                     background-repeat: no-repeat;
                     color: #fff;
                   }
                   .services >h1 {
                     background-position: center;
                     background-size: cover;
                     height: 200px;
                     background-repeat: no-repeat;
                     color: #fff;
                     text-align: center;
                     font-size: 100px;
                   }
                   .tab-container {
                    padding-inline: 15%;
                    padding-bottom: 30px;
                    }
                    @media  screen and (max-width: 477px) {
                        .tab-container{
                            padding-inline:1%;
                        }
                        
                    }
                    

                    body {
                        margin: 0;
                        color: rgba(0, 0, 0, 0.85);
                        font-size: 14px;
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
                        font-variant: tabular-nums;
                        line-height: 1.5715;
                        background-color: #fff;
                        font-feature-settings: 'tnum', "tnum";
                    }
                   
                   
                `}
            </style>
        </Fragment>
    );
}

export default Services;

