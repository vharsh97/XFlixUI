import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Video from "./Components/Video/Video";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";

export const config = {
  endpoint: `https://0831b9df-2c37-4772-9c4d-b11a7175d1ab.mock.pstmn.io/v1`,
};

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
