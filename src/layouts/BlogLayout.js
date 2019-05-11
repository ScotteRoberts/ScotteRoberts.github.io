import React from 'react';
import PropTypes from 'prop-types';
import NavBar from '../components/NavBar';

const BlogLayout = ({ children }) => (
  <main>
    <NavBar />
    <section>{children}</section>
  </main>
);

BlogLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array.isRequired, PropTypes.object.isRequired]),
};

export default BlogLayout;
