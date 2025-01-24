import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="p-5 mb-4 bg-body-tertiary rounded-3">
    <h1>Library Administration</h1>
    <p>React, Redux</p>
    <Link to="about" className="btn btn-primary btn-lg">
      Learn more
    </Link>
  </div>
);

export default HomePage;
