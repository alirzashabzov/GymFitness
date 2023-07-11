import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div id="main">
      <div className="name">
        <h2>STEP UP YOUR</h2>
        <h1>
          <span>FITNESS</span> WITH US
        </h1>
        <p className="details">
            Build Your Body And Fitness WIth Professional Touch
        </p>
        <div className="header-btns">
            <a href={Link} className="header-btn">JOIN US</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
