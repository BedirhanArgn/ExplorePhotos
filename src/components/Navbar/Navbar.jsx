import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-header">
        <div className="nav-title">Explore</div>
        <div className="nav-textinput">
          <input type="text" placeholder="Enter a text"></input>
        </div>
        <div className="nav-select">
          <select className="select-css">
            <option>This is a native select element</option>
            <option>Apples</option>
            <option>Bananas</option>
            <option>Grapes</option>
            <option>Oranges</option>
          </select>
        </div>
        <div className="submit-button">
          <button type="submit">Ara</button>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
