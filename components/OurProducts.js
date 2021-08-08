import React from 'react';
import '../styles/OurProducts.module.css'
import Image from 'next/image'


function OurProducts() {
    return (
        <div className='product-section'>
            <div className='header-overlay1'>
             <h1 className='product-head'>OUR PRODUCTS</h1>
            </div>
            <div className='product-lower-half'>
                <div className='product-container'>
                    
                    <Image className='product-image'src='/images/product.jpg' alt='productimage' height='600px' width='800px'/>
                    
                    <div className='right-wrapper'>
                        <div className='product-right'>
                            <p>CLS Medical offers a full line of hospital/medical bedding options, hospital/medical gowns, and scrubs. In addition, we provide pediatric sizes, dry cleaning services (lab coats), curtains and custom services.</p>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .product-container{
                    box-shadow: 0 32px 20px rgb(0 0 0 / 26%);
                    filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
                    height:300px;
                    width:85%;
                    display: inline-flex;
                    border-radius: 30px;
                }
                
                .product-container > img{
                    max-height: 300px;
                  }
                
                .header-overlay {
                    text-align: -webkit-center;
                }
                .header-overlay1 > h1{
                    background-color: #00338e;
                    border-radius: 10px 10px 3px 3px;
                    width:55%;
                    color: white;
                }
                
                .product-section{
                    height:fit-content;
                    background-color: white;
                    padding-bottom: 10%;
                }
                .product-left{
                    width:50%;
                    contain: strict;
                }
                .product-right{
                    width: 88%;
                    text-align: right;
                }
                
                .right-wrapper{
                    text-align: -webkit-center;
                    width:100%;
                    align-self: center;
                }
                .p {
                    text-align: right;
                }
                
                .lower-half{
                    text-align: center;
                }
                .product-right >p{
                    font-size: 20px;
                    color:#636363;
                }
                
                .product-head{
                    float:left;
                }
                .header-overlay1 >h1{
                    border-radius: 0px 10px 3px 0px;
                    text-align: center;
                }
                @media  screen and (max-width:1024px) {
                    .product-container{
                        align-items: center;
                        flex-flow: column;
                        height: fit-content;
                        border-radius: 0px 0px 30px 0px;
                        }
                        .right-wrapper{
                            width:100%;
                        }
                        .product-right{
                            width:100%;
                            padding:10px;
                            text-align: left;
                        }
                        .product-container > img{
                            width:100%;
                            border-radius: 0px 30px 0px 0px;
                        }
                
                    
                }
                
                @media  screen and (max-width:650px){
                    .product-right >p{
                        font-size: 14px;
                    }
                    
                }
            `}
            </style>
        </div>
    )
}

export default OurProducts

