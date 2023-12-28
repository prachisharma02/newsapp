import "./App.css";

import React, { Component } from "react";
import Navbar from "./Components/navbar";
import News from "./Components/News";
import NewsItem from "./Components/NewsItem";

export default class App extends Component {
  name = "Prachi";
  render() {
    return (
      <div className="App">
        {/* <h1>Hello My first Class based Component with {this.name}</h1> */}
        <Navbar></Navbar>
        <News></News>
      </div>
    );
  }
}
