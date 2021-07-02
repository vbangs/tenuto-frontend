import React from 'react';
import emailjs from 'emailjs-com';
import '../App.css';
import { Redirect } from "react-router-dom";

const ContactForm = () => {

  const contacth1 = {
    padding: "0 0 0 15%",
  }
  
  const contactStyle = {
    padding: "0 15%"
  }

  function sendEmail(event) {
    event.preventDefault();

    emailjs.sendForm('gmail', 'template_9ickxzh', event.target, 'user_tYW7qTvnMz5a23GTLMKjy')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      event.target.reset()
      alert("Message Sent")
  }

  return (
    <div className="container">
    <h1 style={contacth1} class="has-text-white">Contact</h1>
    <form style={contactStyle} onSubmit={sendEmail} class="has-text-white">
      <input type="text" class="has-text-white" placeholder="Name" name="name" />
      <input type="text" class="has-text-white" placeholder="Email Address" name="email" />
      <input type="text" class="has-text-white" placeholder="Subject" name="subject" />
      <br />&nbsp;
      <textarea class="has-text-white" placeholder="Message" name="message" />
      <input class="button is-medium has-text-white is-success is-outlined" type="submit" value="Send Message" />
    </form>
    </div>
  );
}

export default ContactForm