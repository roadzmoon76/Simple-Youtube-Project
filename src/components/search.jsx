import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = (props) => {
  return (
    <nav className="search-bar">
      <button className="youtube">
        <FontAwesomeIcon icon={faYoutube} className="youtube-logo" />
        <span className="youtube-letter">Youtube</span>
      </button>
      <input type="text" className="search-box" />
      <button className="search-btn">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
      </button>
    </nav>
  );
};

export default Search;
