import React from 'react';

import {Button} from './Button';
import Link from 'next/link';
import '../styles/App.module.css';


function HeroSection() {
    return (
        <div className='hero-container' style={{backgroundImage:`url("./images/heroimage.jpg")`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
            <h1>High quality products and reliable service at an affordable rate.</h1>
            <p> We are the answer to your linen needs.</p>
            <div className='hero-btns'>
                <Link href='/about' className='btnmobile'>
                    <Button className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'>
                        LEARN MORE
                    </Button>
                </Link>
                <Link href='/contact' className='btnmobile'>
                    <Button className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'>
                        CONTACT US 
                    </Button>
                    
                </Link>
                
            </div>
            
        </div>
    )
}

export default HeroSection;
