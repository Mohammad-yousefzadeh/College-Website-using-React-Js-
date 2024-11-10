import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap  , faBars } from '@fortawesome/free-solid-svg-icons';
import './navbar.css'
import { Link } from 'react-scroll';

class Navbar extends Component {

    state ={
        sticky : false ,
        toggle : false
    }

    componentDidMount(){
        window.addEventListener('scroll' , ()=>{
            window.scrollY > 65 ? this.setState({sticky : true}) : this.setState({sticky : false})
        })
    }

    toggleMenu = () =>{
        this.state.toggle ? this.setState({toggle : false}) : this.setState({toggle : true})
        console.log('helo');
        
    }

    render() { 
        return (
            <>
             <nav className={`navbar web-navbar navbar-expand-lg ${this.state.sticky ? 'dark-nav' : ' '}`}>
                <div className='d-flex navbar-brand '>
                  <FontAwesomeIcon className='brand mx-3 text-white' icon={faGraduationCap}/> 
                  <h1 className='text-white'>Edusity</h1>
                </div>             
                    <FontAwesomeIcon className='text-white fs-1 toggle d-inline-block d-lg-none' icon={faBars} onClick={this.toggleMenu} /> 
                    <ul className={`navbar-nav list-unstyled ${this.state.toggle ? 'hide-mobile-menu' : ' '}`}>
                        <li className='nav-item'><Link className='m-4 text-white' to='hero'offset={-50} duration={500}>Home</Link></li>
                        <li className='nav-item'><Link className='m-4 text-white' to='program' offset={-50} duration={500}>Program</Link></li>
                        <li className='nav-item'><Link className='m-4 text-white' to='about' offset={-50} duration={500}>About us</Link></li>
                        <li className='nav-item'><Link className='m-4 text-white' to='campus' offset={-50} duration={500}>Gallery</Link></li>
                        <li className='nav-item'><Link className='m-4 text-white' to='slider' offset={-50} duration={500}>Testimonials</Link></li>
                        <li className='nav-item'>
                            <Link className='m-4 text-dark nav-btn' to='contact' offset={-50} duration={500}>Contact</Link>     
                        </li>
                    </ul>
             </nav>
            </>
        );
    }
}
 
export default Navbar;