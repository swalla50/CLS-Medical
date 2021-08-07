import React from 'react';
import CardItem from './CardItem';
import '../styles/Cards.module.css';



function Cards() {
    return (
        <div className= 'cards'>
            <div className= 'cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/customerservice.png' 
                            text='We pride ourselves on our ability to offer an unmatched level of customer service to all of our clients!'
                            label='CUSTOMER SERVICE'
                            href='/services'
                        />
                        <CardItem
                            src='images/reliable.png'
                            text='CLS Medical has proven to be an industry leader for over thirty years.'
                            label='RELIABLE SERVICES'
                            href='/services'
                        />
                        <CardItem
                            src='images/pricinglogo.png'
                            text='We provide the highest quality products with an all-inclusive service for an affordable rate.'
                            label='PRICING'
                            href='/services'
                        />
                         
                    </ul>
                   
                </div>

            </div>
            <style jsx>
                    {`
                    @keyframes float {
                        0% {
                            box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
                            transform: translatey(0px);
                        }
                        50% {
                            box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
                            transform: translatey(-20px);
                        }
                        100% {
                            box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
                            transform: translatey(0px);
                        }
                    }
                    .cards {
                        padding: 4rem;
                        background: #fff;
                    }
                    
                    .cards__container {
                        display: flex;
                        flex-flow: column;
                        align-items: center;
                        max-width: 1120px;
                        width: 90%;
                        margin: 0 auto;
                    }
                    
                    .cards__wrapper {
                        position: relative;
                        margin: 50px 0 45px;
                    }
                    
                    .cards__items {
                        margin-bottom: 10%;
                    }
                    
                    .cards__item {
                        display: flex;
                        flex: 1;
                        margin: 0 1rem;
                        border-radius: 10px;
                    }
                    
                    .cards__item__link {
                        display: flex;
                        flex-flow: column;
                        width: 100%;
                        box-shadow: 0 32px 20px rgb(0 0 0 / 26%);
                        -webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
                        filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
                        border-radius: 10px;
                        overflow: hidden;
                        text-decoration: none;
                    }
                    
                    .cards__item__pic-wrap {
                        position: relative;
                        width: 100%;
                        padding-top: 67%;
                        overflow: hidden;
                    }
                    
                    .fade-img {
                        animation-name: fade-img;
                        animation-duration: 2s;
                    }
                    
                    .cards__item__pic-wrap::after {
                        content: attr(data-category);
                        position: absolute;
                        bottom: 0;
                        padding: 8px 15px;
                        max-width: 100%;
                        text-align: center;
                        width: 100%;
                        font-size: 13px;
                        font-weight: 700;
                        color: #fff;
                        background-color: #dc0000;
                        box-sizing: border-box;
                    }
                    
                    .cards__item__img {
                        position: absolute;
                        top: 39px;
                        right: 0;
                        bottom: 0;
                        left: 0;
                        display: block;
                        width: 100%;
                        max-width: 100%;
                        height: 57%;
                        max-height: 100%;
                        object-fit: scale-down;
                        transition: all 0.2s linear;
                    }
                    
                    .cards__item__img:hover {
                        transform: scale(1.1);
                    }
                    
                    .cards__item__info {
                        padding: 20px 30px 30px;
                    }
                    
                    .cards__item__info > h5{
                        text-align: center;
                    }
                    
                    .cards__item__text {
                        color: #252e48;
                        font-size: 18px;
                        line-height: 24px;
                    }
                    
                    @media only screen and (min-width: 1200px) {
                        .content__blog__container {
                        width: 84%;
                        }
                    }
                    
                    @media only screen and (min-width: 1024px) {
                        .cards__items {
                        display: flex;
                        }
                    }
                    
                    @media only screen and (max-width: 1024px) {
                        .cards__item {
                        margin-bottom: 2rem;
                        }
                    }
                    `}
                </style>
        </div>
    )
}

export default Cards
