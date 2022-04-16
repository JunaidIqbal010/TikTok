import {useRef, useState} from "react";
import './Video.css';
function Video() {
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
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
        type="video/mp4"/>
    </div>
  );
}
export default Video;