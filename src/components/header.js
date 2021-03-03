import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

import { navBar } from "./header.module.css";

const Header = ({ pageTitle }) => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <h1>{data.site.siteMetadata.title}</h1>
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
