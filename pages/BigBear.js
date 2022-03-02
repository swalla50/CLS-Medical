import React from 'react'
import { Fragment } from 'react'
import '../styles/App.module.css'
import { Title } from '@material-ui/icons';
import Image from 'next/image'

function BigBear (){
    return (
        <Fragment>
            
                
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
            
            <div className= "bigbear">
                <div className='bear-hero'>
                    <Image className='bigbear-img' src='/images/Bigbearhero.png' alt='bigbearimg' width='4500px' height='2000px'></Image>
                </div>
            </div>
        </Fragment>
    ); 
}

export default BigBear