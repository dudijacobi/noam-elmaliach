import React from "react";
import { Link } from "react-router-dom";
import { NAVIGATION } from "../../paths";
import "./index.css";

const Navigator = () => {
  return (
    <div className="navigator">
      <ul className="nav-list">
        <Link to={NAVIGATION.About}>אודות</Link>
        <Link to={NAVIGATION.Projects}>פרוייקטים</Link>
        <Link to={NAVIGATION.Home}>דף הבית</Link>
      </ul>
    </div>
  );
};

export default Navigator;
