import React from 'react';
import './Us.css'; 

export default function ContactPage() {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Princess Studio</h1>
        <p style={{color:"white"}}>We would love to hear from you. Reach out to us using the details below!</p>
      </div>

      <div className="contact-details">
        <div className="detail-item">
          <h2>Studio Location</h2>
          <p><strong>Address:</strong>Prakash Nagar,Narasaraopet,Palnadu dst,Andhra Pradesh,India.</p>
        </div>

        <div className="detail-item">
          <h2>Contact Information</h2>
          <p><strong>Email:</strong> <a href="mailto:info@princessstudio.com">princessstudio@gmail.com</a></p>
          <p><strong>Phone:</strong> <a href="tel:+18001234567">+91 9490113158</a></p>
        </div>

        <div className="detail-item">
          <h2>Social Media</h2>
          <ul style={{listStyleType:"none"}}>
            <li><a href="https://www.facebook.com/PrincessStudio" target="_blank">Facebook</a></li>
            <li><a href="https://www.instagram.com/PrincessStudio" target="_blank" >Instagram</a></li>
            <li><a href="https://www.twitter.com/PrincessStudio" target="_blank" >Twitter</a></li>
          </ul>
        </div>
      </div>

      <div className="contact-map">
        <h2>Our Location on the Map</h2>
        <div className="map-container">
         
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61292.07970410254!2d80.0092193092692!3d16.233031324106786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a80e219d5231d%3A0xdfc40d36b38556a!2sNarasaraopeta%2C%20Andhra%20Pradesh%20522601!5e0!3m2!1sen!2sin!4v1736353709771!5m2!1sen!2sin" 
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};


