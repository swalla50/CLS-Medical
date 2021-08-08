import Button from '@material-ui/core/Button';
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import emailjs from 'emailjs-com';
import { Divider } from '@material-ui/core';
import '../styles/EmploymentForm.module.css';

function sendEmail(e){
    e.preventDefault();

emailjs.sendForm('service_r9b69jg', 'template_ifl9jsv', e.target, 'user_OIuQ0ZFNNH6wSdbZCzQet')
  .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
}

 export default function EmploymentForm(){

    return(
    <Card>
        <CardContent style={{paddingBottom:'55px'}}>
            <div className= 'contact-form-container' style={{paddingInline:'5%'}}>
                <form id='form-contact' onSubmit={sendEmail} style={{background: '#d6ffff', borderRadius:'20px', padding:'10px', boxShadow: '0 32px 20px rgb(0 0 0 / 26%)'}}>
                    <div className='form-group'>
                        <div className= 'contactrow'>
                            <h2>Online Job Application</h2>
                            <div className='col-md-6' style={{paddingBottom:'3%'}}>
                                <input placeholder='Name' id ='name' type='text' className='form-control' name='name'
                                style={{borderLeft:'none',borderRight:'none', borderTop: 'none', borderBottom:'solid #6685bb', padding:'0px'}} />
                            </div>
                            <div className='form-group' style={{paddingBottom:'3%'}}>
                                <input placeholder='Street Address' id ='address' type='text' className='form-control' name='address'
                                style={{borderLeft:'none',borderRight:'none', borderTop: 'none', borderBottom:'solid #6685bb', width:'50%'}} />
                            </div>
                            <div className='address-group'>
                                <div className='form-group' style={{paddingBottom:'3%'}}>
                                    <input placeholder='City' id ='city' type='text' className='form-control' rows='1' name='city'
                                    style={{padding:'0px',borderLeft:'none',borderRight:'none', borderTop: 'none', borderBottom:'solid #6685bb'}} />
                                </div>
                                <div className='col-md-6' style={{paddingBottom:'3%'}}>
                                    <input placeholder='State' id ='state' type='text' className='form-control' name='state'
                                    aria-describedby='emailHelp'   style={{borderLeft:'none',borderRight:'none', borderTop: 'none', borderBottom:'solid #6685bb'}} />
                                </div>
                                <div className='col-md-6' style={{paddingBottom:'3%'}}>
                                    <input placeholder='Zip Code' id ='zip' type='text' className='form-control' name='zip'
                                    aria-describedby='emailHelp'   style={{borderLeft:'none',borderRight:'none', borderTop: 'none', borderBottom:'solid #6685bb'}} />
                                </div>
                            </div>
                        
                            <div className='address-group'>
                                <div className='form-group' style={{paddingBottom:'3%'}}>
                                    <input placeholder='Email' id ='email' type='email' className='form-control' rows='1' name='email'
                                    style={{padding:'0px',borderLeft:'none',borderRight:'none', borderTop: 'none', borderBottom:'solid #6685bb'}} />
                                </div>
                                <div className='col-md-6' style={{paddingBottom:'3%'}}>
                                    <input placeholder='Date of Birth' id ='dob' type='text' className='form-control' name='dob'
                                    style={{borderLeft:'none',borderRight:'none', borderTop: 'none', borderBottom:'solid #6685bb'}} />
                                </div>
                                <div className='col-md-6' style={{paddingBottom:'3%'}}>
                                    <input placeholder='Social Security' id ='zip' type='text' className='form-control' name='ss'
                                    style={{borderLeft:'none',borderRight:'none', borderTop: 'none', borderBottom:'solid #6685bb'}} />
                                </div>
                            </div>
                            <Divider style={{height:'4px', backgroundColor:'black'}}></Divider>
                            <h2>Education</h2>
                            <div className='education-group1'style={{display:'inline-flex'}}>
                                <p>Highest Level of Education:</p><t></t>
                                <div className='checkbox1' style={{paddingInline:'10px'}}>
                                    <input type="checkbox" id="education1" name="education1" value="High School" />
                                    <label htmlFor="education1">High School</label>
                                </div>
                                <div className='checkbox1' style={{paddingInline:'10px'}}>
                                    <input type="checkbox" id="education2" name="eductation2" value="College"/>
                                    <label htmlFor="education2"> College</label>
                                </div>
                                <div className='checkbox1' style={{paddingInline:'10px'}}>
                                    <input type="checkbox" id="education3" name="education3" value="Trade School"/>
                                    <label htmlFor="education3"> Trade School</label>
                                </div>
                            </div><br></br>

                            <div className='education-group2'style={{display:'inline-flex'}}>
                                <p>Did you graduate?:</p><t></t>
                                <div className='checkbox1' style={{paddingInline:'10px'}}>
                                    <input type="checkbox" id="graduate1" name="graduate1" value="Yes" />
                                    <label htmlFor="graduate1">Yes</label>
                                </div>
                                <div className='checkbox1' style={{paddingInline:'10px'}}>
                                    <input type="checkbox" id="graduate2" name="graduate2" value="No"/>
                                    <label htmlFor="graduate2">No</label>
                                </div>
                            </div><br></br>

                            <div className='education-group2'style={{}}>
                                <p>Name of School(s), Year Completed, Degree:</p><t></t>
                                <div className='schoolinfo' style={{paddingInline:'10px', }}>
                                    <input type="text" id="school" name="school" style={{paddingBottom:'100px', width:'50%', border: 'solid rgb(102, 133, 187)'}} />
                                </div>
                            </div><br></br>

                            <Divider style={{height:"4px", backgroundColor:"black"}}></Divider>

                            <h2>References</h2>
                            <h3>Please list 5 professional references (no family). Be sure to include Name, Contact Phone Number and the Number of Years they've known you.</h3>
                            <div className='refence-group'style={{}}>
                                <p>Reference #1:</p><t></t>
                                <div className='reference' style={{paddingInline:'10px'}}>
                                    <input type="text" id="reference1" name="reference1" style={{paddingBottom:'70px', width:'50%', border: 'solid rgb(102, 133, 187)'}} />
                                </div>
                            </div><br></br>
                            <div className='refence-group'style={{}}>
                                <p>Reference #2:</p><t></t>
                                <div className='reference' style={{paddingInline:'10px'}}>
                                    <input type="text" id="reference2" name="reference2" style={{paddingBottom:'70px', width:'50%', border: 'solid rgb(102, 133, 187)'}} />
                                </div>
                            </div><br></br>
                            <div className='refence-group'style={{}}>
                                <p>Reference #3:</p><t></t>
                                <div className='reference' style={{paddingInline:'10px'}}>
                                    <input type="text" id="reference3" name="reference3" style={{paddingBottom:'70px', width:'50%', border: 'solid rgb(102, 133, 187)'}} />
                                </div>
                            </div><br></br>
                            <div className='refence-group'style={{}}>
                                <p>Reference #4:</p><t></t>
                                <div className='reference' style={{paddingInline:'10px'}}>
                                    <input type="text" id="reference4" name="reference4" style={{paddingBottom:'70px', width:'50%', border: 'solid rgb(102, 133, 187)'}} />
                                </div>
                            </div><br></br>
                            <div className='refence-group'style={{}}>
                                <p>Reference #5:</p><t></t>
                                <div className='reference' style={{paddingInline:'10px'}}>
                                    <input type="text" id="reference5" name="reference5" style={{paddingBottom:'70px', width:'50%', border: 'solid rgb(102, 133, 187)'}} />
                                </div>
                            </div><br></br>

                            <Divider style={{height:'4px', backgroundColor:'black'}}></Divider>

                            <h2>General Information</h2>
                            <div className='genral-group1'style={{display:'inline-flex'}}>
                                <p style={{fontSize:'15px'}}>Are you a convicted felon?</p><t></t>
                                <div className='felon' style={{paddingInline:'10px'}}>
                                    <input type="checkbox" id="general1" name="felon1" value="yes" style={{fontSize:'15px',}}/>
                                    <label htmlFor="general1">Yes</label>
                                </div>
                                <div className='felon' style={{paddingInline:'10px'}}>
                                    <input type="checkbox" id="general2" name="felon2" value="no"  style={{fontSize:'15px'}}/>
                                    <label htmlFor="general2">No</label>
                                </div>
                            </div><br></br>

                            <div className='general-group2'style={{display:'inline-flex'}}>
                                <p style={{fontSize:'15px'}}>Do you have a reliable vehicle?</p><t></t>
                                <div className='vehicle' style={{paddingInline:'10px'}}>
                                    <input type="checkbox" id="general1" name="vehicle1" value="yes" style={{fontSize:'15px',}}/>
                                    <label htmlFor="general1">Yes</label>
                                </div>
                                <div className='felon' style={{paddingInline:'10px'}}>
                                    <input type="checkbox" id="general2" name="vehicle2" value="no"  style={{fontSize:'15px'}}/>
                                    <label htmlFor="general2">No</label>
                                </div>
                            </div><br></br>

                            <div className='genral-group3'style={{display:'inline-flex'}}>
                                <p style={{fontSize:"15px"}}>"Do you have a valid driver's license?"</p><t></t>
                                <div className='license' style={{paddingInline:'10px'}}>
                                    <input type="checkbox" id="general1" name="license1" value="yes" style={{fontSize:'15px',}} />
                                    <label htmlFor="general1">Yes</label>
                                </div>
                                <div className='license' style={{paddingInline:'10px'}}>
                                    <input type="checkbox" id="general2" name="license2" value="no"  style={{fontSize:'15px'}}/>
                                    <label htmlFor="general2">No</label>
                                </div>
                            </div><br></br>

                            <div className='general-group4'style={{display:'inline-flex'}}>
                                <p style={{fontSize:'15px'}}>Do you have a clean MVR?</p><t></t>
                                <div className='MVR' style={{paddingInline:'10px'}}>
                                    <input type="checkbox" id="general1" name="MVR1" value="yes" style={{fontSize:'15px',}} />
                                    <label htmlFor="general1">Yes</label>
                                </div>
                                <div className='felon' style={{paddingInline:'10px'}}>
                                    <input type="checkbox" id="general2" name="MVR2" value="no"  style={{fontSize:'15px'}}/>
                                    <label htmlFor="general2">No</label>
                                </div>
                            </div><br></br>


                            <div className='general-group5'style={{display:'inline-flex'}}>
                                <p style={{fontSize:'15px'}}>Can you work weekends?</p><t></t>
                                <div className='weekend' style={{paddingInline:'10px'}}>
                                    <input type="checkbox" id="general1" name="weekend1" value="yes" style={{fontSize:'15px',}} />
                                    <label htmlFor="general1">Yes</label>
                                </div>
                                <div className='weekend' style={{paddingInline:'10px'}}>
                                    <input type="checkbox" id="general2" name="weekend2" value="no"  style={{fontSize:'15px'}}/>
                                    <label htmlFor="general2">No</label>
                                </div>
                            </div><br></br>

                            <div className='general-group6'style={{display:'inline-flex'}}>
                                <p style={{fontSize:'15px'}}>Have you ever driven a box truck?</p><t></t>
                                <div className='boxtruck' style={{paddingInline:'10px'}}>
                                    <input type="checkbox" id="general1" name="boxtruck1" value="yes" style={{fontSize:'15px',}} />
                                    <label htmlFor="general1">Yes</label>
                                </div>
                                <div className='boxtruck' style={{paddingInline:'10px'}}>
                                    <input type="checkbox" id="general2" name="boxtruck2" value="no"  style={{fontSize:'15px'}}/>
                                    <label htmlFor="general2">No</label>
                                </div>
                            </div><br></br>

                            <div className='general-group7'style={{display:'inline-flex'}}>
                                <p style={{fontSize:'15px'}}>Do you smoke cigarettes?</p><t></t>
                                <div className='smoke' style={{paddingInline:'10px'}}>
                                    <input type="checkbox" id="general1" name="smoke1" value="yes" style={{fontSize:'15px',}} />
                                    <label htmlFor="general1">Yes</label>
                                </div>
                                <div className='smoke' style={{paddingInline:'10px'}}>
                                    <input type="checkbox" id="general2" name="smoke2" value="no"  style={{fontSize:'15px'}}/>
                                    <label htmlFor="general2">No</label>
                                </div>
                            </div><br></br>

                            <div className='general-group8'style={{display:'inline-flex'}}>
                                <p style={{fontSize:'15px'}}>Have you ever been arrested for a drug related activity?</p><t></t>
                                <div className='drug' style={{paddingInline:'10px'}}>
                                    <input type="checkbox" id="general1" name="drug1" value="yes" style={{fontSize:'15px',}} />
                                    <label htmlFor="general1">Yes</label>
                                </div>
                                <div className='drug' style={{paddingInline:'10px'}}>
                                    <input type="checkbox" id="general2" name="drug2" value="no"  style={{fontSize:'15px'}}/>
                                    <label htmlFor="general2">No</label>
                                </div>
                            </div><br></br>

                            <div className='general-group9'style={{display:'inline-flex'}}>
                                <p style={{fontSize:'15px'}}>Do you live within 10 miles of the CLS Medical office?</p><t></t>
                                <div className='distance' style={{paddingInline:'10px'}}>
                                    <input type="checkbox" id="general1" name="distance1" value="yes" style={{fontSize:'15px',}} />
                                    <label htmlFor="general1">Yes</label>
                                </div>
                                <div className='distance' style={{paddingInline:'10px'}}>
                                    <input type="checkbox" id="general2" name="distance2" value="no" style={{fontSize:'15px'}}/>
                                    <label htmlFor="general2">No</label>
                                </div>
                            </div><br></br>
                    
                            <Divider style={{height:'4px', backgroundColor:'black'}}></Divider>

                            <div className='upload'style={{}}>
                                <p>Upload Resume:</p><t></t>
                                <div className='resume' style={{paddingInline:'10px'}}>
                                    <input type="file" id="resumeFile" name="filename" style={{ border: 'solid rgb(102, 133, 187)'}} />
                                </div>
                            </div><br></br>
                            
                            <div className='button-row' style={{width:'100%', textAlign:'center', paddingTop:'20px'}}>
                                <Button variant='outlined' type= 'submit' className='primary-btn submit' style={{width:'fit-content', fontSize:'large', border:'2px solid #dc0000',color: '#dc0000'}}>Submit</Button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </CardContent>
    </Card>    
    );
}