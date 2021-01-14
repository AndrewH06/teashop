import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import bobashop from "./bobashop.jpg";

function Home() {
  return (
    <body className="covered">
      <h1 className="welcome">Welcome to the Tea Shop!</h1>
      <img className="bobashop" src={bobashop} alt="background" />
      <div className="enter">
        <Link className="btn" to="/order">
          Order Tea
        </Link>
      </div>
      <div className="enter">
        <Link className="btn" to="/games">
          Play Games
        </Link>
      </div>
    </body>
  );
}

export default Home;
