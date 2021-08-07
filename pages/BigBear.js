import React from 'react'
import { Fragment } from 'react'
import '../../App.css'
import { Helmet } from 'react-helmet'
import { Title } from '@material-ui/icons';

function BigBear (){
    return (
        <Fragment>
            <Helmet>
                <Title>Big Bear Linen Services</Title>
                <meta
                name='descirption' 
                content='CLS Medical is located in Acworth Georgia and services all of Georgia including the Metro Atlanta Area.' 
                />
                <meta property="og:title" content="CLS Medical"/>

                <meta property="og:url" content="https://www.facebook.com/clsmedical"/>

                <meta property="og:site_name" content="CLS Medical"/>

                <meta property="fb:app_id" content="279043628939963"/>

                <meta property="og:description" content="CLS Medical is a commercial linen service specializing in medical textiles where we pride ourselves on impeccable customer service."/>

                <meta property="og:image" content="https://scontent-a-atl.xx.fbcdn.net/hphotos-frc3/t1.0-9/1383040_272004999628488_512164481_n.jpg"/>
                <link rel="shortcut icon" href="images/favicon.ico"/>
                <meta name= 'keywords' content='contact, kennesaw, email, phone, call' />
            </Helmet>
            <div className= 'bigbear'>
                <div className='bear-hero'>
                    <img className='bigbear-img' src='./images/Bigbearhero.png' alt='bigbearimg' style={{width:'100%', heihgt:'1000px'}}></img>
                </div>
            </div>
        </Fragment>
    ); 
}

export default BigBear