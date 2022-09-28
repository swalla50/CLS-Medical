import Button from '@material-ui/core/Button';
import { React, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import emailjs from 'emailjs-com';
import { Divider } from '@material-ui/core';
import '../styles/EmploymentForm.module.css';

function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_0vpivnq', 'template_ifl9jsv', 'form#form-contact', 'user_OIuQ0ZFNNH6wSdbZCzQet')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
}

export default function EmploymentForm() {


    const [email, setEmail] = useState("");
    // const [ss, setSS] = useState("");
    // const [dob, setDOB] = useState("");
    // const [city, setCity] = useState("");
    // const [state,setState] = useState("");
    // const [zip, setZip] = useState("");
    // const [address, setAddress] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [file, setFile] = useState("");
    // const [ED1, setED1] = useState("");
    // const [ED2, setED2] = useState("");
    // const [ED3, setED3] = useState("");
    // const [Grad1, setGrad1] = useState("");
    // const [Grad2, setGrad2] = useState("");
    // const [schoolInfo, setschoolInfo] = useState("");
    // const [reference1, setreference1] = useState("");
    // const [reference2, setreference2] = useState("");
    // const [reference3, setreference3] = useState("");
    // const [reference4, setreference4] = useState("");
    // const [reference5, setreference5] = useState("");
    // const [general1, setgeneral1] = useState("");
    // const [general2, setgeneral2] = useState("");
    // const [general3, setgeneral3] = useState("");
    // const [general4, setgeneral4] = useState("");
    // const [general5, setgeneral5] = useState("");
    // const [general6, setgeneral6] = useState("");
    // const [general7, setgeneral7] = useState("");
    // const [general8, setgeneral8] = useState("");
    // const [general9, setgeneral9] = useState("");


    function handleSubmit(e) {
        e.preventDefault();
        console.log(email, phone, subject, message);
        // clearing the values
        setEmail("");
        setName("");
        // setPhone("");
        setSubject("");
        setMessage("");
        setFile("");
        // setCity("");
        // setState("");
        // setZip("");
        // setAddress("");
        // setDOB("");
        // setSS("");
        // setED1("");
        // setED2("");
        // setED3("");
        // setGrad1("");
        // setGrad2("");
        // setschoolInfo("");
        // setreference1("");
        // setreference2("");
        // setreference3("");
        // setreference4("");
        // setreference5("");
        // setgeneral1("");
        // setgeneral2("");
        // setgeneral3("");
        // setgeneral4("");
        // setgeneral5("");
        // setgeneral6("");
        // setgeneral7("");
        // setgeneral8("");
        // setgeneral9("");
    }
    return (
        <Card>
            <CardContent style={{ paddingBottom: '55px' }}>
                <div className='contact-form-container' style={{ paddingInline: '5%' }}>
                    <form enctype="multipart/form-data" method="post" id='form-contact' onSubmit={sendEmail} style={{ background: 'white', borderRadius: '20px', padding: '10px', boxShadow: '0 32px 20px rgb(0 0 0 / 26%)' }}>
                        <div className='form-group'>
                            <div className='contactrow' style={{ textAlign: 'center' }}>
                                <h2>Come Join the CLS Medical Team!</h2>
                                <div className='col-md-6' style={{ paddingBottom: '3%' }}>
                                    <input placeholder='Name' onChange={(e) => setName(e.target.value)} id='name' type='text' className='form-control' name='name' value={name}
                                        style={{ borderLeft: 'none', borderRight: 'none', borderTop: 'none', borderBottom: 'solid #6685bb', padding: '0px', width: '50%' }} />
                                </div>
                                {/* <div className='form-group' onChange={(e) => setAddress(e.target.value)} style={{paddingBottom:'3%'}}>
                                <input placeholder='Street Address' id ='address' type='text' className='form-control' name='address' value ={address}
                                style={{borderLeft:'none',borderRight:'none', borderTop: 'none', borderBottom:'solid #6685bb', width:'50%'}} />
                            </div>
                            <div className='address-group'>
                                <div className='form-group' style={{paddingBottom:'3%'}}>
                                    <input placeholder='City'onChange={(e) => setCity(e.target.value)} id ='city' type='text' className='form-control' rows='1' name='city' value={city}
                                    style={{padding:'0px',borderLeft:'none',borderRight:'none', borderTop: 'none', borderBottom:'solid #6685bb'}} />
                                </div>
                                <div className='col-md-6' style={{paddingBottom:'3%'}}>
                                    <input placeholder='State' onChange={(e) => setState(e.target.value)} id ='state' type='text' className='form-control' name='state' value = {state}
                                    aria-describedby='emailHelp'   style={{borderLeft:'none',borderRight:'none', borderTop: 'none', borderBottom:'solid #6685bb'}} />
                                </div>
                                <div className='col-md-6' style={{paddingBottom:'3%'}}>
                                    <input placeholder='Zip Code' onChange={(e) => setZip(e.target.value)} id ='zip' type='text' className='form-control' name='zip' value = {zip}
                                    aria-describedby='emailHelp'   style={{borderLeft:'none',borderRight:'none', borderTop: 'none', borderBottom:'solid #6685bb'}} />
                                </div>
                            </div> */}

                                <div className='address-group'>
                                    <div className='form-group' style={{ paddingBottom: '3%' }}>
                                        <input placeholder='Email' onChange={(e) => setEmail(e.target.value)} id='email' type='email' className='form-control' rows='1' name='email' value={email}
                                            style={{ padding: '0px', borderLeft: 'none', borderRight: 'none', borderTop: 'none', borderBottom: 'solid #6685bb', width: '50%' }} />
                                    </div>
                                    {/* <div className='col-md-6' style={{paddingBottom:'3%'}}>
                                    <input placeholder='Date of Birth' onChange={(e) => setDOB(e.target.value)} id ='dob' type='text' className='form-control' name='dob' value = {dob}
                                    style={{borderLeft:'none',borderRight:'none', borderTop: 'none', borderBottom:'solid #6685bb'}} />
                                </div>
                                <div className='col-md-6' style={{paddingBottom:'3%'}}>
                                    <input placeholder='Social Security' onChange={(e) => setSS(e.target.value)} id ='zip' type='text' className='form-control' name='ss' value = {ss}
                                    style={{borderLeft:'none',borderRight:'none', borderTop: 'none', borderBottom:'solid #6685bb'}} />
                                </div> */}
                                </div>
                                <Divider style={{ height: '4px', backgroundColor: 'black' }}></Divider>
                                {/* <h2>Education</h2>
                            <div className='education-group1'style={{display:'inline-flex'}}>
                                <p>Highest Level of Education:</p><t></t>
                                <div className='checkbox1' style={{paddingInline:'10px'}}>
                                    <input type="checkbox" onChange={(e) => setED1(e.target.value)} id="education1" name="education1" value={ED1} />
                                    <label htmlFor="education1">High School</label>
                                </div>
                                <div className='checkbox1' style={{paddingInline:'10px'}}>
                                    <input type="checkbox" onChange={(e) => setED2(e.target.value)} id="education2" name="eductation2"  value={ED2}/>
                                    <label htmlFor="education2"> College</label>
                                </div>
                                <div className='checkbox1' style={{paddingInline:'10px'}}>
                                    <input type="checkbox" onChange={(e) => setED3(e.target.value)}id="education3" name="education3" value={ED3}/>
                                    <label htmlFor="education3"> Trade School</label>
                                </div>
                            </div><br></br>

                            <div className='education-group2'style={{display:'inline-flex'}}>
                                <p>Did you graduate?:</p><t></t>
                                <div className='checkbox1' style={{paddingInline:'10px'}}>
                                    <input type="checkbox" onChange={(e) => setGrad1(e.target.value)}id="graduate1" name="graduate1" value={Grad1}/>
                                    <label htmlFor="graduate1">Yes</label>
                                </div>
                                <div className='checkbox1' style={{paddingInline:'10px'}}>
                                    <input type="checkbox" onChange={(e) => setGrad2(e.target.value)}id="graduate2" name="graduate2"  value={Grad2}/>
                                    <label htmlFor="graduate2">No</label>
                                </div>
                            </div><br></br>

                            <div className='education-group2'style={{}}>
                                <p>Name of School(s), Year Completed, Degree:</p><t></t>
                                <div className='schoolinfo' style={{paddingInline:'10px', }}>
                                    <input type="text" onChange={(e) => setschoolInfo(e.target.value)} id="school" name="school" style={{paddingBottom:'100px', width:'50%', border: 'solid rgb(102, 133, 187)'}} value={schoolInfo} />
                                </div>
                            </div><br></br>

                            <Divider style={{height:"4px", backgroundColor:"black"}}></Divider>

                            <h2>References</h2>
                            <h3>Please list 5 professional references (no family). Be sure to include Name, Contact Phone Number and the Number of Years they've known you.</h3>
                            <div className='refence-group'style={{}}>
                                <p>Reference #1:</p><t></t>
                                <div className='reference' style={{paddingInline:'10px'}}>
                                    <input type="text" onChange={(e) => setreference1(e.target.value)} id="reference1" name="reference1" style={{paddingBottom:'70px', width:'50%', border: 'solid rgb(102, 133, 187)'}} value={reference1}/>
                                </div>
                            </div><br></br>
                            <div className='refence-group'style={{}}>
                                <p>Reference #2:</p><t></t>
                                <div className='reference' style={{paddingInline:'10px'}}>
                                    <input type="text" onChange={(e) => setreference2(e.target.value)} id="reference2" name="reference2" style={{paddingBottom:'70px', width:'50%', border: 'solid rgb(102, 133, 187)'}} value={reference2}/>
                                </div>
                            </div><br></br>
                            <div className='refence-group'style={{}}>
                                <p>Reference #3:</p><t></t>
                                <div className='reference' style={{paddingInline:'10px'}}>
                                    <input type="text" onChange={(e) => setreference3(e.target.value)} id="reference3" name="reference3" style={{paddingBottom:'70px', width:'50%', border: 'solid rgb(102, 133, 187)'}} value={reference3} />
                                </div>
                            </div><br></br> */}
                                {/* <div className='refence-group'style={{}}>
                                <p>Reference #4:</p><t></t>
                                <div className='reference' style={{paddingInline:'10px'}}>
                                    <input type="text" onChange={(e) => setreference4(e.target.value)} id="reference4" name="reference4" style={{paddingBottom:'70px', width:'50%', border: 'solid rgb(102, 133, 187)'}} value={reference4} />
                                </div>
                            </div><br></br>
                            <div className='refence-group'style={{}}>
                                <p>Reference #5:</p><t></t>
                                <div className='reference' style={{paddingInline:'10px'}}>
                                    <input type="text" onChange={(e) => setreference5(e.target.value)} id="reference5" name="reference5" style={{paddingBottom:'70px', width:'50%', border: 'solid rgb(102, 133, 187)'}} value={reference5} />
                                </div>
                            </div><br></br>

                            <Divider style={{height:'4px', backgroundColor:'black'}}></Divider>

                            <h2>General Information</h2>
                            <div className='genral-group1'style={{display:'inline-flex'}}>
                                <p style={{fontSize:'15px'}}>Are you a convicted felon?</p><t></t>
                                <div className='felon' style={{paddingInline:'10px'}}>
                                    <input type="checkbox" onChange={(e) => setgeneral1(e.target.value)} id="general1" name="felon1" value="yes" style={{fontSize:'15px',}}/>
                                    <label htmlFor="general1">Yes</label>
                                </div>
                                <div className='felon' style={{paddingInline:'10px'}}>
                                    <input type="checkbox"  onChange={(e) => setgeneral1(e.target.value)} id="general2" name="felon2" value="no"  style={{fontSize:'15px'}}/>
                                    <label htmlFor="general2">No</label>
                                </div>
                            </div><br></br>

                            <div className='general-group2'style={{display:'inline-flex'}}>
                                <p style={{fontSize:'15px'}}>Do you have a reliable vehicle?</p><t></t>
                                <div className='vehicle' style={{paddingInline:'10px'}}>
                                    <input type="checkbox"  onChange={(e) => setgeneral2(e.target.value)} id="general1" name="vehicle1" value="yes" style={{fontSize:'15px',}}/>
                                    <label htmlFor="general1">Yes</label>
                                </div>
                                <div className='felon' style={{paddingInline:'10px'}}>
                                    <input type="checkbox" onChange={(e) => setgeneral2(e.target.value)} id="general2" name="vehicle2" value="no"  style={{fontSize:'15px'}}/>
                                    <label htmlFor="general2">No</label>
                                </div>
                            </div><br></br>

                            <div className='genral-group3'style={{display:'inline-flex'}}>
                                <p style={{fontSize:"15px"}}>"Do you have a valid driver's license?"</p><t></t>
                                <div className='license' style={{paddingInline:'10px'}}>
                                    <input type="checkbox" onChange={(e) => setgeneral3(e.target.value)} id="general1" name="license1" value="yes" style={{fontSize:'15px',}} />
                                    <label htmlFor="general1">Yes</label>
                                </div>
                                <div className='license' style={{paddingInline:'10px'}}>
                                    <input type="checkbox"  onChange={(e) => setgeneral3(e.target.value)} id="general2" name="license2" value="no"  style={{fontSize:'15px'}}/>
                                    <label htmlFor="general2">No</label>
                                </div>
                            </div><br></br>

                            <div className='general-group4'style={{display:'inline-flex'}}>
                                <p style={{fontSize:'15px'}}>Do you have a clean MVR?</p><t></t>
                                <div className='MVR' style={{paddingInline:'10px'}}>
                                    <input type="checkbox"  onChange={(e) => setgeneral4(e.target.value)} id="general1" name="MVR1" value="yes" style={{fontSize:'15px',}} />
                                    <label htmlFor="general1">Yes</label>
                                </div>
                                <div className='felon' style={{paddingInline:'10px'}}>
                                    <input type="checkbox" onChange={(e) => setgeneral4(e.target.value)} id="general2" name="MVR2" value="no"  style={{fontSize:'15px'}}/>
                                    <label htmlFor="general2">No</label>
                                </div>
                            </div><br></br>


                            <div className='general-group5'style={{display:'inline-flex'}}>
                                <p style={{fontSize:'15px'}}>Can you work weekends?</p><t></t>
                                <div className='weekend' style={{paddingInline:'10px'}}>
                                    <input type="checkbox" onChange={(e) => setgeneral5(e.target.value)} id="general1" name="weekend1" value="yes" style={{fontSize:'15px',}} />
                                    <label htmlFor="general1">Yes</label>
                                </div>
                                <div className='weekend' style={{paddingInline:'10px'}}>
                                    <input type="checkbox" onChange={(e) => setgeneral5(e.target.value)} id="general2" name="weekend2" value="no"  style={{fontSize:'15px'}}/>
                                    <label htmlFor="general2">No</label>
                                </div>
                            </div><br></br>

                            <div className='general-group6'style={{display:'inline-flex'}}>
                                <p style={{fontSize:'15px'}}>Have you ever driven a box truck?</p><t></t>
                                <div className='boxtruck' style={{paddingInline:'10px'}}>
                                    <input type="checkbox" onChange={(e) => setgeneral6(e.target.value)} id="general1" name="boxtruck1" value="yes" style={{fontSize:'15px',}} />
                                    <label htmlFor="general1">Yes</label>
                                </div>
                                <div className='boxtruck' style={{paddingInline:'10px'}}>
                                    <input type="checkbox" onChange={(e) => setgeneral6(e.target.value)} id="general2" name="boxtruck2" value="no"  style={{fontSize:'15px'}}/>
                                    <label htmlFor="general2">No</label>
                                </div>
                            </div><br></br>

                            <div className='general-group7'style={{display:'inline-flex'}}>
                                <p style={{fontSize:'15px'}}>Do you smoke cigarettes?</p><t></t>
                                <div className='smoke' style={{paddingInline:'10px'}}>
                                    <input type="checkbox" onChange={(e) => setgeneral7(e.target.value)} id="general1" name="smoke1" value="yes" style={{fontSize:'15px',}} />
                                    <label htmlFor="general1">Yes</label>
                                </div>
                                <div className='smoke' style={{paddingInline:'10px'}}>
                                    <input type="checkbox" onChange={(e) => setgeneral7(e.target.value)} id="general2" name="smoke2" value="no"  style={{fontSize:'15px'}}/>
                                    <label htmlFor="general2">No</label>
                                </div>
                            </div><br></br>

                            <div className='general-group8'style={{display:'inline-flex'}}>
                                <p style={{fontSize:'15px'}}>Have you ever been arrested for a drug related activity?</p><t></t>
                                <div className='drug' style={{paddingInline:'10px'}}>
                                    <input type="checkbox" onChange={(e) => setgeneral8(e.target.value)} id="general1" name="drug1" value="yes" style={{fontSize:'15px',}} />
                                    <label htmlFor="general1">Yes</label>
                                </div>
                                <div className='drug' style={{paddingInline:'10px'}}>
                                    <input type="checkbox" onChange={(e) => setgeneral8(e.target.value)} id="general2" name="drug2" value="no"  style={{fontSize:'15px'}}/>
                                    <label htmlFor="general2">No</label>
                                </div>
                            </div><br></br>

                            <div className='general-group9'style={{display:'inline-flex'}}>
                                <p style={{fontSize:'15px'}}>Do you live within 10 miles of the CLS Medical office?</p><t></t>
                                <div className='distance' style={{paddingInline:'10px'}}>
                                    <input type="checkbox" onChange={(e) => setgeneral9(e.target.value)} id="general1" name="distance1" value="yes" style={{fontSize:'15px',}} />
                                    <label htmlFor="general1">Yes</label>
                                </div>
                                <div className='distance' style={{paddingInline:'10px'}}>
                                    <input type="checkbox" onChange={(e) => setgeneral9(e.target.value)} id="general2" name="distance2" value="no" style={{fontSize:'15px'}}/>
                                    <label htmlFor="general2">No</label>
                                </div>
                            </div><br></br>
                
                            <Divider style={{height:'4px', backgroundColor:'black'}}></Divider> */}

                                <div className='upload' style={{}}>
                                    <p>Upload Resume:</p><t></t>
                                    <div className='resume' style={{ paddingInline: '10px', borderRadius: "20px" }}>
                                        <input type="file" id="filename" name="filename" onChange={(e) => setFile(e.target.value)} style={{ border: 'solid rgb(102, 133, 187)', borderRadius:'4px', cursor: "pointer" }} />
                                    </div>
                                </div><br></br>

                                <div className='disc-message' style={{textAlign:'left', fontSize:'11px',fontStyle:'italic'}}>
                                    <p>All qualified applicants will receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity, national origin, disability, or status as a protected veteran.</p><t></t>
                                </div><br></br>
                                <div className='button-row' style={{ width: '100%', textAlign: 'center', paddingTop: '20px'}}>
                                    <Button variant='outlined' onclick={handleSubmit} value='Send' type='submit' className='primary-btn submit' style={{ width: 'fit-content', fontSize: 'large', border: '2px solid #dc0000', color: '#dc0000' }}>Submit</Button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </CardContent>
        </Card>
    );
}