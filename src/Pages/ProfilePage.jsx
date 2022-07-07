import { Component } from "react";
import { Link, Outlet } from "react-router-dom";

export default class ProfilePage extends Component {
  state = {
    number: 0,
  };

  addNumberHandler(value) {
    this.setState((prevState) => ({
      ...prevState,
      number: prevState.number + value,
    }));
  }
  render() {
    return (
      <>
        <Link to={`/profile/edit`}>Edit Profile</Link>
        <h2>{this.state.number}</h2>
        <button onClick={() => this.addNumberHandler(5)}>Add file</button>
        <Outlet />
      </>
    );
  }
}
