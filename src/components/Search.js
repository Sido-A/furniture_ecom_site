import React from "react";
import BestMatch from "./BestMatch";
import SearchIcon from "@material-ui/icons/Search";

function Search() {
  return (
    <div className="sb container">
      <div className="search ">
        <div className="search__field">
          <SearchIcon className="searchIcon" />
          <input type="text" />
        </div>
      </div>

      <BestMatch />
    </div>
  );
}

export default Search;
