import React from 'react';
import emailjs from 'emailjs-com';
import '../App.css';

const ContactForm = () => {

  function sendEmail(event) {
    event.preventDefault();

    emailjs.sendForm('gmail', 'template_9ickxzh', event.target, 'user_tYW7qTvnMz5a23GTLMKjy')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      event.target.reset()
  }

  return (
    <div className="container">
    <h1 class="has-text-white">Contact</h1>
    <form onSubmit={sendEmail} class="has-text-white">
      <input type="text" name="name" />
      <label>Name</label>
      <input type="text" name="email" />
      <label>Email</label>
      <input type="text" name="subject" />
      <label>Subject</label>
      <br />
      <textarea name="message" placeholder="Your Message" />
      <input type="submit" value="Send Message" />
    </form>
    </div>
  );
}

export default ContactForm