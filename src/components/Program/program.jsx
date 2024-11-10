import React, { Component } from 'react';
import './program.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpenReader , faUserGraduate , faAward } from '@fortawesome/free-solid-svg-icons';

class Program extends Component {

    render() { 
        return (
            <>
             <div className='container mt-5 mb-2 program'>
                <div className='row justify-content-center'>
                    <div className='col-12 text-center'>
                    <h3 className='text-primary mt-5 mb-2'>OUR PROGRAM</h3>
                    <h1 className='mb-4'>What We Offer</h1>   
                    <div className='row displaying-images mt-5 '>
                      <div className='col-12 col-md-6 col-lg-4  position-relative'>
                        <img className='mb-4 mb-lg-0 p-2' src='https://images.unsplash.com/photo-1721441932559-6fd00cd49e46?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="" />
                        <div className='params-icon-box'>
                          <FontAwesomeIcon className='params-icons mb-3' icon={faBookOpenReader} />
                          <h6>Graduation Degree</h6>
                        </div>
                      </div>
                      <div className='col-12 col-md-6 col-lg-4  position-relative'> 
                        <img className='mb-4 mb-lg-0 p-2' src='https://images.unsplash.com/photo-1684360390230-e89152bbcc61?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="" />
                        <div className='params-icon-box'>
                          <FontAwesomeIcon className='params-icons mb-3' icon={faAward} />
                          <h6>Masters Degree</h6>
                        </div>
                      </div>
                      <div className='col-12 col-md-12 col-lg-4 position-relative'>
                      <img className='mb-4 mb-lg-0 p-2' src='https://images.unsplash.com/photo-1608485439523-25b28d982428?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="" />
                      <div className='params-icon-box'>
                        <FontAwesomeIcon className='params-icons mb-3' icon={faUserGraduate} />
                        <h6>Post Graduation</h6>
                      </div>
                      </div>
                    </div>
                    </div>
                </div>
             </div>
            </>
        );
    }
}
 
export default Program;