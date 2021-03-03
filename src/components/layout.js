import React from "react";
import { Link } from "gatsby";

import { navBar, pageContent } from "./layout.module.css";

const PageLayout = ({ children, pageTitle }) => {
  return (
    <main>
      <title>{pageTitle} | Gatsby Getting Started</title>
      <nav className={navBar}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <div className={pageContent}>
        <h1>{pageTitle}</h1>
        {children}
      </div>
    </main>
  );
};

export default PageLayout;
