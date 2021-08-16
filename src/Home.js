import "./styles.css";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homeWrapper">
      {/* <h1>So What's Cooking Today?</h1> */}
      <Link to="/meals">
        <img
          className="homeImage"
          src="./img/healthy-eating.png"
          alt="cooking"
        />
      </Link>
    </div>
  );
};
export default Home;
