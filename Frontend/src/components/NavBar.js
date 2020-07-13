import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-xl navbar-dark bg-dark p-2">
        <div className="container">
          <Link className="navbar-brand" to="/mainWindow">
            <i className="material-icons">local_shipping</i>
              Driver App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <Link to="/signIn" className="nav-link">
                  Sign-In
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/signUp" className="nav-link">
                  Sign-Up
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/listClients" className="nav-link">
                  Clients
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/listDrivers" className="nav-link">
                  Drivers
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/listOrders" className="nav-link">
                  Orders
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/listRoutes" className="nav-link">
                  Routes
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/createClient" className="nav-link">
                  Create Client
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/createDriver" className="nav-link">
                  Create Driver
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/createOrder" className="nav-link">
                  Create Order
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/createRoute" className="nav-link">
                  Create Route
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/showMap" className="nav-link">
                  <i className="material-icons">map</i>Show Map
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
