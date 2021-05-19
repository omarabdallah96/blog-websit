import { Component } from "react";
import "./App.css";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Post_details from "./components/post_details";
import Home from "./Home.js";

import Post from "./components/post";
import Message from "./components/message";
import Siderbar from "./components/sidebar";
import HomeAdmin from "./components/HomeAdmin";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="grid-container">
          <div className="grid-item">
            <Siderbar />
          </div>
          <div className="grid-item">
            <Route exact path="/" component={HomeAdmin} />
            <Route exact path="/post" component={Post} />
            <Route path="/post/:id" component={Post_details} />

            <Route exact path="/message" component={Message} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
