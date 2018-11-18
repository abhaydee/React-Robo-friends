import React, { Component } from "react";
import CardList from "../components/CardList";
//import { robots } from "./robots";
import SearchBox from "../components/SearchBox";
import "tachyons";
import "./App.css";
import Scroll from '../components/Scroll';
class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ""
    };
  }

  componentDidMount() {
    console.log("fsgedfg");
    //this.setState({ robots: robots });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json();
      })
      .then(users => {
        this.setState({ robots: users });
      });
  }
  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });

    //console.log(filteredrobots);
  };
  render() {
    const filteredrobots = this.state.robots.filter(robots => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    /*const filteredrobots = this.state.robots.filter(robots => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });*/
    if (this.state.robots.length === 0) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f2"> RoboFriends</h1>
          <SearchBox searchchange={this.onSearchChange} />
          <Scroll>
          <CardList robots={filteredrobots} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
