import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Contact Me</h1>
            <div className="contact-info">
                <p>If you have any inquiries or would like to get in touch, feel free to reach out to me through the following channels:</p>
                <ul>
                    <li><strong>Email:</strong> 2023.yashikat@isu.ac.in</li>
                    <li><strong>Phone:</strong> 7021019540</li>
                    <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/yashika-thakur-6b6760283/" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
                    <li><strong>GitHub:</strong> <a href="https://github.com/Yashika1311" target="_blank" rel="noopener noreferrer">Github</a></li>
                </ul>
            </div>
            <div className="contact-form">
                <h2>Send me a Message</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Your Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
