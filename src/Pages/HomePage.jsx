import { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
  render() {
    return <Link to="/profile">Go to Profile</Link>;
  }
}

export default HomePage;
