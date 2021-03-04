import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import bobashop from "./bobashop.jpg";

function Home() {
  return (
    <body className="covered">
      <h1 className="welcome">Welcome to the Tea Shop!</h1>
      <img className="bobashop" src={bobashop} alt="background" />
      <Link className="btn" to="/order">
        <div className="enter">Order Tea</div>
      </Link>
      <Link className="btn" to="/games">
        <div className="enter">Play Games</div>
      </Link>
      <a className="btn" href="https://www.p1coconuts.tk/">
        <div className="enter">Teashop V2</div>
      </a>
    </body>
  );
}

export default Home;
