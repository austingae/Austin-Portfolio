import React from 'react'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useState } from 'react';

import './ContactUs.css';

const ContactUs = () => {

  let [isSent, setIsSent] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_6638i9p', 'template_axczave', form.current, 'toI3mLt4LXhm_eQMq')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset();
  };

  return (
    <form className='contact-me-form'ref={form} onSubmit={sendEmail}>
      <h2 className='contact-me-form__title'>Contact Me</h2>
      <div className='contact-me-form__item'>
        <label className='contact-me-form__item-label'>Your Name</label>
        <input className='contact-me-form__input' type="text" name="name" />
      </div>
      <div className='contact-me-form__item'>
        <label className='contact-me-form__item-label'>Email</label>
        <input className='contact-me-form__input' type="email" name="email" />
      </div>
      <div className='contact-me-form__item'>
        <label className='contact-me-form__item-label'>Message</label>
        <textarea className='contact-me-form__item-message' name="content" />
      </div>
      <div className='contact-me-form__submit-button-container'>
        <input 
        className='contact-me-form__submit-button' 
        type="submit" 
        value="Send" 
        onClick={() => {
          setIsSent(true);
        }}/>
      </div>
      {isSent && <div className='contact-me-form__confirmation'>Thank you for contacting me. I will get back to you soon.</div>}
    </form>
  );
}

export default ContactUs