import "./VideoFooter.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";

function VideoFooter({ username, description, song_name}) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@{ username }</h3>
        <p>{ description }</p>
        <div className="videoFooter__ticker">
          <MusicNoteIcon className="videoFooter__icon" />   
        </div>
      </div>
      <img
        className="videoFooter__record"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt=""
      />
    </div>
  );
}

export default VideoFooter;