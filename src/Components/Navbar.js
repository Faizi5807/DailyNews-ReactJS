import React, { Component } from "react";
import { Link } from "react-router-dom";
export class Navbar extends Component {
  mode = "light";
  setMode = (modd) => {
    this.mode = modd;
  };
  changeMode = async () => {
    if (this.mode === "light") {
      document.body.style.backgroundColor = "#000000";
      this.setMode("dark");
    } else {
      this.setMode("light");
      document.body.style.backgroundColor = "#D3D3D3";
    }
  };
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link
              className="navbar-brand"
              style={{ color: "blue" }}
              to="\general"
            >
              NEWSBUNNY
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/general"
                  >
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="health">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="science">
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/business">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/general">
                    General
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">
                    Technology
                  </Link>
                </li>
              </ul>
            </div>
            <div
              className="form-check form-switch"
              style={{ marginRight: "70px" }}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={this.changeMode}
              />
              <label
                className="form-check-label"
                htmlForfor="flexSwitchCheckDefault"
              >
                Go Dark
              </label>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
