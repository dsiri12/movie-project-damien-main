import React, { useState } from "react";

import "./searchBar.css";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    // <form onSubmit={handleSubmit}>
    //   <input className="search-bar"
    //     type="text"
    //     placeholder="Search..."
    //     value={searchTerm}
    //     onChange={handleInputChange}
    //   />
    //   {/* <button className="search-button" type="submit">Search</button> */}
      
    // </form>

    <form>
      <div className="search">
        <span className="search-icon material-symbols-outlined">search</span>
        <input className="search-input" type="search" placeholder="" />
      </div>
    </form>
  );
}

export default SearchBar;
