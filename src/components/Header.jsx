import React from "react";
import "../CSS/Header.css";
import LOGO from "../DATA/LOGO.jpeg";

function Header() {
  return (
    <div className="header">
      <img src={LOGO} alt="Company Logo" className="header-logo" />
      <h1>Notes</h1>
    </div>
  );
}

export default Header;
