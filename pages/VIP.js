import React from 'react'
import Paper from '@material-ui/core/Paper';
import FloatingActionButtons from '../components/FloatingActionButtons.js';
import { Fragment } from 'react';
import '../styles/App.module.css'

import VIPCard from '../components/VIPCard.js';
import Link from 'next/link'




function VIP () {
    return(
        <Fragment>

                <title>CLS Medical VIP Vendors Initiative Program</title>
                <meta
                name='descirption' 
                content='A vendor who shares is a partner who cares. We will give 5% back to your charity each month.' 
                />
                <meta property="og:title" content="CLS Medical"/>

                <meta property="og:url" content="https://www.facebook.com/clsmedical"/>

                <meta property="og:site_name" content="CLS Medical"/>

                <meta property="fb:app_id" content="279043628939963"/>

                <meta property="og:description" content="CLS Medical is a commercial linen service specializing in medical textiles where we pride ourselves on impeccable customer service."/>

                <meta property="og:image" content="https://scontent-a-atl.xx.fbcdn.net/hphotos-frc3/t1.0-9/1383040_272004999628488_512164481_n.jpg"/>
                <link rel="shortcut icon" href="images/favicon.ico"/>

            <h1 className="VIP">Vendor's Initiative Program</h1>

            <div className='viprow1' style={{paddingTop:'5%', paddingBottom:'5%'}}>
                    <div className='rfar-wrapper' style={{width:'100%', display:'block',textAlign: '-webkit-center'}}>
                        <VIPCard style={{backgroundColor:'rgb(165 163 163)'}}/>
                    </div>
                    <div className='right-side' id='wave' style={{width:'100%', dispaly: 'contents', alignSelf:'center',textAlign:'-webkit-center'}}>
                        <Paper elevation={1} id='' style ={{height:'400px', width:'400px', borderRadius:'50%',backgroundColor: 'rgb(165 163 163)'}}>
                        <div className='paper-info' style={{display:'inline-grid',placeItems:'center',height:'400px',objectFit:'contain'}}>
                        <h1 className='vip-contact-heading' style={{fontFamily:'Barlow Condensed, sans-serif'}}>
                            Want To Know More?
                        </h1>
                        <p className='vip-contact-p'>
                            Please call CLS Medical for more information on this program. Today, we can make a difference!
                        </p>
                        <p className='vip-contact-heading' style={{color:'white', fontSize:'30px'}}>
                            770-355-5588
                        </p>
                        <a href ='/contact' style={{textDecoration:'none'}}>
                        <FloatingActionButtons to='/contact' className='vip-button'/>
                        </a>
                        </div>
                        </Paper>
                        <div class="circle" style={{animationDelay:'0s'}}></div>
                        <div class="circle" style={{animationDelay:'1s'}}></div>
                        <div class="circle" style={{animationDelay:'2s'}}></div>
                        <div class="circle" style={{animationDelay:'3s'}}></div>
                        
                    </div>
                
                
            </div>
        </Fragment>
    );
}

export default VIP;