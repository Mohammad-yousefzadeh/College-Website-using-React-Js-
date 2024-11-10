import React from 'react';
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight , faEnvelope , faPhone ,faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Footer =() => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
      console.log(new FormData(event.target))
  
      formData.append("access_key", "a49a5f4f-eb57-44f8-8703-5a642e970c08");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

        return (
            <>
             <div className='container-fluid py-4 contact'>
                <div className='row justify-content-center '>
                <div className='text-center'>
                <h3 className='text-primary mt-5 mb-2'>CONTACT US</h3>
                <h1 className='mb-3'>Get In Touch</h1> 
                </div>
                    <div className='col-12 col-lg-5 p-5'>
                        <form onSubmit={onSubmit} >
                            <div className='mb-3'>
                                <label htmlFor="name">Your name</label>
                                <input type="text" id='name' className='p-3 form-control mb-4 bg-info-subtle' placeholder='Enter your name' />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="number">Your phone number</label>
                                <input type="text" id='number' className='p-3 form-control mb-4 bg-info-subtle' placeholder='Enter your phone number' />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="message">Your message</label>
                                <textarea name="" id='message' className='p-3 form-control bg-info-subtle' placeholder='Any message...'></textarea>
                            </div>
                            <div className='text-center'>
                                <button type='submit' className='footer-btn mt-3 mb-4'>Submit now <FontAwesomeIcon icon={faArrowRight} className='px-1' /></button>
                            </div>
                        </form>
                        <span>{result}</span>
                    </div>
                    <div className='col-12 col-lg-7 p-5'>
                        <h3>Send us a message <FontAwesomeIcon className='text-warning fs-2 ms-2' icon={faEnvelope} /></h3>
                        <p className='my-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut 
                        error fuga rerum quibusdam reprehenderit quam a dolores voluptatem iste inventore.
                        quam a dolores voluptatem iste inventore.quam a dolores voluptatem iste inventore.
                        </p>
                        <ul className='list-unstyled mt-4'>
                            <li>
                                <FontAwesomeIcon icon={faEnvelope} className='text-primary fs-4 me-1' /> Contact @mkhamoshi17@gmail.com
                            </li>
                            <li className='my-3'>
                                <FontAwesomeIcon icon={faPhone} className='text-primary fs-4 me-1' /> +98123456789
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faLocationDot} className='text-primary fs-4 me-1' /> Rasht Iran
                            </li>
                        </ul>
                    </div>
                    <div className="col-12">
                        <hr />
                        <div className='row text-center'>
                            <div className='col-6 col-lg-3 mb-3 mb-lg-0'>                
                                <p>&copy; 2024. All rights reserved</p>
                            </div>
                            <div className='col-6 col-lg-3 mb-3 mb-lg-0'>                
                                <p>Developed by Mohammad</p>
                            </div>
                            <div className='col-6 col-lg-3'>                
                                <p>Terms of service</p>
                            </div>
                            <div className='col-6 col-lg-3'>                
                                <p>Privacy policy</p>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
            </>
        );
}
 
export default Footer;