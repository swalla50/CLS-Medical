
import Button from '@material-ui/core/Button';
import React from 'react';
import emailjs from 'emailjs-com';
import {useState} from 'react';




    function sendEmail(e){
        e.preventDefault();

    emailjs.sendForm('service_r9b69jg', 'template_ocb89za', e.target, 'user_OIuQ0ZFNNH6wSdbZCzQet')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }

    
    
    
     export default function ContactForm(){
        const [email, setEmail] = useState("");
        const [username, setName] = useState("");
        const [phone, setPhone] = useState("");
        const [subject, setSubject] = useState("");
        const [message, setMessage] = useState("");
        function handleSubmit(e) {
            e.preventDefault();
            console.log(email, username, phone, subject, message);
            // clearing the values
            setEmail("");
            setName("");
            setPhone("");
            setSubject("");
            setMessage("");
        }

        return(
        <form id='form-contact' onSubmit={sendEmail}>
            <input onChange={(e) => setName(e.target.value)} placeholder='Name' value={username} id ='name' type='text' className='form-control' name='name'
            style={{borderLeft:'none',borderRight:'none', borderTop: 'none', borderBottom:'solid #6685bb',paddingBottom:'3%'}} />
            <input onChange={(e) => setEmail(e.target.value)} placeholder='Email' value={email} id ='email' type='email' className='form-control' name='email'
            style={{borderLeft:'none',borderRight:'none', borderTop: 'none', borderBottom:'solid #6685bb', paddingBottom:'3%'}} />
            <input onChange={(e) => setPhone(e.target.value)} placeholder='Phone Number' value={phone} id ='PhoneNumber' type='number' className='form-control' name='phone'
            style={{borderLeft:'none',borderRight:'none', borderTop: 'none', borderBottom:'solid #6685bb', paddingBottom:'3%'}} />
            <input onChange={(e) => setSubject(e.target.value)} placeholder='Subject' value={subject} id ='subject' type='text' className='form-control' name='subject'
            style={{borderLeft:'none',borderRight:'none', borderTop: 'none', borderBottom:'solid #6685bb', paddingBottom:'3%'}} />
            <input onChange={(e) => setMessage(e.target.value)} placeholder='Message' value={message} id ='message' className='form-control' rows='1' name='message'
            style={{borderLeft:'none',borderRight:'none', borderTop: 'none', borderBottom:'solid #6685bb', paddingBottom:'100px'}} />
            <Button variant='outlined' type= 'submit' onClick={handleSubmit} value='Send' className='primary-btn submit' style={{marginTop:'20px',width:'fit-content', fontSize:'large', border:'2px solid #dc0000',color: '#dc0000'}}>Submit</Button>
        </form>
        );
    }



