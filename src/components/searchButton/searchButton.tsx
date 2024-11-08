import React from "react";
import "./searchButton.css";

interface SearchButtonProps {
  children: React.ReactNode;
}

function SearchButton(props: SearchButtonProps) {
  return <button className="searchButton">{props.children}</button>;
}

export default SearchButton;
