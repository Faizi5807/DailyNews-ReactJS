import "./App.css";

import React, { Component } from "react";
import { Navbar } from "./Components/Navbar";
import NewsComp from "./Components/NewsComp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  pgsz = 70;
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <div>
            <Routes>
              <Route
                exact
                path="/general"
                element={
                  <NewsComp
                    key="general"
                    pagesize={this.pgsz}
                    country="in"
                    category="general"
                  />
                }
              ></Route>
              <Route
                exact
                path="/sports"
                element={
                  <NewsComp
                    key="sports"
                    pagesize={this.pgsz}
                    country="in"
                    category="sports"
                  />
                }
              ></Route>{" "}
              <Route
                exact
                path="/entertainment"
                element={
                  <NewsComp
                    key="entertainment"
                    pagesize={this.pgsz}
                    country="in"
                    category="entertainment"
                  />
                }
              ></Route>{" "}
              <Route
                exact
                path="/science"
                element={
                  <NewsComp
                    key="science"
                    pagesize={this.pgsz}
                    country="in"
                    category="science"
                  />
                }
              ></Route>{" "}
              <Route
                exact
                path="/business"
                element={
                  <NewsComp
                    key="business"
                    pagesize={this.pgsz}
                    country="in"
                    category="business"
                  />
                }
              ></Route>{" "}
              <Route
                exact
                path="/health"
                element={
                  <NewsComp
                    key="health"
                    pagesize={this.pgsz}
                    country="in"
                    category="health"
                  />
                }
              ></Route>{" "}
              <Route
                exact
                path="/technology"
                element={
                  <NewsComp
                    key="technology"
                    pagesize={this.pgsz}
                    country="in"
                    category="technology"
                  />
                }
              ></Route>
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}
