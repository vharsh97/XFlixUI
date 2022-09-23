import React, { useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import { StyledToggleButtonGroup } from "../../CustomStyle";
import "./GenerePanel.css";
import SortBy from "./SortBy";

function GenerePanel(props) {
  const [genere, setGenere] = useState(() => ["All"]);
  const [ageGroup, setAgeGroup] = useState("any");

  const handleGenere = (event, newGenere) => {
    if (event.target.innerText === "All Genere" || newGenere.length === 0) {
      newGenere = ["All"];
    }

    if (newGenere.length > 1) {
      const index = newGenere.indexOf("All");
      if (index > -1) {
        // only splice array when item is found
        newGenere.splice(index, 1); // 2nd parameter means remove one item only
      }
    }
    if (newGenere != null) {
      setGenere(newGenere);
      props.getGenere(newGenere);
    }
  };

  const handleAgeGroup = (event, newAgeGroup) => {
    if (newAgeGroup != null) {
      setAgeGroup(newAgeGroup);
      props.getRating(newAgeGroup);
    }
  };
  return (
    <Grid
      spacing={2}
      container
      className="genere-section"
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
    >
      <Grid
        item
        xs={4}
        display="flex"
        justifyContent="flex-end"
        alignItems="flex-start"
      >
        <StyledToggleButtonGroup
          orientation="vertical"
          size="small"
          value={genere}
          onChange={handleGenere}
          aria-label="Genere"
        >
          <ToggleButton value="All" aria-label="all genere">
            <Typography variant="subtitle1" gutterBottom>
              All Genere
            </Typography>
          </ToggleButton>
          <ToggleButton value="Education" aria-label="education">
            <Typography variant="subtitle1" gutterBottom>
              Education
            </Typography>
          </ToggleButton>
          <ToggleButton value="Sports" aria-label="sports">
            <Typography variant="subtitle1" gutterBottom>
              Sports
            </Typography>
          </ToggleButton>
          <ToggleButton value="Comedy" aria-label="comedy">
            <Typography variant="subtitle1" gutterBottom>
              Comedy
            </Typography>
          </ToggleButton>
          <ToggleButton value="Lifestyle" aria-label="lifestyle">
            <Typography variant="subtitle1" gutterBottom>
              Lifestyle
            </Typography>
          </ToggleButton>
        </StyledToggleButtonGroup>
      </Grid>
      <Grid
        item
        xs={4}
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
      >
        <StyledToggleButtonGroup
          color="secondary"
          size="small"
          orientation="vertical"
          value={ageGroup}
          exclusive
          onChange={handleAgeGroup}
          aria-label="Age Group"
        >
          <ToggleButton value="any" aria-label="any age group">
            <Typography variant="subtitle1" gutterBottom>
              Any Age Group
            </Typography>
          </ToggleButton>
          <ToggleButton value="7+" aria-label="7+">
            <Typography variant="subtitle1" gutterBottom>
              7+
            </Typography>
          </ToggleButton>
          <ToggleButton value="12+" aria-label="12+">
            <Typography variant="subtitle1" gutterBottom>
              12+
            </Typography>
          </ToggleButton>
          <ToggleButton value="16+" aria-label="16+">
            <Typography variant="subtitle1" gutterBottom>
              16+
            </Typography>
          </ToggleButton>
          <ToggleButton value="18+" aria-label="18+">
            <Typography variant="subtitle1" gutterBottom>
              18+
            </Typography>
          </ToggleButton>
        </StyledToggleButtonGroup>
      </Grid>
      <Grid
        item
        xs={4}
        display="flex"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <SortBy getOption={(option) => props.sortBy(option)} />
      </Grid>
    </Grid>
  );
}

export default GenerePanel;
