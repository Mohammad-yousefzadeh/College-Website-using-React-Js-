import './about.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const About = ({setVideoState}) =>{
    return (
        <>
         <div className='container-fluid py-5 about'>
            <div className='row justify-content-center pt-5 about-left align-items-center'>
                <div className='col-12 col-lg-5 text-center mb-2 mb-lg-0 about-left'>
                    <img src="https://images.unsplash.com/photo-1620150431600-9131a6e8d74c?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <FontAwesomeIcon icon={faPlay} className='about-play-icon' onClick={()=>{
                        setVideoState(true)
                    }} />
                </div>
                <div className='col-12 col-lg-7 p-3 pt-5'>
                    <h4 className='text-primary fw-bolder'>ABOUT UNIVERSITY</h4>
                    <h1 className='mt-3 mb-4'>Nurturing Tommorow's Leaders Today</h1>
                    <div className='border bg-dark-subtle p-3 rounded-4'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At ad atque deserunt quidem dolorem fuga, illum eos, velit, unde animi nam a dolore magnam mollitia. Dicta unde dolor molestiae tempora vel nostrum veniam, nulla quas, aperiam, voluptate enim molestias hic. Sunt deserunt iste est fuga porro dolorem neque quis similique consequatur nisi maxime</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At ad atque deserunt quidem dolorem fuga, illum eos, velit, unde animi nam a dolore magnam mollitia. Dicta unde dolor molestiae tempora vel nostrum veniam, nulla quas, aperiam, voluptate enim molestiase</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At ad atque deserunt quidem dolorem fuga, illum eos, velit, unde animi nam a dolore magnam mollitia. Dicta unde dolor molestiae tempora vel nostrum veniam, nulla quass</p>
                    </div>
                </div>
            </div>
         </div>
        </>
    );
}

export default About;