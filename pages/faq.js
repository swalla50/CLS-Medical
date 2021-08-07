import React from 'react'
import { Fragment } from 'react';
import '../styles/App.module.css'
import FAQAccordion from '../components/FAQAccordion';
import FAQintro from '../components/FAQintro';


function FAQ (){
    return (
        <Fragment>

                <title>CLS Medical's FAQ</title>
                <meta
                name='descirption' 
                content='B' 
                />
                <meta property="og:title" content="CLS Medical"/>

                <meta property="og:url" content="https://www.facebook.com/clsmedical"/>

                <meta property="og:site_name" content="CLS Medical"/>

                <meta property="fb:app_id" content="279043628939963"/>

                <meta property="og:description" content="CLS Medical is a commercial linen service specializing in medical textiles where we pride ourselves on impeccable customer service."/>

                <meta property="og:image" content="https://scontent-a-atl.xx.fbcdn.net/hphotos-frc3/t1.0-9/1383040_272004999628488_512164481_n.jpg"/>
                <link rel="shortcut icon" href="images/favicon.ico"/>
                <meta name= 'keywords' content='about, services, linen, atlanta' />

            <h1 className="faq">FAQ <h3 className='faq-header'>Frequently Asked Questions</h3></h1>

            <div className='row1'>
                <div className='container1'>
                    <FAQintro />
                </div>
            </div>
            <div className='row2' style={{display:'flex', height:'auto'}}>
                    <FAQAccordion />

            </div>
            
        </Fragment>
    ); 
}

export default FAQ