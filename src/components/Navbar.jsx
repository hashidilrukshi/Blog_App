import React from "react";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="links">
          <Link className="link" to="/?cat=art">
            <h6>ART</h6>
          </Link>
          <Link className="link" to="/?cat=art">
            <h6>SCIENCE</h6>
          </Link>
          <Link className="link" to="/?cat=art">
            <h6>TECNOLOGY</h6>
          </Link>
          <Link className="link" to="/?cat=art">
            <h6>CINEMA</h6>
          </Link>
          <Link className="link" to="/?cat=art">
            <h6>DESING</h6>
          </Link>
          <Link className="link" to="/?cat=art">
            <h6>FOOD</h6>
          </Link>
          <span>John</span>
          <span>LogOut</span>
          <span className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};
