import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function one() {
    return (
        <div className="one-background" style={{backgroundColor:'#c4c4c4', padding:'100px'}}>
            <div className='one-colored-background' style={{backgroundColor:'#FD6F73', borderRadius:'20px'}}>
               <div className='row1-one' style={{textAlign:'center'}}>
                   <h2 className='one-page-title' style={{fontSize:'90px', color:'white'}}>O.N.E. PROGRAM </h2>
               </div>
               
                <div className='one-row' style={{display:'flex', padding:'100px'}}>
                    <div className="one-logo" style={{height:'100%', width:'50%', margin:'20px'}}>
                        <Image className='ONElogo'src='/images/One-Program.png'  height='250px' width='500px' ></Image>
                    </div>
                    <div className='one-content-background' style={{backgroundColor:'white', borderRadius:'20px', width:'50%'}}>
                        <div className="one-text-content" style={{padding:'10px'}}>
                            <h2 className='one-header-text' style={{fontSize:'40px',color:'#FD6F73'}}>    
                                One Fixed Cost - One Trusted Vendor
                            </h2>

                            <p className='one-para-text'>
                            The O.N.E. Program is designed to immediately provide essential cost savings 
                            to our clients while simultaneously simplifying every detail of their laundry
                            program! Allow us to manage all aspects of your laundry requirements for you! 
                            With our O.N.E. Program, we guarantee to save you 20% from your current 
                            laundry provider and establish a fixed monthly cost for your facility.
                            </p>

                            <h3 className='contact-one-content' style={{fontSize:'25px'}}>
                                <Link href='/contact'>
                                    <a style={{color:'#FD6F73'}}>Contact Us </a>
                                </Link>
                                today to learn how the O.N.E. Program can benefit your facility!
                            </h3>
                            <h3 className='contact-one-content'>
                                
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

<style jsx> 
{`

.one-background{
    background-color: #c4c4c4;
    height:2000px;
}
`} 
</style>

export default one


