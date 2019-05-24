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
          {/* TODO: Make this an image container */}
          <div className="blog-thumbnail-container">
            <img src={node.frontmatter.thumbnail} alt={`${node.frontmatter.title} preview`} />
          </div>

          <Link to={node.fields.slug} className="blog-post-item-link">
            <h3>{node.frontmatter.title}</h3>
            <p>{node.frontmatter.date}</p>
            <p className="not-mobile">{node.frontmatter.description}</p>
            <p>
              <ins>Click to view more</ins> <i className="fas fa-chevron-right" />
            </p>
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
            description
            thumbnail
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
