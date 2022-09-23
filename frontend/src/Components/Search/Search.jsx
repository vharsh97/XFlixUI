import React, { useState } from "react";
import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { StyledOutLinedInput } from "../../CustomStyle";
import "./Search.css";

function Search(props) {
  const [searchText, setSearchText] = useState("");
  const [debounceTimer, setDebounceTimer] = useState(0);

  const debounceSearch = (event, debounceTimeout) => {
    setSearchText(event.target.value);
    if (debounceTimer !== 0) clearTimeout(debounceTimer);

    const newTimer = setTimeout(
      () => props.fetchSearchText(event.target.value),
      debounceTimeout
    );
    setDebounceTimer(newTimer);
  };
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StyledOutLinedInput
        value={searchText}
        placeholder="Search"
        inputProps={{ "aria-label": "search" }}
        onChange={(event) => debounceSearch(event, 500)}
      />
      <div className="search-icon">
        <SearchIcon />
      </div>
    </Box>
  );
}

export default Search;
