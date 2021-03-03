import React from "react";

import Header from "./header.js";
import { pageContent } from "./layout.module.css";

const PageLayout = ({ children, pageTitle }) => {
  return (
    <main>
      <Header pageTitle={pageTitle} />
      <div className={pageContent}>
        <h1>{pageTitle}</h1>
        {children}
      </div>
    </main>
  );
};

export default PageLayout;
