import * as React from "react";
import { graphql } from "gatsby";

import PageLayout from "../components/layout.js";

const BlogPage = ({ data }) => {
  return (
    <PageLayout pageTitle="Blog Page">
      <ul>
        {data.allFile.nodes.map((node) => (
          <li>{node.name}</li>
        ))}
      </ul>
    </PageLayout>
  );
};

export const query = graphql`
  query BlogQuery {
    allFile(filter: { dir: { regex: "/blog/" } }) {
      nodes {
        name
      }
    }
  }
`;

export default BlogPage;
