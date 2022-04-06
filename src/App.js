import './App.css';
import Video from './Video';

function App() {
  return (
    <div className="app">
      <div className="app__videos">
      <Video 
      url={'https://vids.me.me/sunnytheunfunny-revenant-mp4-source-dasspaghettimonster-feniczoroark-plaidsquid41030-ahunkahunkaburninlove-artsyjasper105-doodlin-doods-72541057.mp4'}
      username={'test_user'} 
      description={'test_description_123_abc'} 
      song={'test_song_lalala'}
      likes={200} 
      comments={10} 
      shares={2}
      />
      <Video 
      url={'https://vids.me.me/sunnytheunfunny-revenant-mp4-source-dasspaghettimonster-feniczoroark-plaidsquid41030-ahunkahunkaburninlove-artsyjasper105-doodlin-doods-72541057.mp4'}
      username={'test_user'} 
      description={'test_description_123_abc'} 
      song={'test_song_lalala'}
      likes={200} 
      comments={10} 
      shares={2}
      />
      <Video 
      url={'https://vids.me.me/sunnytheunfunny-revenant-mp4-source-dasspaghettimonster-feniczoroark-plaidsquid41030-ahunkahunkaburninlove-artsyjasper105-doodlin-doods-72541057.mp4'}
      username={'test_user'} 
      description={'test_description_123_abc'} 
      song={'test_song_lalala'}
      likes={200} 
      comments={10} 
      shares={2}
      />
      </div>

      {/* App Container */}
        { /* videos */}
          {/* vid1 */}
          {/* vid2 */}
          {/* ... */}
          {/* vidn */}
    </div>
  );
}

export default App;
