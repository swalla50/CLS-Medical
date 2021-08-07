import React from 'react'
import { Fragment } from 'react';
import '../styles/App.module.css'
import MediaCard from '../components/MediaCard';
import Testimonials from '../components/Testimonials';




function About () {
    return(
        <Fragment>
            
            <title>About CLS Medical and Their Team</title>
            <meta
            name='descirption' 
            content='Learn about who we are and meet our team. CLS Medical, formerly Cherokee Linen Service, has been serving Georgia medical facilities, hospitals, nursing homes and surgical centers for over 20 years.' 
            />
            <meta property="og:title" content="CLS Medical"/>

            <meta property="og:url" content="https://www.facebook.com/clsmedical"/>

            <meta property="og:site_name" content="CLS Medical"/>

            <meta property="fb:app_id" content="279043628939963"/>

            <meta property="og:description" content="CLS Medical is a commercial linen service specializing in medical textiles where we pride ourselves on impeccable customer service."/>

            <meta property="og:image" content="https://scontent-a-atl.xx.fbcdn.net/hphotos-frc3/t1.0-9/1383040_272004999628488_512164481_n.jpg"/>
            <link rel="shortcut icon" href="images/favicon.ico"/>
            <meta name= 'keywords' content='about, services, linen, atlanta' />
            
            <h1 className="about">ABOUT</h1>
            <MediaCard/>
            <h2 className="testimonials">Testimonials</h2>
            <Testimonials />
        </Fragment>
    );
}

export default About;