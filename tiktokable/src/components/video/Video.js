import {useRef, useState} from "react";
import './Video.css';
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar"

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
      <VideoFooter 
        username= "jdshah_010"
        description= "Check this out."
        song= "I wanna be your lover boy."
      />
      <VideoSidebar
        likes= {0}
        comments= {111}
        shares= {120}
      />
    </div>
  );
}
export default Video;