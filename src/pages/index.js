import * as React from "react";
import { Link } from "gatsby";

import PageLayout from "../components/layout.js";

// markup
const IndexPage = () => {
  return (
    <PageLayout pageTitle="Home Page">
      <p>Hi there, my name is Patric</p>
      <p>
        <Link to="/about">Go to the About page</Link>
      </p>
    </PageLayout>
  );
};

export default IndexPage;
