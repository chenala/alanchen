import React, { Component } from 'react'
import { Grid, Row, Col, Image, Button, Badge, Jumbotron } from 'react-bootstrap'
import './Projects.css'

export default class Projects extends Component {
    render() {
        return (
            <div>
                <Grid>
                <Jumbotron className='projects-jumbotron'>
                    <h2>My Projects</h2>
                    <p>My Github account contains some of the projects listed below:</p>
                    <a href="https://github.com/tychodragon" rel='noopener noreferrer' target="_blank">
                        <Button bsStyle="primary">Go to my Github</Button>
                    </a>
                </Jumbotron>
                    <Row className='show-grid text-center'>
                        <Col xs={12} sm={4} className="projects-person-wrapper">
                            <Image src='assets/RecipeMatchLogoRect.png' circle className='projects-profile-pic' />
                            <h3>RecipeMatch</h3>
                            <p>This is an app takes a photo from the gallery or camera, and it will return a list of
                                matching recipes based on what is identified in the given picture. The user is allowed
                                set requirements to filter out recipes and get exact recipe that they crave! The app uses
                                Clarfai API for identifying all kinds of food in the image.
                            </p>
                            <Badge style={{margin:2}}>React-Native</Badge>
                            <Badge style={{margin:2}}>Redux</Badge>
                            <Badge style={{margin:2}}>App Development</Badge>
                            <Badge style={{margin:2}}>AI</Badge>
                        </Col>
                        <Col xs={12} sm={4} className="projects-person-wrapper">
                            <Image src='assets/meowth-blue.png' circle className='projects-profile-pic' />
                            <h3>Meowth Banking Android App</h3>
                            <p>This app is banking simulator that provides a mobile interface for customers to manage their bank account.
                                The app provides an interface for 3 roles: Customers, Bank Tellers, and Admins.
                                All data is saved and stored on the mobile device with serialization.
                            </p>
                            <Badge style={{margin:2}}>Java</Badge>
                            <Badge style={{margin:2}}>XML</Badge>
                            <Badge style={{margin:2}}>Android App Development</Badge>
                        </Col>
                        <Col xs={12} sm={4} className="projects-person-wrapper">
                            <Image src='assets/stockSimulator.jpg' circle className='projects-profile-pic' />
                            <h3>Stock Portfolio Simulation Web App</h3>
                            <p>This simulator was created for people who want to practice buying and selling stocks from real data without risking real money.
                                The app fetches and provides stock data from an API and displays useful information about the status of the user's portfolio. 
                            </p>
                            <Badge style={{margin:2}}>JQuery</Badge>
                            <Badge style={{margin:2}}>NodeJS</Badge>
                            <Badge style={{margin:2}}>MongoDB</Badge>
                            <Badge style={{margin:2}}>HTML</Badge>
                            <Badge style={{margin:2}}>CSS</Badge>
                        </Col>
                    </Row>
                </Grid>


                <Grid>
                    <Row className='projects-show-grid text-center'>
                        <Col xs={12} sm={4} className="projects-person-wrapper">
                            <Image src='assets/reactLogo.png' circle className='projects-profile-pic' />
                            <h3>My Website</h3>
                            <p>This is a single page website that you are currrently viewing is powered by React with routes to render appropriate components.
                                React-bootstrap is also used.
                            </p>
                            <Badge style={{margin:2}}>React</Badge>
                            <Badge style={{margin:2}}>HTML</Badge>
                            <Badge style={{margin:2}}>CSS</Badge>
                        </Col>
                        <Col xs={12} sm={4} className="projects-person-wrapper">
                            <Image src='assets/spaceShooter.png' circle className='projects-profile-pic' />
                            <h3>Android Space Shooter</h3>
                            <p>This is a classic space shooting game for Android devices.
                                The player controls the spaceship to fight an endless wave of enemies.
                                Coins can be collected to buy upgrades and break high scores.
                            </p>
                            <Badge style={{margin:2}}>Java</Badge>
                            <Badge style={{margin:2}}>XML</Badge>
                            <Badge style={{margin:2}}>Android App Development</Badge>
                            <Badge style={{margin:2}}>Game Development</Badge>
                        </Col>
                        <Col xs={12} sm={4} className="projects-person-wrapper">
                            <Image src='assets/chatbot.png' circle className='projects-profile-pic' />
                            <h3>Detrite Messenger Chatbot</h3>
                            <p>Detrite is a chatbot that can hold a basic conversation and uses APIs to provide information about the Detroit Transit 
                                and weather around the world.
                            </p>
                            <Badge style={{margin:2}}>Python</Badge>
                            <Badge style={{margin:2}}>AI</Badge>
                        </Col>
                    </Row>
                </Grid>


            </div>
        )
    }
}
