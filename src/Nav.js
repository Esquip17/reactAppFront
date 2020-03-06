import React, { Component } from "react";
import ReactDOM from "react-dom";

class Nav extends Component {
  render() {
    return (
      <div className="navbar">
        <form class="example" action="action_page.php">
          <input type="text" placeholder="Country Name" name="search"></input>
          <button type="submit"></button>
        </form>
      </div>
    );
  }
}

export default Nav;
