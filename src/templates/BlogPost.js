import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import BlogLayout from '../layouts/BlogLayout';

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <BlogLayout>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </BlogLayout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.object.isRequired, // FIXME: Clean this later
};

export default BlogPost;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
