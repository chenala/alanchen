import React, { Component } from 'react'
import './About.css'

export default class About extends Component {
    render() {
        return (
            <div className="about-top-div">
                <div className='text-container'>
                    <h3 className='about-me'>About Me</h3>
                    <p>I am in my 3rd year undergrad studying computer science at the University of Toronto.<br/>
                        Some notable courses that I have taken introduced me to concepts of software development, data structures, algorithms, databases, and web development.<br/>
                        <br/>
                        I am familiar with: Python, Java, C, C++, HTML, CSS, JavaScript, NodeJS, MongoDB, SQL, and React.<br/>
                        <br/>
                        I have created many projects through hackathons and personal projects. I was the leader of my high school computer programming club. I was a webmaster for the University of Toronto Badminton Club.
                        These experiences have helped me become a better developer.<br/>
                        <br/>
                        Apart from programming, I enjoy swimming, skiing, and badminton.
                    </p>
                </div>
            </div>
        )
    }
}

