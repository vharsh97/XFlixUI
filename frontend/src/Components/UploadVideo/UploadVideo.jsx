import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import DatePicker from "react-datepicker";
import { StyledModalBox } from "../../CustomStyle";
import "./UploadVideo.css";

function UploadVideo(props) {
  const monthArray = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const [startDate, setStartDate] = useState(new Date());
  const [formValues, setFormValues] = useState({
    videoLink: "",
    thumbnailImgLink: "",
    title: "",
    genre: "",
    ageGroup: "",
  });

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    // console.log(key, value);
    setFormValues((data) => ({
      ...data,
      [key]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formValues);
    // props.action();
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={props.toggle}
      onClose={(_, reason) =>
        reason !== "backdropClick" ? props.action : null
      }
      closeAfterTransition
      BackdropComponent={Backdrop}
      sx={{ backdropFilter: "blur(2px)" }}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={props.toggle}>
        <StyledModalBox>
          <Box
            component="div"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            my={2}
          >
            <Typography variant="h6" color="#fff" ml={4} fontWeight={700}>
              Upload Video
            </Typography>
            <HighlightOffIcon
              sx={{ color: "#fff", cursor: "pointer", mr: 3 }}
              onClick={props.action}
            />
          </Box>

          <Box
            component="form"
            noValidate
            autoComplete="off"
            className="myForm"
          >
            <TextField
              label={formValues.videoLink === "" ? "Video Link" : ""}
              variant="outlined"
              size="small"
              name="videoLink"
              InputLabelProps={{ shrink: false }}
              required
              value={formValues.videoLink}
              onChange={handleChange}
            />
            <TextField
              label={
                formValues.thumbnailImgLink === "" ? "Thumbnail Image Link" : ""
              }
              variant="outlined"
              size="small"
              name="thumbnailImgLink"
              InputLabelProps={{ shrink: false }}
              required
              value={formValues.thumbnailImgLink}
              onChange={handleChange}
            />
            <TextField
              label={formValues.title === "" ? "Title" : ""}
              variant="outlined"
              size="small"
              name="title"
              InputLabelProps={{ shrink: false }}
              required
              value={formValues.title}
              onChange={handleChange}
            />
            <TextField
              label={formValues.genre === "" ? "Genere" : ""}
              variant="outlined"
              size="small"
              name="genre"
              select
              InputLabelProps={{ shrink: false }}
              required
              value={formValues.genre}
              onChange={handleChange}
            >
              <MenuItem value="Education">Education</MenuItem>
              <MenuItem value="Sports">Sports</MenuItem>
              <MenuItem value="Comedy">Comedy</MenuItem>
              <MenuItem value="LifeStyle">LifeStyle</MenuItem>
            </TextField>
            <TextField
              label={
                formValues.ageGroup === ""
                  ? "Suitable age group for the clip"
                  : ""
              }
              variant="outlined"
              size="small"
              name="ageGroup"
              select
              InputLabelProps={{ shrink: false }}
              required
              value={formValues.ageGroup}
              onChange={handleChange}
            >
              <MenuItem value="Any age group">Any age group</MenuItem>
              <MenuItem value="7+">7+</MenuItem>
              <MenuItem value="12+">12+</MenuItem>
              <MenuItem value="16+">16+</MenuItem>
              <MenuItem value="18+">18+</MenuItem>
            </TextField>

            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              sx={{ p: 0, my:2 }}
            >
              <DatePicker
                placeholderText="Upload and Publish Date*"
                // value={startDate}
                className="date-input"
                dateFormat="dd MMM yyyy"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
              <HighlightOffIcon />
            </Box>

            {/* 
            date.getDate(),
                  monthArray[date.getMonth()],
                  date.getFullYear()
            
            <DatePicker
      dateFormat="dd MMM yyyy"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    />
            
            <TextField
              label={
                formValues.publishDate === "" ? "Upload and Publish Date" : ""
              }
              placeholder=""
              type="date"
              variant="outlined"
              size="small"
              name="publishDate"
              InputLabelProps={{ shrink: false }}
              required
              value={formValues.publishDate}
              onChange={handleChange}
            /> */}
            {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                  label={
                    formValues.publishDate === ""
                      ? "Upload and Publish Date"
                      : ""
                  }
                  name="publishDate"
                  value={formValues.publishDate}
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider> */}
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexWrap="wrap"
            >
              <Button color="error" variant="contained" onClick={props.action}>
                Cancel
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Upload
              </Button>
            </Box>
          </Box>
        </StyledModalBox>
      </Fade>
    </Modal>
  );
}

export default UploadVideo;
