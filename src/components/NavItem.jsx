import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ to, label }) => {
  return (
    <li className="menu-item">
      <Link to={to} className="menu-link">
        {label}
      </Link>
    </li>
  );
};

export default NavItem;
