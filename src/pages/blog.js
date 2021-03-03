import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import PageLayout from "../components/layout.js";

const BlogPage = ({ data }) => {
  return (
    <PageLayout pageTitle="Blog Page">
      <ul>
        {data.allMdx.nodes.map((node) => (
          <li>
            <article>
              <h2>{node.frontmatter.title}</h2>
              <p>Posted: {node.frontmatter.date}</p>
              <MDXRenderer>{node.body}</MDXRenderer>
            </article>
            <hr />
          </li>
        ))}
      </ul>
    </PageLayout>
  );
};

export const query = graphql`
  query {
    allMdx(filter: { fileAbsolutePath: { regex: "/blog/" } }) {
      nodes {
        frontmatter {
          title
          date
        }
        body
      }
    }
  }
`;

export default BlogPage;
