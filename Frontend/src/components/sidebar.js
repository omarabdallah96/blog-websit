import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class Siderbar extends React.Component {
 
  render() {
   




    return (
      <div id="side-bar">
        <Link to="/">
          <li>home</li>
        </Link>
        
        <Link to="/post">
          <li>Post</li>
        </Link>
        <Link to="/message" act>
          <li>Messages</li>
        </Link>
        <Link to="home">
          <li>logout</li>
        </Link>
      </div>
    );
  }
}
export default Siderbar;
