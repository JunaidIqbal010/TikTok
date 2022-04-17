import './App.css';
import Video from './components/video/Video'
import { useState, useEffect} from 'react'
import axios from 'axios'

function App() {
  const [videos, setVideos] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3000/api/v1/users")
      .then((response) => {
        console.log(response.data)
        setVideos(response.data)
      })
      .catch((error) => {
        console.error(error)
    })
  }, [])
  return (
    <div className="app">
      <div className="app_videos">
        {videos.map(
            ({ image_url, description, song_name, likes, comments, shares }) => (
              <Video
                video={image_url}
                username= "junaid99"
                song={song_name}
                likes={likes}
                comments={comments}
                description={description}
                shares={shares}
              />
            )
          )}
      </div>
    </div>
  );
}

export default App;
