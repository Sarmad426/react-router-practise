import React from "react";
import { Link } from "react-router-dom";
export default class Error extends React.Component {
  render() {
    return (
      <div className="error">
        <h1>404</h1>
        <h2>Page Not Found:</h2>
        <Link to="/" className="btn">
          Back Home
        </Link>
      </div>
    );
  }
}
