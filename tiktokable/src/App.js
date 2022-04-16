import './App.css';
import Video from './components/video/Video'
function App() {
  return (
    <div className="App">
      <h1> Developed by: Junaid Iqbal Shah</h1>
      <div className="app_videos">
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
