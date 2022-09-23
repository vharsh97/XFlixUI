import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Button, Grid } from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import Search from "../Search/Search";
import Header from "../Header/Header";
import GenerePanel from "../GenerePanel/GenerePanel";
import VideoCard from "../VideoCard/VideoCard";
import UploadVideo from "../UploadVideo/UploadVideo";

function Video() {
  const [videos, setVideos] = useState();
  const [videoGenere, setVideoGenere] = useState("");
  const [contentRating, setContentRating] = useState("");
  const [open, setOpen] = useState(false);

  const toggleModal = () => setOpen(!open);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const url = `${process.env.REACT_APP_BASE_URL}/videos`;
    // console.log(url);
    try {
      const response = await axios.get(url);
      setVideos(response.data.videos);
    } catch (error) {
      console.log(error);
    }
  };

  const getVideosByGenere = async (genereList) => {
    const myGenere = genereList.map((data) => data).join(",");
    // console.log(myGenere);
    setVideoGenere(myGenere);
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/videos?genres=${myGenere}`
      );
      // console.log(response.data);
      setVideos(response.data.videos);
    } catch (error) {
      console.log(error);
    }
  };

  const getVideosByRating = async (rating) => {
    const encodedRating = encodeURIComponent(rating);
    setContentRating(encodedRating);
    if (rating !== "12+") {
      getVideos();
      return;
    } else {
      // console.log(encodeURIComponent(rating));
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/videos?contentRating=${encodedRating}`
        );
        // console.log(response.data);
        setVideos(response.data.videos);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getSortBy = async (option) => {
    if (option === "") {
      getVideos();
      return;
    } else {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/videos?sortBy=${option}`
        );
        // console.log(response.data);
        setVideos(response.data.videos);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getFilteredVideos = async (searchText) => {
    // console.log(searchText);
    if (searchText === "") {
      getVideos();
      return;
    }
    let searchQuery = "";
    if (searchText !== "" && videoGenere !== "" && contentRating !== "") {
      searchQuery = `${process.env.REACT_APP_BASE_URL}/videos?title=${searchText}&genres=${videoGenere}&contentRating=${contentRating}`;
    } else {
      searchQuery = `${process.env.REACT_APP_BASE_URL}/videos?title=${searchText}`;
    }
    try {
      const response = await axios.get(searchQuery);
      if (response.status === 200) {
        setVideos(response.data.videos);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* Header */}
      <Header searchVideo={getFilteredVideos}>
        <Grid item>
          <Search fetchSearchText={getFilteredVideos} />
        </Grid>
        <Grid item>
          <Button variant="contained" startIcon={<FileUploadIcon />} onClick={toggleModal}>
            Upload
          </Button>
          <UploadVideo toggle={open} action={toggleModal}/>
        </Grid>
      </Header>
      {/* Genere */}
      <GenerePanel
        getGenere={getVideosByGenere}
        getRating={getVideosByRating}
        sortBy={getSortBy}
      />
      {/* Videos */}
      <Box sx={{ p: 4 }}>
        <Grid
          container
          spacing={4}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {videos &&
            videos.map((data, id) => (
              <Grid item key={id}>
                <VideoCard data={data} />
              </Grid>
            ))}
        </Grid>
      </Box>
    </>
  );
}

export default Video;
