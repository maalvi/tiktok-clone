import { useState, useEffect } from 'react';
import axios from './axios';
import './App.css';
import Video from './Video';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get('/v2/posts');
      setVideos(response.data);

      return response;
    }

    fetchPosts();
  }, []);

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(({ url, username, description, song, likes, comments, shares }) => (
          <Video 
          url={url}
          username={username} 
          description={description} 
          song={song}
          likes={likes} 
          comments={comments} 
          shares={shares}
          />
        ))} 
      </div>

      {/* App Container */}
        { /* videos */}
    </div>
  );
}

export default App;
