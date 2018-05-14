import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default class Home extends Component {
    render() {
        return (
            <div className='home-top-div'>
                <div className="centered-div">
                    <div className="block">
                        <h3 className='centered-div-text'>Hello, I'm Alan!</h3>
                        <div className='home-div-buttons'>
                            <Link to="/about" className='home-buttons-link'>
                                <button className='home-buttons'>About Me</button>
                            </Link>
                            <Link to="/projects" className='home-buttons-link'>
                                <button  className='home-buttons'>My Projects</button>
                            </Link>
                        </div>
                    </div>
                </div>
            
           </div>
        )
    }
}

