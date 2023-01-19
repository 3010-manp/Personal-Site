import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './contactMe.css'

export const ContactMe = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_19rug9g', 'template_o7588se', form.current, 'f9-MWbdKF4Nn-qqTX')
    .then((result) => {
        console.log(result.text);
        alert("Message Sent Successfuly");
        e.target.reset();
    }, (error) => {
        console.log(error.text);
        alert("Error!!");
    });
  };

  return (
    <div className="form-container">
    <form className='disable-blur' ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" required />
      <label>Email</label>
      <input type="email" name="user_email" required />
      <label>Message</label>
      <textarea name="message" required/>
      <button type="submit" className='btn'>Submit</button>
    </form>
    </div>
  );
};
