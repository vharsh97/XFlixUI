import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Video from "./Components/Video/Video";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Video />} />
        <Route path="/video/:videoId" element={<VideoPlayer />} />
      </Routes>
    </div>
  );
}

export default App;
