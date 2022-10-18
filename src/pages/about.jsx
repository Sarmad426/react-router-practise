import React from "react";
import { Link } from "react-router-dom";
export const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Link to="/" className="btn">
        Back Home
      </Link>
    </div>
  );
};
export default About;
