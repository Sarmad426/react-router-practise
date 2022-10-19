import React, { Component } from "react";
class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <h3>Welcome {this.props.user.name.toUpperCase()}</h3>
      </div>
    );
  }
}

export default Dashboard;
