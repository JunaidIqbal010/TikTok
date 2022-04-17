import {useRef, useState} from "react";
import './Video.css';
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar"

function Video({
  video,
  username,
  description,
  song,
  likes,
  comments,
  shares
}) {
  const [play, setPlay] = useState(false);
  const videoRef = useRef(null);
  const onVideoPress = () => {
    if (play) {
      videoRef.current.pause();
      setPlay(false)
    }else {
      videoRef.current.play();
      setPlay(true);
    }
    
  };
  return (
    <div className="video">
      <video
        className="video__player"
        loop 
        onClick = {onVideoPress}
        ref = {videoRef}
        src= {video}
        type="video/mp4"/>
      <VideoFooter 
        username= {username}
        description= {description}
        song= {song}
      />
      <VideoSidebar
        likes= {likes}
        comments= {comments}
        shares= {shares}
      />
    </div>
  );
}
export default Video;