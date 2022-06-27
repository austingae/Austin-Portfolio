import React from 'react'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const ContactUs = () => {

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
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="content" />
      <input type="submit" value="Send" />
    </form>
  );
}

export default ContactUs