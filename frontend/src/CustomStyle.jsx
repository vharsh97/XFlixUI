import { styled } from "@mui/material/styles";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import InputBase from "@mui/material/InputBase";
import { Box, Card, Fab, OutlinedInput } from "@mui/material";

export const StyledOutLinedInput = styled(OutlinedInput)(({ theme }) => ({
  "& .MuiOutlinedInput-input": {
    width: "40vw",
    padding: "0 0 0 5px",
    margin: 0,
    background: "#000",
    border: "2px solid #444D56",
    height: "5vh",
    color: "rgba(255, 255, 255, 0.87)",
  },
}));

export const StyledToggleButtonGroup = styled(ToggleButtonGroup)(
  ({ theme }) => ({
    "& .MuiToggleButtonGroup-grouped": {
      marginBottom: 2,
      border: 0,
      "&:not(:first-of-type)": {
        borderRadius: "25px",
      },
      "&:first-of-type": {
        borderRadius: "25px",
      },
    },
    "& .MuiToggleButton-root.Mui-selected": {
      backgroundColor: theme.palette.common.white,
      color: "#000",
      padding: "0 10px 0 10px",
      "&:hover": {
        backgroundColor: theme.palette.common.white,
        color: "#000",
      },
    },
    "& .MuiToggleButton-root": {
      color: theme.palette.common.white,
      textTransform: "none",
      padding: "0 10px 0 10px",
      "&:hover": {
        color: theme.palette.common.white,
      },
    },
  })
);

export const BootstrapInput = styled(InputBase)(({ theme }) => ({
  // "label + &": {
  //   margin: 0,
  // },
  "& .MuiInputBase-input": {
    borderRadius: "25px",
    position: "relative",
    backgroundColor: "#fff",
    border: "none",
    fontSize: 16,
    padding: 5,
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:focus": {
      borderRadius: "25px",
      backgroundColor: "#fff",
    },
  },
}));

export const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 300,
  backgroundColor: "transparent",
  boxShadow: "2px 2px 5px #000, -3px -3px 6px #435055",
  borderRadius: "10px",
  transition: "0.2s all",
  "&:hover": {
    cursor: "pointer",
    transform: "scale(1.1)",
  },
}));

export const StyledMusicPlayer = styled(Card)(({ theme }) => ({
  width: "auto",
  backgroundColor: "transparent",
  borderRadius: "10px",

  "& .MuiCardContent-root": {
    margin: 0,
    padding: 0,
  },
}));

export const StyledFab = styled(Fab)(({ theme }) => ({
  width: "auto",
  height: "auto",
  borderRadius: "25px",
  backgroundColor: theme.palette.secondary.light,
  margin: "0 1rem",
  padding: "0 1rem",
  boxShadow: "2px 2px 5px #000, -2px -2px 4px #435055",
  transition: "0.2s all",
  "&:hover": {
    cursor: "pointer",
    transform: "scale(1.1)",
  },
}));

export const StyledModalBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40vw",
  height: "auto",
  backgroundColor: theme.palette.secondary.light,
  boxShadow: "2px 2px 5px #000, -2px -2px 4px #435055",
  borderRadius: "10px",
  padding: 4,
  "& .myForm": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),

    "& label.Mui-focused": {
      display: "none",
    },

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "80%",
      backgroundColor: "transparent",
      border: "none",
      padding: 5,
      "& fieldset": {
        border: "none",
      },
    },

    "& .MuiInputBase-input": {
      borderRadius: "25px",
      backgroundColor: "#fff",
      border: "none",
      padding: 5,
      "&:focus": {
        borderRadius: "25px",
        backgroundColor: "#fff",
      },
    },

    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
      borderRadius: "25px",
    },
  },
}));
