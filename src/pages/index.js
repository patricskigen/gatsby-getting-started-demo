import * as React from "react";
import { Link } from "gatsby";

import PageLayout from "../components/layout.js";

// markup
const IndexPage = () => {
  return (
    <PageLayout>
      <p>Hi there, my name is Patric</p>
      <Link to="/about">Go to the About page</Link>
    </PageLayout>
  );
};

export default IndexPage;
