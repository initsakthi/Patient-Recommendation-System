import React, { useState } from 'react';

const ContactPages = () => {
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate message being sent (you can add actual backend logic here)
    setSuccessMessage('Message sent successfully!');
    // Clear message after 5 seconds
    setTimeout(() => setSuccessMessage(''), 5000);
  };

  return (
    <div className="container-fluid pt-5">
      <div className="d-flex flex-column text-center mb-5 pt-5">
        <h4 className="text-secondary mb-3">Appoinment</h4>
        <h1 className="display-4 m-0">Contact For <span className="text-primary">Any Query</span></h1>
        {successMessage && (
          <div className="alert alert-success mt-4" role="alert">
            {successMessage}
          </div>
        )}
      </div>

      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 mb-5">
          <div className="contact-form">
            <form name="sentMessage" id="contactForm" noValidate onSubmit={handleSubmit}>
              <div className="control-group">
                <input type="text" className="form-control p-4" id="name" placeholder="Your Name" required />
                <p className="help-block text-danger"></p>
              </div>
              <div className="control-group">
                <input type="email" className="form-control p-4" id="email" placeholder="Your Email" required />
                <p className="help-block text-danger"></p>
              </div>
              <div className="control-group">
                <input type="text" className="form-control p-4" id="subject" placeholder="Subject" required />
                <p className="help-block text-danger"></p>
              </div>
              <div className="control-group">
                <textarea className="form-control p-4" rows="6" id="message" placeholder="Message" required></textarea>
                <p className="help-block text-danger"></p>
              </div>
              <div>
                <button className="btn btn-primary py-3 px-5" type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>

        <div className="col-12 mb-n2 p-0">
          <iframe
            style={{ width: "100%", height: "500px", border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.7443167411237!2d80.22097927489056!3d13.082680687236957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267d3b31fc0b3%3A0x13e12327e4c59e3c!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPages;
