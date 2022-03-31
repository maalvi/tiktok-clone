import React, { useRef, useState } from 'react';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';
import "./Video.css";

function Video() {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  }

  return (
    <div className='video'>
      <video 
        onClick={handleVideoPress}
        className='video__player'
        loop
        ref={videoRef}
        src='https://vids.me.me/sunnytheunfunny-revenant-mp4-source-dasspaghettimonster-feniczoroark-plaidsquid41030-ahunkahunkaburninlove-artsyjasper105-doodlin-doods-72541057.mp4'
        ></video>

      {/* VideoFooter */}
      <VideoFooter />
      
      {/* VideoSidebar */}
      <VideoSidebar />
    </div>
  );
}

export default Video;