import React, { Component } from 'react';
import './campus.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

class Campus extends Component {

    render() { 
        return (
            <>
             <div className='container my-2'>
                <div className='row text-center campus'>
                    <h3 className='text-primary mt-5 mb-2'>GALLERY</h3>
                    <h1 className='mb-5'>Campus Photos</h1> 
                    <div className='col-12 col-sm-6 col-lg-3'>
                        <img className='p-2 p-lg-0 ' src="https://images.unsplash.com/photo-1589696709103-c76bf8b5fa7f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div className='col-12 col-sm-6 col-lg-3'>
                        <img className='p-2 p-lg-0 ' src="https://plus.unsplash.com/premium_photo-1682787494953-33e83bc527d1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div className='col-12 col-sm-6 col-lg-3'>
                        <img className='p-2 p-lg-0 ' src="https://images.unsplash.com/photo-1628887591063-c69fce98101f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div className='col-12 col-sm-6 col-lg-3'>
                        <img className='p-2 p-lg-0 ' src="https://images.unsplash.com/photo-1494809610410-160faaed4de0?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div>
                     <button className='campus-btn mt-5'>See more here <FontAwesomeIcon className='px-2' icon={faArrowRight} /> </button>
                    </div>
                </div>
             </div>
            </>
        );
    }
}
 
export default Campus;