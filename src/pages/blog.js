import React from 'react';
import { Link, graphql } from 'gatsby';
import BlogLayout from '../layouts/BlogLayout';
import Head from '../components/Head';
import '../styles/blog.scss';

const Blog = ({ data }) => (
  <>
    {/* TODO: Change the head title in the future... */}
    <Head title="Blog Posts | Portfolio" />
    <BlogLayout>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <article key={node.id} className="blog-post-item-container">
          <Link to={node.fields.slug} className="blog-post-item-link">
            <h3>
              {node.frontmatter.title}
              <span className="blog-post-item-date">{node.frontmatter.date}</span>
            </h3>
            <p>{node.excerpt}</p>
          </Link>
        </article>
      ))}
    </BlogLayout>
  </>
);

export default Blog;

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt(pruneLength: 100)
        }
      }
    }
  }
`;
