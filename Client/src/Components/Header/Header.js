import "./Header.css";
import React from "react";
import logo from "../../Assets/logo.jpg";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container container">
        <div className="logo-container">
          <img className="logo-img" src={logo} />
          <h4 className="logo-line">Best Cakes in Liverpool</h4>
        </div>
        <nav className="header-nav">
          <Link to="/" className="header-nav-link">
            <li className="header-nav-list-item">Home</li>
          </Link>
          <Link to="/about" className="header-nav-link">
            <li className="header-nav-list-item">About Us</li>
          </Link>
          <Link to="/product" className="header-nav-link">
            <li className="header-nav-list-item">Product</li>
          </Link>
          <Link to="/basket" className="header-nav-link">
            <li className="header-nav-list-item">Basket</li>
          </Link>
        </nav>
      </div>
    </header>
  );
}
