import flag from "./flagsofworld2.jpg";
import reactDom from "react-dom";
import React, { Component } from "react";
import Nav from "./Nav.js";
import "./App.css";

class App extends Component {
  render() {
    // constructor() {
    //   super();
    //   this.state = {
    //     Country: "http://localhost:8080/models"
    //   };
    // }
    // componentDidMount() {
    let url = "http://localhost:8080/models";
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(res => {
        // console.log(json);
        // this.setState({ Country: json.attachments[0].textgit });
        console.log(res);
      });

    return (
      <div className="mainHead">
        <h1>Countries, Capitals and Languages</h1>
        <img src={flag} />
        <Nav />
      </div>

      // <div></div>
    );
  }
}

export default App;
