import React from "react";
import { Link } from "react-router-dom";
// import "./Navbar.css";

const Navbar = ({cart}) => {
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src="https://via.placeholder.com/100x50?text=Logo"
            alt="Site Logo"
            className="d-inline-block align-text-top"
          />
        </Link>

        {/* Navbar Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </li>

            {/* Product Categories */}
            <li className="nav-item">
              <Link className="nav-link" to="/fashion">
                Fashion
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/electronics">
                Electronics
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/grocery">
                Grocery
              </Link>
            </li>
          </ul>

          {/* Search Bar */}
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search for products..."
              aria-label="Search"
            />
            <button className="btn btn-light" type="submit">
              Search
            </button>
            <div className="ml-auto">
              <Link to="/cart">
                <button className="btn btn-primary">Cart ({itemCount})</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
