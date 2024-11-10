import React, { Component } from 'react';
import './hero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'; 

class Hero extends Component {

    render() { 
        return (
            <div className='container-fluid hero-background align-content-center hero'>
                <div className='row justify-content-center'>
                    <div className='col-12 col-md-9 col-lg-6 text-white text-center'>
                        <h1 id='hero-h1'>We ensure better education for a better world</h1>
                        <p className='mt-3 mb-5'>Our cutting-age curriculum is designed to empower the students with the knowledged , skills and experiences needed to excel in the dynamic field of education</p>
                        <button className='hero-btn'>Explore more
                            <FontAwesomeIcon className='px-2' icon={faArrowRight} />
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Hero;