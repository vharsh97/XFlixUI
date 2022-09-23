import { Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../Asset/Logo.svg";
import "./Header.css";

function Header(props) {
  const navigate = useNavigate();
  return (
    <Grid
      spacing={2}
      container
      className="header"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item className="header-title">
        <img src={Logo} alt="XFlix-icon" onClick={() => navigate("/")}></img>
      </Grid>
      {props.children}
    </Grid>
  );
}

export default Header;
