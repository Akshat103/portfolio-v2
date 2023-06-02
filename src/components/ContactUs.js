import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_vzhry7q', 'template_8qe1gjj', document.getElementById('contact-form'), 'AfZ2YVWXffHclCoJW')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully');
      })
      .catch((error) => {
        console.error('Error sending message:', error);
        alert('Error sending message. Please try again later.');
      });

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact">
      <div className="contact-container">

        <div className="illustration">
          <img src="images\contact.png" alt="Illustration" />
        </div>

        <div className="form-container">

          <div className="contact-form">

            <form id="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-column">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-column">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="message-div">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactForm;