import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import PageLayout from "../components/layout.js";

// markup
const IndexPage = () => {
  return (
    <PageLayout pageTitle="Home Page">
      <p>Hi there, my name is Patric</p>
      <StaticImage
        src="https://pbs.twimg.com/media/Evkn6fRWgAgxOWe?format=jpg&name=4096x4096"
        alt="Cute dog"
      />
      <StaticImage
        src="https://pbs.twimg.com/media/EvkqG2eVgAQe2Tm?format=jpg&name=4096x4096"
        alt="Another cute dog"
      />
    </PageLayout>
  );
};

export default IndexPage;
