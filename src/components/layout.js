import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header.js";
import { pageContent } from "./layout.module.css";

const PageLayout = ({ children, pageTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          siteUrl
        }
      }
    }
  `);

  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {pageTitle} | {data.site.siteMetadata.title}
        </title>
        <link rel="canonical" href={data.site.siteMetadata.siteUrl} />
      </Helmet>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className={pageContent}>
        <h1>{pageTitle}</h1>
        {children}
      </div>
    </main>
  );
};

export default PageLayout;
