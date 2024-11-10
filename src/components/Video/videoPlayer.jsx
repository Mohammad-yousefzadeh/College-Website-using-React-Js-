import './videoPlayer.css'
import { useRef } from 'react'
import aboutVideo from '../../assests/about-video.mp4'

const Video = ({setVideoState , videoState}) => {

    const video = useRef(null)

    const stopVideo = (e) =>{
        if(e.target === video.current){
            setVideoState(false)
        }
    }

    return (
        <>
         <div className={`video ${videoState ? '' : 'hide-video'}`} ref={video} onClick={stopVideo}>
            <video src={aboutVideo} controls autoPlay></video>
         </div>
        </>
    );
}
 
export default Video;