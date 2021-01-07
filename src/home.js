import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./home.css";
import bobashop from "./bobashop.jpg";

function Home() {
  return (
    <body>
      <img className="bobashop" src={bobashop} />
      <div className="enter">
        <Link className="btn" to="/order">
          Order Tea
        </Link>
      </div>
    </body>
  );
}

export default Home;
