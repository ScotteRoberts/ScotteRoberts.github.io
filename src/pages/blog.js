import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import BlogLayout from '../components/BlogLayout';
import '../styles/blog.css';

class Blog extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <BlogLayout title="Blog Posts">
        <Helmet>
          <meta charset="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Blog | Portfolio</title>
        </Helmet>

        {data.allMarkdownRemark.edges.map(({ node }) => (
          <article key={node.id} className="blog-post-item-container">
            <h3>
              {node.frontmatter.title} at {node.frontmatter.date}
            </h3>
            <p>{node.excerpt}</p>
          </article>
        ))}
      </BlogLayout>
    );
  }
}

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
          excerpt(pruneLength: 100)
        }
      }
    }
  }
`;