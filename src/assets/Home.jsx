import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Home.css';
import backgroundImage from '../assets/portfolio2.avif';

const Home = () => {
    return (
        <div className="home" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <h1>Yashika Thakur</h1>
            <p>I'm a First Year Btech Student</p>
            <Link to="/about">
                <button className="about-me-button">About Me</button>
            </Link>
        </div>
    );
};

export default Home;
