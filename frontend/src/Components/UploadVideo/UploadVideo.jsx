import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import DatePicker from "react-datepicker";
import { useSnackbar } from "notistack";
import axios from "axios";
import { config } from "../../App";
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
  const { enqueueSnackbar } = useSnackbar();
  const [startDate, setStartDate] = useState(new Date());
  const [formValues, setFormValues] = useState({
    videoLink: "",
    thumbnailImgLink: "",
    title: "",
    genre: "",
    ageGroup: "",
  });

  const handleClose = () => {
    setFormValues({
      videoLink: "",
      thumbnailImgLink: "",
      title: "",
      genre: "",
      ageGroup: "",
    });
    setStartDate(new Date());
    props.action();
  };

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
    const publishDate =
      startDate.getDate() +
      " " +
      monthArray[startDate.getMonth()] +
      " " +
      startDate.getFullYear();
    const data = formValues;
    data["publishDate"] = publishDate;

    // validate user input data
    if (!validateInput(data)) return;

    try {
      const response = await axios.post(
        `${config.endpoint}/videos`,
        { data }
      );
      if (response.status === 201) {
        enqueueSnackbar("video uploaded successfully", {
          variant: "success",
          autoHideDuration: 1000,
        });
        props.action();
      }
    } catch (error) {
      console.log(error);
      if (error) {
        enqueueSnackbar(`${error.message}, Something went wrong!`, {
          variant: "error",
          autoHideDuration: 1000,
        });
      }
    }
    // console.log(data);
  };

  // Validate the input
  const validateInput = (data) => {
    let check = true;
    if (data.videoLink === "" && check) {
      enqueueSnackbar("Video Link is a required field", { variant: "warning" });
      check = false;
    }
    if (data.thumbnailImgLink === "" && check) {
      enqueueSnackbar("Thumbnail Image Link is a required field", {
        variant: "warning",
      });
      check = false;
    }
    if (data.title === "" && check) {
      enqueueSnackbar("Title is a required field", { variant: "warning" });
      check = false;
    }
    if (data.genre === "" && check) {
      enqueueSnackbar("Genre is a required field", { variant: "warning" });
      check = false;
    }
    if (data.ageGroup === "" && check) {
      enqueueSnackbar("Suitable age group for the clip is a required field", {
        variant: "warning",
      });
      check = false;
    }
    if (data.publishDate === "" && check) {
      enqueueSnackbar("Upload and Publish Date is a required field", {
        variant: "warning",
      });
      check = false;
    }
    return check;
  };

  return (
    <>
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
                onClick={handleClose}
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
                  formValues.thumbnailImgLink === ""
                    ? "Thumbnail Image Link"
                    : ""
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

              {/* <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              sx={{ p: 0, my:2}}
            > */}
              <DatePicker
                placeholderText="Upload and Publish Date*"
                // value={startDate}
                className="date-input"
                dateFormat="dd MMM yyyy"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />

              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexWrap="wrap"
              >
                <Button color="error" variant="contained" onClick={handleClose}>
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
      {/* {showAlert ? } */}
    </>
  );
}

export default UploadVideo;
