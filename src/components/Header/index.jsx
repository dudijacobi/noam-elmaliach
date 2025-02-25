import React from "react";
import CallUs from "./CallUs";
import SocialMedia from "./SocialMedia";
import Navigator from "./Navigator";
import "./index.css";

const Header = () => {
  return (
    <header className="header">
      <div className="main-header">
        <CallUs />
        <h1>נועם אלמליח - מיזוג אוויר</h1>
        <SocialMedia />
      </div>
      <Navigator />
    </header>
  );
};

export default Header;
