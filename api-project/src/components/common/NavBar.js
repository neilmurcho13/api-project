import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div className="navbar is-light">
        <div className="container">
          <div className="navbar-brand">
            {/* <Link to="/" className="navbar-item">
              Home
            </Link> */}
            <Link to="/london" className="navbar-item">
              London
            </Link>
            <Link to="/newyork" className="navbar-item">
              New York
            </Link>
            <Link to="/newdelhi" className="navbar-item">
              New Delhi
            </Link>

            {/* <Link to="/images" className="navbar-item">
              Images
            </Link> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
