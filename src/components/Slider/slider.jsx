import { Component , createRef} from 'react';
import './slider.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft , faArrowRight } from '@fortawesome/free-solid-svg-icons';

class Slider extends Component {

    slide = createRef()
    tx = 0;

    slideForward = () =>{
      if( this.tx > -50 ){
        this.tx -= 25
      }
      this.slide.current.style.transform = `translateX(${this.tx}%)`
    }

    slideBackward = () =>{
      if( this.tx < 0){
        this.tx += 25 ;
      }
      this.slide.current.style.transform = `translateX(${this.tx}%)`
    }

    render() { 
        return (
            <>
             <div className='container-fluid mt-5 mb-4 slider'>
              <div className='row justify-content-center'>
                <div className='text-center'>
                 <h3 className='text-primary mt-5 mb-2'>TESTIMONAILS</h3>
                 <h1 className='mb-2'>What Students Say</h1> 
                </div>
                <div className='col-11 col-lg-10 position-relative'>
                  <FontAwesomeIcon onClick={this.slideBackward} icon={faArrowLeft} className='back-btn' />
                  <FontAwesomeIcon onClick={this.slideForward} icon={faArrowRight} className='next-btn' />
                  <div className='slides'>
                    <ul ref={this.slide} className='list-unstyled'>
                      <li>
                        <div className='slide'>
                          <div className='user-info m-2 mb-4'>
                            <img className='me-3' src="https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <div>
                              <h5>william jones 1</h5>
                              <span className='text-primary'>Orlando USA</span>
                            </div>
                          </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium obcaecati sit animi tenetur velit veniam, corrupti 
                              deserunt! Laudantium quas minus, alias deleniti enim voluptatem debitis illo earum, minima ut sit
                            </p>
                        </div>
                      </li>
                      <li>
                        <div className='slide'>
                          <div className='user-info m-2 mb-4'>
                              <img className='me-3' src="https://images.unsplash.com/photo-1493198032510-43d174ff561d?q=80&w=1746&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <div>
                              <h5>william jones 2</h5>
                              <span className='text-primary'>Orlando USA</span>
                            </div>
                          </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium obcaecati sit animi tenetur velit veniam, corrupti 
                              deserunt! Laudantium quas minus, alias deleniti enim voluptatem debitis illo earum, minima ut sit
                            </p>
                        </div>
                      </li>
                      <li>
                        <div className='slide'>
                          <div className='user-info m-2 mb-4'>
                               <img className='me-3' src="https://images.unsplash.com/photo-1484360751593-36ec906bad60?q=80&w=1682&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <div>
                              <h5>william jones 3</h5>
                              <span className='text-primary'>Orlando USA</span>
                            </div>
                          </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium obcaecati sit animi tenetur velit veniam, corrupti 
                              deserunt! Laudantium quas minus, alias deleniti enim voluptatem debitis illo earum, minima ut sit
                            </p>
                        </div>
                      </li>
                      <li>
                        <div className='slide'>
                          <div className='user-info m-2 mb-4'>
                              <img className='me-3' src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> 
                            <div>
                              <h5>william jones 4</h5>
                              <span className='text-primary'>Orlando USA</span>
                            </div>
                          </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium obcaecati sit animi tenetur velit veniam, corrupti 
                              deserunt! Laudantium quas minus, alias deleniti enim voluptatem debitis illo earum, minima ut sit
                            </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
             </div>

            </>             
        );
    }
}
 
export default Slider;