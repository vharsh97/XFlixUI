import React from "react";
import { useNavigate } from "react-router-dom";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import moment from "moment";
import { StyledCard } from "../../CustomStyle";

function VideoCard(props) {
  let history = useNavigate();

  const handleClick = (videoId) => {
    // console.log(videoId);
    props.changeId && props.changeId(videoId);
    history(`/video/${videoId}`);
  };

  return (
    <StyledCard onClick={() => handleClick(props.data._id)}>
      <CardMedia
        component="img"
        height="250"
        image={props.data.previewImage}
        alt={props.data.title}
      />
      <CardContent>
        <Typography variant="subtitle1" color="#fff">
          {props.data.title.length <= 27
            ? props.data.title
            : props.data.title.slice(0, 27) + "..."}
        </Typography>
        <Typography variant="body2" color="#7F8487">
          {moment(props.data.releaseDate).fromNow()}
        </Typography>
      </CardContent>
    </StyledCard>
  );
}

export default VideoCard;
