import React, { useRef, useState } from 'react';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';
import "./Video.css";

function Video({ url, username, description, song, likes, comments, shares }) {
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
        src={url}
        ></video>

      <VideoFooter 
      username={username} 
      description={description} 
      song={song} 
      />

      <VideoSidebar 
      likes={likes} 
      comments={comments} 
      shares={shares} 
      />
    </div>
  );
}

export default Video;