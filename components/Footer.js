import React from 'react';
import {Button} from '../components/Button.js';
import Link from 'next/link';
import '../styles/Footer.module.css';
import emailjs from 'emailjs-com';

function sendEmail(e){
  e.preventDefault();

emailjs.sendForm('service_r9b69jg', 'template_ocb89za', e.target, 'user_OIuQ0ZFNNH6wSdbZCzQet')
.then((result) => {
    console.log(result.text);
}, (error) => {
    console.log(error.text);
});
}

function Footer() {
    return (
      <div className='footer-container'>
        <section className='footer-subscription'>
          <p className='footer-subscription-heading'>
            Please Contact Us!
          </p>
          <p className='footer-subscription-text'>
            Enter your information below.
          </p>
          <div className='input-areas'>
            <form onSubmit={sendEmail}>
              <input
                className='footer-input'
                name='name'
                type='text'
                placeholder='Your Name'
              />
              <input
                className='footer-input'
                name='email'
                type='email'
                placeholder='Your Email'
              />
              <input
                className='footer-input'
                name='message'
                type='text'
                placeholder='Your Message'
              />
              <Button buttonStyle='btn--outline'>Submit</Button>
            </form>
          </div>
        </section>
        <div className='footer-links'>
          <div className='footer-link-wrapper'>
            <div className='footer-link-items' >
              <a className='product-link' href='/services'>
                <h2 style={{color:'white'}}>Our Products</h2>
              </a>
            </div>
          </div>
          <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
              <h2>Social Media</h2>
              <a href='https://www.facebook.com/clsmedical/'>CLS Facebook</a>
              <a href='https://www.linkedin.com/company/clsmedical/mycompany/?viewAsMember=true'>CLS Linkedin</a>
              <a href='https://www.facebook.com/RockForAReasonATL'>Rock Facebook</a>
              <a href='https://www.facebook.com/SPLinens'>Southern Proper Facebook</a>
              <a href='https://www.linkedin.com/company/southernproperlinen/?viewAsMember=true'>Southern Proper Linkedin</a>
            </div>
          </div>
        </div>
        <section className='social-media'>
          <div className='social-media-wrap'>
            <div className='footer-logo'>
              <a href='/' className='social-logo'>
                <img src = "/images/transparentlogo.png" alt='cls-footer-logo'/>
              </a>
            </div>
            <small className='website-rights'>CLS Medical © 2021</small>
            <div className='social-icons'>
              <a
                href= 'https://www.facebook.com/clsmedical/'
                className='social-icon-link facebook'
                to='/'
                target='_blank'
                aria-label='Facebook'
              >
                <i className='fab fa-facebook-f' />
              </a>
              <a
                href= 'https://www.linkedin.com/company/clsmedical/mycompany/?viewAsMember=true'
                class='social-icon-link facebook'
                to='/'
                target='_blank'
                aria-label='Facebook'
              >
                <i className='fab fa-linkedin-in' />
              </a>
              
            </div>
          </div>
        </section>
        <style jsx>
                {`
                   .footer-container{
                    background-color: #6685bb
                    ;
                    padding: 4rem 0 2rem 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-self: center;
                    padding-top:9px;
                }
                
                .footer-subscription {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                  
                    margin-bottom: 24px;
                    padding: 24px;
                    color: #fff;
                  }
                  
                  .footer-subscription > p {
                    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
                      'Lucida Sans', Arial, sans-serif;
                  }
                  
                  .footer-subscription-heading {
                    margin-bottom: 24px;
                    font-size: 24px;
                  }
                  
                  .footer-subscription-text {
                    margin-bottom: 24px;
                    font-size: 20px;
                  }
                  
                  .footer-input {
                    padding: 8px 20px;
                    border-radius: 2px;
                    margin-right: 10px;
                    outline: none;
                    border: none;
                    font-size: 18px;
                    margin-bottom: 16px;
                    border: 1px solid #fff;
                  }
                  
                  .footer-links {
                    width: 100%;
                    max-width: auto;
                    display: flex;
                    justify-content: space-evenly;
                  }
                  
                  .footer-link-wrapper {
                    display: flex;
                  }
                  
                  .footer-link-items {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    margin: 16px;
                    text-align: center;
                    width: 160px;
                    box-sizing: border-box;
                    align-items: center;
                  }
                  
                  .footer-link-items h2 {
                    margin-bottom: 16px;
                  }
                  
                  .footer-link-items > h2 {
                    color: #fff;
                  }
                  
                  .footer-link-items a {
                    color: #fff;
                    text-decoration: none;
                    margin-bottom: 0.5rem;
                  }
                  
                  .footer-link-items a:hover {
                    color: #e9e9e9;
                    transition: 0.3s ease-out;
                  }
                  
                  .footer-email-form h2 {
                    margin-bottom: 2rem;
                  }
                  
                  .footer-input::placeholder {
                    color: #b1b1b1;
                  }
                  
                  /* Social Icons */
                  .social-icon-link {
                    color: #fff;
                    font-size: 24px;
                    padding-inline: 5px;
                  }
                  
                  .social-media {
                    width: 100%;
                  }
                  
                  .social-media-wrap {
                    display: flex;
                    justify-content: space-evenly;
                    align-items: center;
                    width: 100%;
                    max-width: auto;
                    margin: 40px auto 0 auto;
                  }
                  
                  .social-icons {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: auto;
                  }
                  
                  .social-logo {
                    color: #fff;
                    justify-self: start;
                    margin-left: 20px;
                    cursor: pointer;
                    text-decoration: none;
                    font-size: 2rem;
                    display: flex;
                    align-items: center;
                    margin-bottom: 16px;
                  }
                
                  .social-logo > text{
                      padding-right: 10px;
                  }
                  .social-logo >img{
                      block-size: 50px;
                  }
                  
                  .website-rights {
                    color: #fff;
                    margin-bottom: 16px;
                  }
                  
                  @media screen and (max-width: 820px) {
                    .footer-links {
                      padding-top: 2rem;
                    }
                  
                    .footer-input {
                      width: 100%;
                    }
                  
                    .btn {
                      width: 100%;
                    }
                  
                    .footer-link-wrapper {
                      flex-direction: column;
                    }
                  
                    .social-media-wrap {
                      flex-direction: column;
                    }
                  }
                  
                  @media screen and (max-width: 768px) {
                  }
                `}
                </style>
      </div>
    );
  }
  
  export default Footer;
