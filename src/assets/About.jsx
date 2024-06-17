import React from 'react';
import './About.css'; // Import the CSS file for styling
import profileImage from '../assets/profile.png'; // Import the image from the correct path

const About = () => {
    return (
        <div className="about">
            <h1>About</h1>
            <p className="quote">"Computer science engineering students face tough challenges mastering algorithms, languages, and problem-solving. Yet, driven by passion, they persist, undeterred by setbacks. Their dedication and hard work propel them to success, making impactful contributions in the tech world."</p>
            <div className="profile">
                <img 
                    src={profileImage} 
                    alt="Yashika Thakur" 
                    className="profile-image" 
                />
                <div className="profile-details">
                    <h2>Computer Science Engineering Student</h2>
                    <p><em>I am an ITM University Student.</em></p>
                    <ul>
                        <li><strong>Birthday:</strong> 14 September 2005</li>
                        <li><strong>Age:</strong> 18</li>
                        <li><strong>Website:</strong> www.example.com</li>
                        <li><strong>Phone:</strong> 7021019540</li>
                        <li><strong>City:</strong> Thane, Mumbai</li>
                        <li><strong>Degree:</strong> Btech</li>
                        <li><strong>Email:</strong> thakuryashika32@gmail.com</li>
                    </ul>
                    <p className="paras">I have completed my 10th from SSC Boards and 12th from HSC Boards. I was studying in Don Bosco High School and Junior College for my 10th and 12th.</p>
                </div>
            </div>
        </div>
    );
};

export default About;
