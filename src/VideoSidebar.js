import React, {useState} from 'react';
import "./VideoSidebar.css";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import IosShareIcon from '@mui/icons-material/IosShare';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

function VideoSidebar({ likes, comments, shares }) {
  const [liked, setLiked] = useState(false);



  return (
    <div className='videoSidebar'>
      <div className="videoSidebar__button">
        {liked ? (
          <FavoriteIcon 
          fontSize='large' 
          onClick={(e) => setLiked(false)} 
          />
        ) : (
          <FavoriteBorderIcon 
          fontSize='large' 
          onClick={(e) => setLiked(true)} 
          />
        )}
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="videoSidebar__button">
        <ChatOutlinedIcon fontSize='large' />
        <p>{comments}</p>
      </div>
      <div className="videoSidebar__button">
        <IosShareIcon fontSize='large' />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;