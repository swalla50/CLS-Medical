import React from 'react';

import HeroSection from '../components/HeroSection';
import Cards from '../components/Cards';
import OurProducts from '../components/OurProducts';
import { Fragment } from 'react';
import Serving from '../components/Serving';




function Home() {
    return (
        <Fragment>
            
                <title>CLS Medical Linen Services</title>
                <meta
                name='descirption' 
                content='CLS Medical provides the highest quality medical linens and textile items to medical facilities, surgical centers and hospitals. We have serviced the state of Georgia for over 25 years as a leader in our industry.' 
                />
                <meta name ="keywords" content='Linen, Medical, Altanta, Kennesaw, Hospital'/>
                <meta name="author" content=""/>
                <meta property="og:title" content="CLS Medical"/>
                <meta property="og:url" content="https://www.facebook.com/clsmedical"/>
                <meta property="og:site_name" content="CLS Medical"/>
                <meta property="fb:app_id" content="279043628939963"/>
                <meta property="og:description" content="CLS Medical is a commercial linen service specializing in medical textiles where we pride ourselves on impeccable customer service."/>
                <meta property="og:image" content="https://scontent-a-atl.xx.fbcdn.net/hphotos-frc3/t1.0-9/1383040_272004999628488_512164481_n.jpg"></meta>
            <HeroSection />
            <Cards />
            <OurProducts/>
            <Serving/>
            <style jsx>{`
              .cards {
                padding: 4rem;
                background: #fff;
              } 
            `}
            </style>
        </Fragment>
    );
}

export default Home;