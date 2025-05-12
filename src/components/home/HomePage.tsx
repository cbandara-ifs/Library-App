import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div>
    <h1>Library Administration</h1>
    <p>React, Redux</p>
    <Link to="about" className="btn btn-primary btn-lg">
      Learn more
    </Link>
  </div>
);

export default HomePage;
