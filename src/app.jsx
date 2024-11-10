import React from 'react';
import { useState } from 'react';
import Navbar from './components/navbar/navbar';
import Hero from './components/Hero/hero';
import Program from './components/Program/program';
import About from './components/About/about';
import Campus from './components/Campus/campus';
import Slider from './components/Slider/slider';
import Footer from './components/Footer/footer';
import Video from './components/Video/videoPlayer';

const App = () => {

    const [videoState , setVideoState] = useState(false)

    return (
        <>
         <Navbar />
         <Hero />
         <Program />
         <About setVideoState={setVideoState} />
         <Campus />
         <Slider />
         <Footer />
         <Video setVideoState={setVideoState} videoState={videoState} />
        </>
    );
}
 
export default App;