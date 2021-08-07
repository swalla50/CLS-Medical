import React from 'react';
import '../styles/Serving.module.css'


function Serving() {
    return (
        <div className='serving-section'>
            <div className='header-overlay2'>
             <h1 className='serving-head'>SERVICING</h1>
            </div>
            <div className='serving-lower-half'>
                <div className='serving-container'>
                    <div className='right-wrapper'>
                        <div className='serving-right'>
                            <h2 className='serving-info-heading'>Servicing Georgia and the Southeast</h2>
                            <p>CLS Medical offers a full line of hospital/medical bedding options, hospital/medical gowns, and scrubs. In addition, we provide pediatric sizes, dry cleaning services (lab coats), curtains and custom services.</p>
                        </div>
                    </div>
                    
                    <img className='serving-image'src='./images/serving.jpg' alt='servingimage' style={{height:'300px'}}/>
                    
                </div>
            </div>
            <style jsx>{`
                .serving-container{
                    box-shadow: 0 32px 20px rgb(0 0 0 / 26%);
                    filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
                    height:300px;
                    width:85%;
                    display: inline-flex;
                    border-radius: 30px;
                }
                
                .serving-container > img{
                    max-height: 300px;
                  }
                
                .serving-header-overlay {
                    text-align: right;
                }
                .header-overlay2 > h1{
                    background-color: #00338e;
                    border-radius: 10px 10px 3px 3px;
                    width:55%;
                    color: white;
                }
                
                .serving-info-heading{
                    font-size: 30px;
                }
                
                .serving-section{
                    height:fit-content;
                    background-color: white;
                    padding-bottom: 10%;
                }
                .serving-left{
                    width:50%;
                    contain: strict;
                }
                .serving-right{
                    width: 88%;
                    text-align: left;
                }
                
                .right-wrapper{
                    text-align: -webkit-center;
                    width:100%;
                    align-self: center;
                }
                .p {
                    text-align: right;
                }
                
                .serving-lower-half{
                    text-align: right;
                }
                .product-lower-half{
                    text-align: left;
                }
                .serving-right >p{
                    font-size: 20px;
                    color:#636363;
                }
                .serving-head{
                    float:right;
                }
                .header-overlay2 >h1{
                    border-radius: 10px 0px 0px 3px;
                    text-align: center;
                }
                @media  screen and (max-width:1024px) {
                    .serving-container{
                        align-items: center;
                        flex-flow: column;
                        height: fit-content;
                        border-radius: 30px 0px 0px 30px;
                        }
                        .right-wrapper{
                            width:100%;
                        }
                        .serving-right{
                            width:100%;
                            padding:10px;
                        }
                        .serving-container > img{
                            width:100%;
                            border-radius: 0px 0px 0px 30px;
                        }
                        .serving-info-heading{
                            font-size: 20px;
                        }
                    
                }
                
                @media  screen and (max-width:650px){
                    .serving-right >p{
                        font-size: 14px;
                    }
                    
                }
            `}
            </style>
        </div>
    )
}

export default Serving;