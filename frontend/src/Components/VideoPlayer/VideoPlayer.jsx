import { Box, CardContent, Grid, Typography } from "@mui/material";
import axios from "axios";
import moment from "moment";
import React, { useState, useEffect } from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import { config } from "../../App";
import { StyledFab, StyledMusicPlayer } from "../../CustomStyle";
import Header from "../Header/Header";
import VideoCard from "../VideoCard/VideoCard";
import "./VideoPlayer.css";

function VideoPlayer() {
  const videoId = window.location.pathname.slice(7);
  const [ID, setID] = useState(videoId);
  const [videoData, setVideoData] = useState();
  const [allVideos, setAllVideos] = useState();
  // console.log(window.location.pathname);-

  useEffect(() => {
    getAllVideos();
    updateViewCount();
    getVideoData();
  }, [ID]);

  const getAllVideos = async () => {
    const url = `${config.endpoint}/videos`;
    // console.log(url);
    try {
      const response = await axios.get(url);
      setAllVideos(response.data.videos);
    } catch (error) {
      console.log(error);
    }
  };

  const updateViewCount = async () => {
    try {
      const response = await axios.patch(
        `${config.endpoint}/videos/${ID}/views`
      );
      if (response.status === 204) {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getVideoData = async () => {
    try {
      // console.log(ID);
      const response = await axios.get(
        `${config.endpoint}/videos/${ID}`
      );
      // console.log(response.data);
      if (response.status === 200) {
        setVideoData(response.data);
      } else {
        console.log("filter");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const StreamAnotherVideo = (newId) => {
    setID(newId);
  };
  // console.log(ID, videoData && videoData._id);

  const updateVote = async (vote, change) => {
    const data = {
      vote: vote,
      change: change,
    };
    try {
      const response = await axios.patch(
        `${config.endpoint}/videos/${ID}/votes`,
        data
      );
      if (response.status === 204) {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* header */}
      <Header />
      <div className="player-section">
        {videoData && (
          <StyledMusicPlayer>
            <CardContent>
              <iframe
                className="video-frame"
                src={`https://www.${videoData.videoLink}`}
                title={videoData.title}
                allowFullScreen
              />

              <Typography variant="h6" color="#fff" fontWeight={700}>
                {videoData.title}
              </Typography>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                flexWrap="wrap"
              >
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography variant="body2" color="#C2C2C2">
                    {videoData.viewCount}
                  </Typography>
                  <FiberManualRecordIcon
                    fontSize="1px"
                    sx={{ color: "#C2C2C2", mr: 1, ml: 1 }}
                  />
                  <Typography variant="body2" color="#C2C2C2">
                    {videoData.contentRating}
                  </Typography>
                  <FiberManualRecordIcon
                    fontSize="1px"
                    sx={{ color: "#C2C2C2", mr: 1, ml: 1 }}
                  />
                  <Typography variant="body2" color="#C2C2C2">
                    {moment(videoData.releaseDate).fromNow()}
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <StyledFab
                    color="secondary"
                    aria-label="like"
                    size="small"
                    onClick={() => updateVote("upVote", "increase")}
                  >
                    <ThumbUpAltOutlinedIcon
                      fontSize="small"
                      sx={{ color: "#C2C2C2", p: 0, mr: 1 }}
                    />
                    {videoData.votes.upVotes}
                  </StyledFab>
                  <StyledFab
                    color="secondary"
                    aria-label="dislike"
                    size="small"
                    onClick={() => updateVote("downVote", "increase")}
                  >
                    <ThumbDownAltOutlinedIcon
                      fontSize="small"
                      sx={{ color: "#C2C2C2", p: 0, mr: 1 }}
                    />
                    {videoData.votes.downVotes}
                  </StyledFab>
                </Box>
              </Box>
            </CardContent>
          </StyledMusicPlayer>
        )}
        <Box sx={{ p: 4 }}>
          <Grid
            container
            spacing={4}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            {allVideos &&
              allVideos.map((data, id) => (
                <Grid item key={id}>
                  <VideoCard data={data} changeId={StreamAnotherVideo} />
                </Grid>
              ))}
          </Grid>
        </Box>
      </div>
    </>
  );
}

export default VideoPlayer;
