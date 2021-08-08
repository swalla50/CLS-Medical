import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import '../styles/Testimonials.module.css'
import Image from 'next/image'

export default class Testimonials extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div className='Testimonials'>
          <Image src="/images/userdefault.png" alt='user-default' layout='responsive' height='100px' width='100px' />
          <div className="myCarousel">
            <h3>R. Nevarez</h3>
            <h4>Halcyon Hospice</h4>
            <p>
            There are plenty of linen companies around, but when it comes to customer service, reliability, dependability and consistency, CLS Medical tops them all.
            </p>
          </div>
        </div>

        <div>
          <Image src="/images/userdefault.png" alt='user-defualt' layout='responsive' height='100px' width='100px' />
          <div className="myCarousel">
            <h3>Jane and Stephanie</h3>
            <h4>Roswell Surgery Center</h4>
            <p>
            We have been very pleased and satisfied with CLS Medical's service to our facility over
            the years. Their service goes above and beyond. Our needs are truly their priority. In this
            day and time, good pricing AND excellent customer service mean a lot! I would highly
            recommend CLS Medical!
            </p>
          </div>
        </div>

        <div>
          <Image src="/images/userdefault.png" alt='user-defualt'layout='responsive' height='100px' width='100px' />
          <div className="myCarousel">
            <h3>N. Thompson</h3>
            <h4>West Georgia Center for Plastic Surgery</h4>
            <p>
            We have been very pleased with the services rendered to us by CLS Medical. They are
            always prompt; linen is clean, and nicely folded. If there is ever an issue they are easy to
            contact via phone or email and always respond immediately with a resolution. I highly
            recommend CLS Medical to anyone looking for superior linen service.
            </p>
          </div>
        </div>
      </Carousel>
    );
  }
}