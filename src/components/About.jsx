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
                        I have created many projects through hackathons and personal projects (see some of them on the projects page). I was the leader of my high school computer programming club. I was a webmaster for the University of Toronto Badminton Club.
                        These experiences have helped me become a better developer.<br/>
                        <br/>
                        Apart from programming, I enjoy swimming, skiing, and badminton.
                    </p>
                    <h3 className='about-me'>Internships</h3>
                    <h4>Software Developer Intern - Evenset Inc.</h4>
                    <p>
                        At Evenset, I collaborated with talented developers on several projects, all of which are currently being used in the health-care industry. We follow
                        the AGILE software development practices and I took part in sprint planning, developing new features for our products,
                        participate in code reviews, and writing unit tests to ensure code stability.
                        <br/>
                        <br/>
                        The technologies I used in this internship were: 
                        React, React-Native, MobX, Redux, JavaScript, Node Express, InfluxDB, MSSQL, and AWS.
                        <br/>
                        <br/>
                        These are the projects I worked on:
                        <br/>
                        - Medication Management App: A mobile application that helps manage patients prescribed medication.
                        The app has a database which stores information about the medication, and contact information of pharamcies that are registered in the application.
                        The app gives reminders, drug entries and refill orders. It also keeps a log of history of medication usage in case a caregiver might want to track the patient's medication
                        activity on the app.
                        <br/>
                        <br/>
                        - Treatment Planning Web-Interace: A web interface which facilitates the process of planning 
                        a treatment so doctors can efficiently provide the right treatment for their patients. The web-interface parses DICOM files to get information about the patient as well as 
                        information about the condition of specifc organs and using this data, give options and help the doctor construct the treatment plan.
                        <br/>
                        <br/>
                        - HealthCare IOT Application: Our team collaborated with Sensassure to build a brief checking system for nursing homes.
                        The idea of this system is to facilitate and greatly increase caregiver response times to their patients (with low bladder control) when the patients require their briefs to be changed.
                        <br/>
                        This is the general overview of the system:
                        <br/>
                        A small device is attached to a patient's brief which monitors the wetness level of the brief. This device sends data periodically to a webserver which sends updates to the mobile devices that are carried by caregivers in the nursing home.
                        This way, caregivers are able to receive alerts and track wetness levels of their patients in an efficient manner.
                    </p>
                </div>
            </div>
        )
    }
}

