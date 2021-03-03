import React from "react";
import { Link } from "gatsby";

import { navBar } from "./header.module.css";

const Header = ({ siteTitle }) => {
  return (
    <header>
      <h1>{siteTitle}</h1>
      <nav className={navBar}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
