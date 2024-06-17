import React from 'react';
import './Resume.css'; // Import the CSS file for styling

const Resume = () => {
    return (
        <div className="resume">
            <div className="para">
            <h1>Resume</h1>
            <p className='parap'>First Year Engineering Student</p>
            </div>
            

            <section className="personal-info">
                <h2>Personal Information</h2>
                <div className="info-details">
                    <p><strong>Name:</strong> Yashika Pandurang Thakur</p>
                    <p><strong>Phone No.:</strong> 7021019540</p>
                    <p><strong>Email:</strong> thakuryashika32@gmail.com</p>
                    <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/yashika-thakur" target="_blank" rel="noopener noreferrer">linkedin.com/in/yashika-thakur</a></p>
                    <p><strong>GitHub:</strong> <a href="https://github.com/Yashika1311" target="_blank" rel="noopener noreferrer">github.com/Yashika1311</a></p>
                </div>
            </section>

            <section className="personal-info">
                <h2>Summary</h2>
                <div className="info-details">
                    <p>I am a first-year Computer Science Engineering student with a deep passion for delving into the expansive and ever-evolving realm of technology. I am enthusiastic about applying my foundational skills in programming, algorithms, and problem-solving to real-world situations. I am actively looking for opportunities to contribute and learn in a collaborative and innovative setting. I am eager to utilize my academic background, along with a strong commitment to continuous growth and adaptation, to make impactful contributions to projects and teams within the field of computer science.r</p>
                    
                </div>
            </section>

            <section className="personal-info">
                <h2>Skills</h2>
                <div className="info-details">
                    <ul className='ulist'>
                        <li>C Programming</li>
                        <li>Git & Github</li>
                        <li>C++ Programming</li>
                        <li>NoCode Website (Wix)</li>
                        <li>Web Development</li>
                        <li>Scratch Programming</li>
                        <li>Canva</li>
                        <li>Software Development</li>
                        <li>Algorithm</li>
                        <li>Python</li>
                        <li>NoCode App Development (Appsheet)</li>
                        <li>Communication Skills</li>
                        <li>Problem Solving</li>
                        <li>Project Planning</li>
                        <li>Teamwork</li>
                    </ul>
                    
                </div>
            </section>

            <section className="personal-info">
                <h2>Education</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Sr. No.</th>
                            <th>University/Branch</th>
                            <th>Year of Passing</th>
                            <th>Percentage</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1.</td>
                            <td>SSC</td>
                            <td>2020-2021</td>
                            <td>91%</td>
                        </tr>
                        <tr>
                            <td>2.</td>
                            <td>HSC</td>
                            <td>2022-2023</td>
                            <td>67%</td>
                        </tr>
                        <tr>
                            <td>3.</td>
                            <td>ISU</td>
                            <td>SEM-1</td>
                            <td>8.03 CGPA</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className="personal-info">
                <h2>Projects</h2>
                <div className="info-details">
                   <p>
                    Below is the Banksystem project we created in group.
                    </p>
                    <p>
                    <a href="https://github.com/Yashika1311/BankSystem" target="_blank" rel="noopener noreferrer">https://github.com/Yashika1311/BankSystem</a>
                    </p>
                    <p>Below is the No code app we made for our first hackathon</p>
                    <p>
                        Its a browser link :<a href="https://www.appsheet.com/start/514b68db-0a80-471f-bf70-855e7ec5aa74" target="_blank" rel="noopener noreferrer">Browser Link</a>

                    </p>
                    <p>
                        Its a install link : <a href="https://www.appsheet.com/newshortcut/514b68db-0a80-471f-bf70-855e7ec5aa74">Install Link</a>
                    </p>

 
                  
                    
                </div>
            </section>

            <section className="personal-info">
                <h2>Laguages</h2>
                <div className="info-details">
                    <ul className='ulist'>
                        <li>Hindi</li>
                        <li>English</li>
                        <li>Marathi</li>
                    </ul>
                    
                </div>
            </section>
        </div>
    );
};

export default Resume;
