import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SortIcon from "@mui/icons-material/Sort";
import { BootstrapInput } from "../../CustomStyle";
import "./SortBy.css";

function SortBy(props) {
  const [option, setOption] = React.useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setOption(value);
    props.getOption(value);
  };
  return (
    <FormControl sx={{ width: "130px" }} variant="standard">
      <Select
        value={option}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        input={<BootstrapInput />}
      >
        <MenuItem value="">
          <span className="sort-icon">
            <SortIcon />
            <em>Sort By</em>
          </span>
        </MenuItem>
        <MenuItem value="releaseDate">Release Date</MenuItem>
        <MenuItem value="viewCount">View Count</MenuItem>
      </Select>
    </FormControl>
  );
}

export default SortBy;
